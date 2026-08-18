import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
    name: z.string().trim().min(2).max(100),

    email: z.string().trim().email().max(200),

    project: z.string().trim().min(1).max(100),

    budget: z.string().trim().min(1).max(100),

    message: z.string().trim().min(10).max(500),

    website: z.string().optional().default(""),
    });

    export async function POST(request) {
    try {
        const body = await request.json();

        console.log("Received contact form:", body);

        const result = contactSchema.safeParse(body);

        if (!result.success) {
        console.error(
            "Zod validation failed:",
            result.error.flatten()
        );

        return Response.json(
            {
            success: false,
            message: "Please check your information and try again.",
            errors: result.error.flatten().fieldErrors,
            },
            { status: 400 }
        );
        }

        const {
        name,
        email,
        project,
        budget,
        message,
        website,
        } = result.data;

        // Honeypot
        if (website) {
        return Response.json({
            success: true,
        });
        }

        if (!process.env.RESEND_API_KEY) {
        console.error("RESEND_API_KEY is missing.");

        return Response.json(
            {
            success: false,
            message: "Email service is not configured.",
            },
            { status: 500 }
        );
        }

        if (!process.env.CONTACT_EMAIL) {
        console.error("CONTACT_EMAIL is missing.");

        return Response.json(
            {
            success: false,
            message: "Contact email is not configured.",
            },
            { status: 500 }
        );
        }

        const { data, error } = await resend.emails.send({
        from: "SK Studio <hello@skstudio20.in>",
        to: [process.env.CONTACT_EMAIL],
        replyTo: email,
        subject: `New project inquiry from ${name}`,

        html: `
            <div style="font-family: Arial, sans-serif; max-width: 650px; margin: 0 auto; color: #171717;">

            <h1>New SK Studio Inquiry</h1>

            <hr />

            <h3>Client</h3>

            <p>
                <strong>Name:</strong>
                ${escapeHtml(name)}
            </p>

            <p>
                <strong>Email:</strong>
                ${escapeHtml(email)}
            </p>

            <h3>Project</h3>

            <p>
                <strong>Service:</strong>
                ${escapeHtml(project)}
            </p>

            <p>
                <strong>Budget:</strong>
                ${escapeHtml(budget)}
            </p>

            <h3>Message</h3>

            <p style="white-space: pre-wrap;">
                ${escapeHtml(message)}
            </p>

            </div>
        `,
        });

        if (error) {
            console.error("Resend error:", error);

            return Response.json(
                {
                    success: false,
                    message: error.message || "Email could not be sent.",
                },
                { status: 500 }
            );
        }

        console.log("Email sent:", data);

        return Response.json({
        success: true,
        message: "Your inquiry has been sent.",
        });
    } catch (error) {
        console.error("Contact route error:", error);

        return Response.json(
        {
            success: false,
            message: "Something went wrong. Please try again.",
        },
        { status: 500 }
        );
    }
    }

    function escapeHtml(value) {
    return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}