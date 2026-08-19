"use client";

import { motion } from "framer-motion";

const footerLinks = [
    {
        label: "Work",
        href: "#work",
    },
    {
        label: "Services",
        href: "#services",
    },
    {
        label: "About",
        href: "#about",
    },
    {
        label: "Process",
        href: "#process",
    },
    {
        label: "FAQ",
        href: "#faq",
    },
    {
        label: "Contact",
        href: "#contact",
    },
    ];

    export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative overflow-hidden bg-[#0A0A0A] px-6 pb-8 pt-24 text-white lg:px-8 lg:pt-32">
        
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
            bg-[#D4AF37]/[0.025]
            blur-[140px]
            "
        />

        <div className="relative z-10 mx-auto max-w-7xl">

            {/* ========================================
                TOP
            ======================================== */}

            <div className="grid gap-16 border-t border-white/10 pt-10 md:grid-cols-[1fr_auto]">

            {/* Brand */}
            <div>

                <p className="text-[10px] uppercase tracking-[0.35em] text-[#D4AF37]">
                SK Studio
                </p>

                <h2
                className="
                    mt-7
                    max-w-4xl
                    font-heading
                    text-[3.5rem]
                    leading-[0.88]
                    tracking-[-0.03em]
                    sm:text-6xl
                    lg:text-[7rem]
                "
                >
                Digital experiences
                <br />

                <span className="text-white/30">
                    worth remembering.
                </span>
                </h2>

            </div>


            {/* Navigation */}
            <div className="md:min-w-[180px]">

                <p className="mb-6 text-[10px] uppercase tracking-[0.3em] text-white/25">
                Explore
                </p>

                <nav className="flex flex-col gap-3">
                {footerLinks.map((link) => (
                    <a
                    key={link.href}
                    href={link.href}
                    className="
                        group
                        flex
                        w-fit
                        items-center
                        gap-2
                        text-sm
                        text-white/50
                        transition-colors
                        duration-300
                        hover:text-white
                    "
                    >
                    <span>
                        {link.label}
                    </span>

                    <span
                        className="
                        translate-x-[-4px]
                        opacity-0
                        transition-all
                        duration-300
                        group-hover:translate-x-0
                        group-hover:opacity-100
                        "
                    >
                        ↗
                    </span>
                    </a>
                ))}
                </nav>

            </div>

            </div>


            {/* ========================================
                CTA
            ======================================== */}

            <div
            className="
                mt-24
                flex
                flex-col
                gap-8
                border-y
                border-white/10
                py-10
                sm:flex-row
                sm:items-center
                sm:justify-between
            "
            >

            <div>

                <p className="text-xs uppercase tracking-[0.3em] text-white/25">
                Have something in mind?
                </p>

                <p className="mt-2 text-sm text-white/50">
                Let&apos;s make it worth visiting.
                </p>

            </div>


            <a
                href="#contact"
                className="
                group
                flex
                w-fit
                items-center
                gap-4
                rounded-full
                bg-[#D4AF37]
                px-6
                py-3
                text-sm
                font-medium
                text-black
                transition-all
                duration-300
                hover:scale-[1.03]
                hover:bg-[#E0C35A]
                "
            >
                Let&apos;s Talk

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                ↗
                </span>
            </a>

            </div>


            {/* ========================================
                BOTTOM
            ======================================== */}

            <div className="flex flex-col gap-8 pt-8 sm:flex-row sm:items-end sm:justify-between">

            {/* Copyright */}
            <div className="space-y-2">

                <p className="text-[10px] uppercase tracking-[0.25em] text-white/20">
                © {currentYear} SK Studio
                </p>

                <p className="text-[10px] text-white/15">
                Crafted with intention.
                </p>

            </div>


            {/* Social */}
            <div className="flex items-center gap-6">

                <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="
                    text-[10px]
                    uppercase
                    tracking-[0.25em]
                    text-white/30
                    transition-colors
                    duration-300
                    hover:text-white
                "
                >
                Instagram ↗
                </a>

                <a
                href="mailto:swapy2097@gmail.com"
                className="
                    text-[10px]
                    uppercase
                    tracking-[0.25em]
                    text-white/30
                    transition-colors
                    duration-300
                    hover:text-white
                "
                >
                Email ↗
                </a>

            </div>

            </div>


            {/* ========================================
                SK WATERMARK
            ======================================== */}

            <div className="mt-20 overflow-hidden">

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 0.035, y: 0 }}
                viewport={{ once: true }}
                transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
                }}
                className="
                select-none
                whitespace-nowrap
                text-center
                font-heading
                text-[25vw]
                leading-[0.7]
                tracking-[-0.08em]
                "
            >
                SK
            </motion.div>

            </div>

        </div>
        </footer>
    );
}