import { projects } from "@/data/projects";
import Link from "next/link";
import { notFound } from "next/navigation";


export function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
    }

export async function generateMetadata({ params }) {
const { slug } = await params;

const project = projects.find(
    (project) => project.slug === slug
);

if (!project) {
    return {};
}

return {
    title: `${project.title} | SK Studio`,
    description: project.description,
};
}

function CaseStudyVisual({ project }) {
    return (
        <div
        className="relative h-[500px] overflow-hidden sm:h-[650px] lg:h-[760px]"
        style={{
            backgroundColor: project.background,
        }}
        >

        {/* Browser top */}
        <div
            className="absolute left-0 right-0 top-0 z-20 flex h-11 items-center border-b px-5"
            style={{
            backgroundColor:
                project.theme === "light"
                ? "rgba(255,255,255,0.8)"
                : "rgba(10,10,10,0.7)",

            borderColor:
                project.theme === "light"
                ? "rgba(0,0,0,0.08)"
                : "rgba(255,255,255,0.08)",

            backdropFilter: "blur(12px)",
            }}
        >

            <div className="flex gap-1.5">
            {[1, 2, 3].map((dot) => (
                <span
                key={dot}
                className="h-2 w-2 rounded-full"
                style={{
                    backgroundColor:
                    project.theme === "light"
                        ? "#C8C3BD"
                        : "#4A4641",
                }}
                />
            ))}
            </div>

        </div>


        {/* Abstract project visual */}
        <div className="absolute inset-0 pt-11">

            <div
            className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full sm:h-[450px] sm:w-[450px]"
            style={{
                border: `1px solid ${project.accent}35`,
                boxShadow: `0 0 140px ${project.accent}15`,
            }}
            />

            <div
            className="absolute left-1/2 top-1/2 h-[180px] w-[130px] -translate-x-1/2 -translate-y-1/2 rotate-12 rounded-[50%]"
            style={{
                background: `linear-gradient(
                135deg,
                ${project.accent}55,
                transparent
                )`,
            }}
            />

            <div className="absolute left-[8%] top-[28%] z-10">

            <p
                className="text-[9px] uppercase tracking-[0.4em]"
                style={{
                color: project.accent,
                }}
            >
                {project.eyebrow}
            </p>

            <h3
                className="mt-5 max-w-3xl font-heading text-6xl leading-[0.8] sm:text-8xl lg:text-[9rem]"
                style={{
                color: project.text,
                }}
            >
                {project.heading}
            </h3>

            <button
                type="button"
                className="mt-8 rounded-full px-6 py-3 text-[8px] uppercase tracking-[0.25em]"
                style={{
                backgroundColor: project.accent,
                color:
                    project.theme === "light"
                    ? "#FFFFFF"
                    : "#0A0A0A",
                }}
            >
                {project.buttonText}
            </button>

            </div>

        </div>

        </div>
    );
}

function CaseStudyBlock({
    number,
    title,
    text,
    project,
    }) {
    return (
        <div
        className="border-t pt-7"
        style={{
            borderColor: `${project.text}12`,
        }}
        >

        <div className="flex items-center gap-3">

            <span
            className="text-xs"
            style={{
                color: project.accent,
            }}
            >
            {number}
            </span>

            <span
            className="h-px w-8"
            style={{
                backgroundColor: `${project.text}20`,
            }}
            />

            <span
            className="text-[10px] uppercase tracking-[0.25em]"
            style={{
                color: `${project.text}40`,
            }}
            >
            {title}
            </span>

        </div>

        <p
            className="mt-7 max-w-2xl text-base leading-8 sm:text-lg"
            style={{
            color: project.muted,
            }}
        >
            {text}
        </p>

        </div>
    );
}

export default async function CaseStudyPage({ params }) {
const { slug } = await params;

const project = projects.find(
    (project) => project.slug === slug
);

if (!project) {
    notFound();
}

const caseStudy = project.caseStudy;

return (
    <main
    className="min-h-screen"
    style={{
        backgroundColor: project.background,
        color: project.text,
    }}
    >

    {/* ========================================
        NAV
    ======================================== */}

    <header className="absolute left-0 right-0 top-0 z-50">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-7 lg:px-8">

        <Link
            href="/"
            className="font-heading text-sm tracking-wide"
            style={{
            color: project.text,
            }}
        >
            SK Studio
        </Link>

        <Link
            href="/#work"
            className="group flex items-center gap-2 text-xs uppercase tracking-[0.2em]"
            style={{
            color: project.muted,
            }}
        >
            Back to work

            <span className="transition-transform duration-300 group-hover:-translate-x-1">
            ←
            </span>
        </Link>

        </div>

    </header>


    {/* ========================================
        HERO
    ======================================== */}

    <section className="relative min-h-screen overflow-hidden px-6 pb-20 pt-36 lg:px-8">

        {/* Ambient glow */}
        <div
        className="pointer-events-none absolute left-1/2 top-[45%] h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]"
        style={{
            backgroundColor: `${project.accent}10`,
        }}
        />

        <div className="relative z-10 mx-auto max-w-7xl">

        <div className="max-w-5xl">

            <div className="mb-8 flex items-center gap-4">

            <span
                className="text-xs"
                style={{
                color: project.accent,
                }}
            >
                {project.number}
            </span>

            <span
                className="h-px w-10"
                style={{
                backgroundColor: `${project.text}25`,
                }}
            />

            <span
                className="text-[10px] uppercase tracking-[0.3em]"
                style={{
                color: project.muted,
                }}
            >
                {project.category}
            </span>

            </div>


            <h1
            className="font-heading text-[4rem] leading-[0.82] tracking-[-0.03em] sm:text-7xl md:text-8xl lg:text-[9rem]"
            style={{
                color: project.text,
            }}
            >
            {project.title}
            </h1>


            <p
            className="mt-10 max-w-2xl text-base leading-7 sm:text-lg"
            style={{
                color: project.muted,
            }}
            >
            {caseStudy.intro}
            </p>

        </div>


        {/* Project metadata */}
        <div className="mt-20 grid gap-10 border-t pt-8 sm:grid-cols-3"
            style={{
            borderColor: `${project.text}15`,
            }}
        >

            <div>
            <p
                className="text-[9px] uppercase tracking-[0.25em]"
                style={{
                color: `${project.text}40`,
                }}
            >
                Services
            </p>

            <div className="mt-3 space-y-1">
                {project.services.map((service) => (
                <p
                    key={service}
                    className="text-sm"
                    style={{
                    color: project.muted,
                    }}
                >
                    {service}
                </p>
                ))}
            </div>
            </div>


            <div>
            <p
                className="text-[9px] uppercase tracking-[0.25em]"
                style={{
                color: `${project.text}40`,
                }}
            >
                Type
            </p>

            <p
                className="mt-3 text-sm"
                style={{
                color: project.muted,
                }}
            >
                {project.type}
            </p>
            </div>


            <div>
            <p
                className="text-[9px] uppercase tracking-[0.25em]"
                style={{
                color: `${project.text}40`,
                }}
            >
                Year
            </p>

            <p
                className="mt-3 text-sm"
                style={{
                color: project.muted,
                }}
            >
                {project.year}
            </p>
            </div>

        </div>

        </div>

    </section>


    {/* ========================================
        VISUAL
    ======================================== */}

    <section className="px-6 py-10 lg:px-8">

        <div
        className="mx-auto max-w-7xl overflow-hidden rounded-[24px] border"
        style={{
            borderColor: `${project.text}15`,
        }}
        >

        <CaseStudyVisual project={project} />

        </div>

    </section>


    {/* ========================================
        CASE STUDY CONTENT
    ======================================== */}

    <section className="px-6 py-28 lg:px-8 lg:py-40">

        <div className="mx-auto max-w-7xl">

        <div className="grid gap-20 lg:grid-cols-[0.7fr_1fr]">

            {/* Left */}
            <div>

            <p
                className="text-[10px] uppercase tracking-[0.3em]"
                style={{
                color: project.accent,
                }}
            >
                The approach
            </p>

            <h2
                className="mt-6 font-heading text-5xl leading-[0.9] sm:text-6xl"
                style={{
                color: project.text,
                }}
            >
                Designed around
                <br />
                the person.
            </h2>

            </div>


            {/* Right */}
            <div className="space-y-16">

            <CaseStudyBlock
                number="01"
                title="The challenge"
                text={caseStudy.challenge}
                project={project}
            />

            <CaseStudyBlock
                number="02"
                title="The approach"
                text={caseStudy.approach}
                project={project}
            />

            <CaseStudyBlock
                number="03"
                title="The result"
                text={caseStudy.result}
                project={project}
            />

            </div>

        </div>

        </div>

    </section>


    {/* ========================================
        HIGHLIGHTS
    ======================================== */}

    <section
        className="border-y px-6 py-24 lg:px-8"
        style={{
        borderColor: `${project.text}12`,
        }}
    >

        <div className="mx-auto max-w-7xl">

        <p
            className="text-[10px] uppercase tracking-[0.3em]"
            style={{
            color: project.accent,
            }}
        >
            Project highlights
        </p>


        <div className="mt-12 grid gap-0 sm:grid-cols-2 lg:grid-cols-4">

            {caseStudy.highlights.map((highlight, index) => (
            <div
                key={highlight}
                className="border-t px-0 py-7 sm:px-6"
                style={{
                borderColor: `${project.text}12`,
                }}
            >

                <span
                className="text-xs"
                style={{
                    color: project.accent,
                }}
                >
                0{index + 1}
                </span>

                <p
                className="mt-5 max-w-[180px] text-sm leading-6"
                style={{
                    color: project.muted,
                }}
                >
                {highlight}
                </p>

            </div>
            ))}

        </div>

        </div>

    </section>


    {/* ========================================
        FINAL CTA
    ======================================== */}

    <section className="px-6 py-32 text-center lg:px-8 lg:py-44">

        <p
        className="text-[10px] uppercase tracking-[0.3em]"
        style={{
            color: project.accent,
        }}
        >
        Start your project
        </p>

        <h2
        className="mx-auto mt-7 max-w-4xl font-heading text-5xl leading-[0.9] sm:text-7xl lg:text-8xl"
        style={{
            color: project.text,
        }}
        >
        Ready to create
        <br />
        something memorable?
        </h2>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full px-7 py-4 text-sm font-medium transition-transform duration-300 hover:scale-105"
                style={{
                backgroundColor: project.accent,
                color: project.theme === "light"
                    ? "#FFFFFF"
                    : "#0A0A0A",
                }}
            >
                Visit live website
                <span>↗</span>
            </a>

            <Link
                href="/#contact"
                className="inline-flex items-center gap-3 rounded-full border px-7 py-4 text-sm font-medium transition-transform duration-300 hover:scale-105"
                style={{
                borderColor: `${project.text}25`,
                color: project.text,
                }}
            >
                Let&apos;s Talk
                <span>↗</span>
            </Link>
            </div>

    </section>


    {/* ========================================
        FOOTER
    ======================================== */}

    <footer
        className="border-t px-6 py-8 lg:px-8"
        style={{
        borderColor: `${project.text}12`,
        }}
    >

        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-xs sm:flex-row sm:items-center sm:justify-between">

        <span
            style={{
            color: `${project.text}30`,
            }}
        >
            © {new Date().getFullYear()} SK Studio
        </span>

        <Link
            href="/#work"
            style={{
            color: project.muted,
            }}
        >
            Back to selected work ↗
        </Link>

        </div>

    </footer>

    </main>
);
}