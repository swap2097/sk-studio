"use client";

import { motion } from "framer-motion";

import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative flex min-h-screen items-center overflow-hidden bg-[#0A0A0A]">

        {/* Background glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/5 blur-[140px]" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-32 lg:px-8">

            <div className="mx-auto max-w-5xl text-center">

            {/* Eyebrow */}
            <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8 text-xs font-medium uppercase tracking-[0.35em] text-[#D4AF37]"
            >
            SK Studio · Digital Experiences
            </motion.p>

            {/* Main heading */}
            <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 1,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
            }}
            className="font-heading text-[3.8rem] leading-[0.88] tracking-[-0.03em] text-white sm:text-6xl md:text-7xl lg:text-[8.5rem]"
            >
            Premium websites
            <br />
            <span className="text-white/40">
                for creators.
            </span>
            </motion.h1>

            {/* Description */}
            <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.8,
                delay: 0.35,
            }}
            className="mx-auto mt-10 max-w-2xl text-base leading-7 text-white/50 sm:text-lg"
            >
            We design elegant, high-performance digital experiences
            that elevate your brand, build trust, and turn attention
            into action.
            </motion.p>

            {/* CTA */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.8,
                    delay: 0.5,
                }}
                className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

                <Link
                href="#work"
                className="rounded-full bg-[#D4AF37] px-7 py-3.5 text-sm font-medium text-black transition-all duration-300 hover:scale-105 hover:bg-[#E2C15A]"
                >
                View our work
                </Link>

                <Link
                href="#contact"
                className="rounded-full border border-white/20 px-7 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:border-[#D4AF37] hover:text-[#D4AF37]"
                >
                Let&apos;s talk
                </Link>

            </motion.div>

            </div>

            {/* Bottom scroll indicator */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.8,
                    delay: 0.5,
                }}
                className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex">

            <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">
                Scroll to explore
            </span>

            <div className="h-10 w-px bg-gradient-to-b from-[#D4AF37] to-transparent" />

            </motion.div>

        </div>
        </section>
    );
}