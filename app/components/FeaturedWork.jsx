import { projects } from "@/data/projects";
import ProjectMockup from "@/ui/ProjectMockup";

import Reveal from "../animations/Reveal";
import LunaParallax from "../animations/LunaParallax";
import Link from "next/link";

export default function FeaturedWork() {
    const featuredProject = projects[0];
    const secondaryProjects = projects.slice(1);

    return (
        <section
        id="work"
        className="bg-[#0A0A0A] px-6 py-32 lg:px-8 lg:py-40"
        >
        <div className="mx-auto max-w-7xl">

            {/* ========================================
                SECTION HEADER
            ======================================== */}

            <div className="mb-20 grid gap-8 md:grid-cols-[1fr_320px] md:items-end">

            <div>
                <p className="mb-5 text-xs font-medium uppercase tracking-[0.35em] text-[#D4AF37]">
                Selected Work
                </p>

                <h2 className="font-heading text-5xl leading-[0.95] text-white sm:text-6xl lg:text-7xl">
                Digital experiences
                <br />

                <span className="text-white/40">
                    crafted with intention.
                </span>
                </h2>
            </div>

            <div className="max-w-sm">

                <div className="mb-4 flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />

                <span className="text-[10px] uppercase tracking-[0.25em] text-white/30">
                    Concept Projects
                </span>
                </div>

                <p className="text-sm leading-6 text-white/40">
                Explorations created by SK Studio to demonstrate
                our approach to premium creator experiences.
                </p>

            </div>
            </div>


            {/* ========================================
                FEATURED PROJECT
            ======================================== */}

            <Reveal>
            <article className="group">

                {/* Mockup */}
                <div
                className="
                    relative
                    overflow-hidden
                    rounded-[20px]
                    border
                    border-white/10
                    bg-[#141414]
                    shadow-2xl
                    transition-colors
                    duration-700
                    group-hover:border-white/20
                "
                >

                <LunaParallax>
                    <div className="h-[500px] sm:h-[620px] lg:h-[720px]">
                    <ProjectMockup project={featuredProject} />
                    </div>
                </LunaParallax>

                {/* Hover overlay */}
                <div
                    className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-white/[0.02]
                    opacity-0
                    transition-opacity
                    duration-700
                    group-hover:opacity-100
                    "
                />

                </div>


                {/* Project information */}
                <div className="mt-8 grid gap-8 md:grid-cols-[1fr_1.2fr]">

                {/* Title */}
                <div>

                    <div className="mb-3 flex items-center gap-3">

                    <span className="text-xs text-[#D4AF37]">
                        {featuredProject.number}
                    </span>

                    <span className="h-px w-8 bg-white/20" />

                    <span className="text-xs uppercase tracking-[0.2em] text-white/40">
                        {featuredProject.category}
                    </span>

                    </div>

                    <h3
                    className="
                        font-heading
                        text-4xl
                        text-white
                        transition-transform
                        duration-500
                        group-hover:translate-x-2
                        sm:text-5xl
                    "
                    >
                    {featuredProject.title}
                    </h3>

                    <div className="mt-5 flex items-center gap-2">

                    <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />

                    <span className="text-[9px] uppercase tracking-[0.25em] text-white/25">
                        {featuredProject.type} · SK Studio
                    </span>

                    </div>

                </div>


                {/* Description + services */}
                <div className="grid gap-8 sm:grid-cols-[1fr_auto]">

                    <div>
                    <p className="max-w-lg text-sm leading-7 text-white/40">
                        {featuredProject.description}
                    </p>
                    </div>

                    <div className="sm:text-right">

                    <p className="text-[10px] uppercase tracking-[0.25em] text-white/30">
                        Services
                    </p>

                    <div className="mt-3 space-y-1">
                        {featuredProject.services.map((service) => (
                        <p
                            key={service}
                            className="text-sm text-white/60"
                        >
                            {service}
                        </p>
                        ))}
                    </div>

                    <p className="mt-5 text-xs text-white/20">
                        {featuredProject.year}
                    </p>

                    </div>

                </div>

                </div>


                {/* Explore */}
                <div className="mt-7 border-t border-white/10 pt-5">

                <Link
                href={`/work/${featuredProject.slug}`}
                className="group/button flex items-center gap-3 text-sm text-white transition-colors duration-300 hover:text-[#D4AF37]"
                >
                View case study

                    <span className="transition-transform duration-300 group-hover/button:translate-x-1">
                        ↗
                    </span>
                </Link>

                </div>

            </article>
            </Reveal>


            {/* ========================================
                SECONDARY PROJECTS
            ======================================== */}

            <div className="mt-28 grid gap-12 md:grid-cols-2">

            {secondaryProjects.map((project, index) => (
                <Reveal
                key={project.title}
                delay={index * 0.12}
                >
                <article className="group">

                    {/* Mockup */}
                    <div
                    className="
                        relative
                        overflow-hidden
                        rounded-2xl
                        border
                        border-white/10
                        bg-[#141414]
                        transition-colors
                        duration-700
                        group-hover:border-white/20
                    "
                    >

                    <div
                        className="
                        h-[420px]
                        transition-transform
                        duration-700
                        ease-out
                        group-hover:scale-[1.02]
                        sm:h-[500px]
                        "
                    >
                        <ProjectMockup project={project} />
                    </div>

                    <div
                        className="
                        pointer-events-none
                        absolute
                        inset-0
                        bg-white/[0.02]
                        opacity-0
                        transition-opacity
                        duration-700
                        group-hover:opacity-100
                        "
                    />

                    </div>


                    {/* Project details */}
                    <div className="mt-7">

                    {/* Number + Category */}
                    <div className="mb-4 flex items-center gap-3">

                        <span className="text-xs text-[#D4AF37]">
                        {project.number}
                        </span>

                        <span className="h-px w-8 bg-white/20" />

                        <span className="text-[10px] uppercase tracking-[0.25em] text-white/30">
                        {project.category}
                        </span>

                    </div>


                    {/* Title + year */}
                    <div className="flex items-start justify-between gap-6">

                        <h3
                        className="
                            font-heading
                            text-4xl
                            text-white
                            transition-transform
                            duration-500
                            group-hover:translate-x-1
                        "
                        >
                        {project.title}
                        </h3>

                        <span className="pt-2 text-xs text-white/20">
                        {project.year}
                        </span>

                    </div>


                    {/* Description */}
                    <p className="mt-4 max-w-lg text-sm leading-7 text-white/40">
                        {project.description}
                    </p>


                    {/* Bottom metadata */}
                    <div className="mt-6 flex flex-col gap-5 border-t border-white/10 pt-5 sm:flex-row sm:items-end sm:justify-between">

                        {/* Services */}
                        <div>

                        <p className="text-[9px] uppercase tracking-[0.25em] text-white/25">
                            Services
                        </p>

                        <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1">

                            {project.services.map((service) => (
                            <span
                                key={service}
                                className="text-xs text-white/50"
                            >
                                {service}
                            </span>
                            ))}

                        </div>

                        </div>


                        {/* Concept */}
                        <span className="text-[9px] uppercase tracking-[0.25em] text-white/20">
                        {project.type}
                        </span>

                    </div>


                    {/* Explore */}
                    <div className="mt-6">

                        <Link
                        href={`/work/${project.slug}`}
                        className="group/button flex items-center gap-3 text-sm text-white transition-colors duration-300 hover:text-[#D4AF37]"
                        >
                        View case study

                            <span className="transition-transform duration-300 group-hover/button:translate-x-1">
                                ↗
                            </span>
                        </Link>

                    </div>

                    </div>

                </article>
                </Reveal>
            ))}

            </div>

        </div>
        </section>
    );
}