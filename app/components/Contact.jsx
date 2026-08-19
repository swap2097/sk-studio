"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import SuccessState from "./SuccessState";
import Field from "./Field";
import SelectField from "./SelectField";

export default function Contact() {
    const [status, setStatus] = useState("idle");
    const [message, setMessage] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        setStatus("loading");

        const form = event.currentTarget;
        const formData = new FormData(form);

        const data = {
        name: formData.get("name")?.toString().trim(),
        email: formData.get("email")?.toString().trim(),
        project: formData.get("project")?.toString().trim(),
        budget: formData.get("budget")?.toString().trim(),
        message: formData.get("message")?.toString().trim(),
        website: formData.get("website")?.toString().trim() || "",
        };

        console.log("Submitting contact form:", data);

        try {
        const response = await fetch("/api/contact", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();

        console.log("Contact API response:", result);

        if (!response.ok) {
            console.error("Contact API error:", {
                status: response.status,
                result,
            });

            console.error(
                "Validation errors:",
                JSON.stringify(result.errors, null, 2)
            );

            throw new Error(
                result.message || "Something went wrong."
            );
        }

        setStatus("success");
        setMessage("");
        form.reset();
        } catch (error) {
        console.error("Contact submission failed:", error);

        setStatus("error");
        }
    };

    return (
        <section
        id="contact"
        className="relative overflow-hidden bg-[var(--background)] px-6 py-32 lg:px-8 lg:py-40"
        >
        {/* Ambient glow */}
        <div
            className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[500px]
            w-[500px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[var(--gold)]/[0.04]
            blur-[140px]
            "
        />

        <div className="relative z-10 mx-auto max-w-7xl">

            {/* Top label */}
            <div className="mb-20 border-t border-white/10 pt-8">
            <p className="text-xs uppercase tracking-[0.3em] text-white/30">
                Start a project
            </p>
            </div>

            <div className="grid gap-20 lg:grid-cols-[1fr_0.85fr] lg:gap-32">

            {/* ========================================
                LEFT CONTENT
            ======================================== */}

            <div>

                <p className="mb-6 text-xs font-medium uppercase tracking-[0.35em] text-[var(--gold)]">
                Let&apos;s Work Together
                </p>

                <h2
                className="
                    font-heading
                    max-w-4xl
                    text-[3.8rem]
                    leading-[0.88]
                    tracking-[-0.025em]
                    text-white
                    sm:text-7xl
                    lg:text-[7.5rem]
                "
                >
                Let&apos;s create
                <br />

                <span className="text-white/35">
                    something unforgettable.
                </span>
                </h2>

                <p className="mt-10 max-w-lg text-sm leading-7 text-white/40 sm:text-base">
                Have a project in mind, or simply want to explore
                what&apos;s possible? Tell us a little about it and
                we&apos;ll take it from there.
                </p>

                {/* Contact links */}
                <div className="mt-12 space-y-5">

                <a
                    href="mailto:swapy2097@gmail.com"
                    className="
                    group
                    flex
                    w-fit
                    items-center
                    gap-3
                    text-sm
                    text-white
                    transition-colors
                    duration-300
                    hover:text-[var(--gold)]
                    "
                >
                    hello@skstudio.com

                    <span
                    className="
                        opacity-0
                        transition-opacity
                        duration-300
                        group-hover:opacity-100
                    "
                    >
                    ↗
                    </span>
                </a>

                <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="
                    block
                    w-fit
                    text-sm
                    text-white/40
                    transition-colors
                    duration-300
                    hover:text-white
                    "
                >
                    Instagram ↗
                </a>

                </div>
            </div>

            {/* ========================================
                RIGHT CONTENT
            ======================================== */}

            <div>

                <AnimatePresence mode="wait">

                {/* ====================================
                    SUCCESS STATE
                ==================================== */}

                {status === "success" ? (
                    <motion.div
                    key="success"
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    exit={{
                        opacity: 0,
                        y: -10,
                    }}
                    transition={{
                        duration: 0.6,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    >
                    <SuccessState />
                    </motion.div>

                ) : (

                    /* ====================================
                    FORM
                    ==================================== */

                    <motion.form
                    key="form"
                    initial={{
                        opacity: 1,
                    }}
                    exit={{
                        opacity: 0,
                        y: -10,
                    }}
                    onSubmit={handleSubmit}
                    className="border-t border-white/10"
                    >

                    {/* ==================================
                        HONEYPOT
                    ================================== */}

                    <div
                        aria-hidden="true"
                        className="
                        absolute
                        left-[-9999px]
                        top-auto
                        h-0
                        w-0
                        overflow-hidden
                        "
                    >
                        <label htmlFor="website">
                        Website
                        </label>

                        <input
                        id="website"
                        name="website"
                        type="text"
                        tabIndex="-1"
                        autoComplete="off"
                        />
                    </div>

                    {/* Name */}
                    <Field
                        label="Your name"
                        name="name"
                        type="text"
                        placeholder="Emily"
                        required
                        autoComplete="name"
                    />

                    {/* Email */}
                    <Field
                        label="Email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        required
                        autoComplete="email"
                    />

                    {/* Project */}
                    <SelectField
                        label="What are you looking for?"
                        name="project"
                        required
                        options={[
                        "Signature Website",
                        "Conversion Experience",
                        "Brand Direction",
                        "Ongoing Support",
                        "Something else",
                        ]}
                    />

                    {/* Budget */}
                    <SelectField
                        label="Estimated budget"
                        name="budget"
                        required
                        options={[
                        "$1,500 – $3,000",
                        "$3,000 – $5,000",
                        "$5,000 – $10,000",
                        "$10,000+",
                        ]}
                    />

                    {/* ==================================
                        MESSAGE
                    ================================== */}

                    <div className="group relative border-b border-white/10 py-6">

                        <label
                        htmlFor="message"
                        className="
                            mb-3
                            block
                            text-[10px]
                            uppercase
                            tracking-[0.25em]
                            text-white/30
                        "
                        >
                        Tell us about your project
                        </label>

                        <textarea
                            id="message"
                            name="message"
                            rows={4}
                            required
                            minLength={10}
                            maxLength={500}
                            value={message}
                            onChange={(event) => setMessage(event.target.value)}
                            placeholder="Tell us what you're building..."
                            className="w-full resize-none bg-transparent text-base leading-7 text-white outline-none placeholder:text-white/15"
                        />
                        
                        {/* Character counter */}
                        <span
                        className="
                            absolute
                            bottom-2
                            right-0
                            text-[9px]
                            text-white/20
                        "
                        >
                        {message.length}/500
                        </span>

                        {/* Focus line */}
                        <span
                        className="
                            absolute
                            bottom-0
                            left-0
                            h-px
                            w-0
                            bg-[var(--gold)]
                            transition-all
                            duration-500
                            group-focus-within:w-full
                        "
                        />

                    </div>

                    {/* ==================================
                        SUBMIT
                    ================================== */}

                    <div className="pt-8">

                        <button
                        type="submit"
                        disabled={status === "loading"}
                        className="
                            group
                            flex
                            w-full
                            items-center
                            justify-between
                            rounded-full
                            bg-[var(--gold)]
                            px-7
                            py-4
                            text-sm
                            font-medium
                            text-black
                            transition-all
                            duration-300
                            hover:bg-[var(--gold-light)]
                            disabled:cursor-not-allowed
                            disabled:opacity-60
                        "
                        >
                        <span>
                            {status === "loading"
                            ? "Sending..."
                            : "Send inquiry"}
                        </span>

                        <span
                            className="
                            transition-transform
                            duration-300
                            group-hover:translate-x-1
                            "
                        >
                            {status === "loading"
                            ? "..."
                            : "↗"}
                        </span>
                        </button>

                        {/* Error */}
                        {status === "error" && (
                        <motion.p
                            initial={{
                            opacity: 0,
                            y: 5,
                            }}
                            animate={{
                            opacity: 1,
                            y: 0,
                            }}
                            className="
                            mt-4
                            text-center
                            text-xs
                            text-red-400
                            "
                        >
                            Something went wrong.
                            Please try again or email us directly.
                        </motion.p>
                        )}

                        <p
                        className="
                            mt-4
                            text-center
                            text-[10px]
                            leading-5
                            text-white/20
                        "
                        >
                        We&apos;ll review your inquiry and get back
                        to you with next steps.
                        </p>

                    </div>

                    </motion.form>
                )}

                </AnimatePresence>

            </div>
            </div>
        </div>
        </section>
    );
}

