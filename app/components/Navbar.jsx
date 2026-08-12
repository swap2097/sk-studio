"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
    { name: "Work", href: "#work" },
    { name: "Services", href: "#services" },
    { name: "Process", href: "#process" },
    { name: "About", href: "#about" },
    ];

    export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [hidden, setHidden] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
        const currentScrollY = window.scrollY;

        setScrolled(currentScrollY > 40);

        if (currentScrollY > lastScrollY && currentScrollY > 120) {
            setHidden(true);
        } else {
            setHidden(false);
        }

        lastScrollY = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll, {
        passive: true,
        });

        return () => {
        window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Prevent page scrolling when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";

        return () => {
        document.body.style.overflow = "";
        };
    }, [menuOpen]);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <>
        <motion.header
            initial={{ y: 0 }}
            animate={{
            y: hidden && !menuOpen ? "-120%" : 0,
            }}
            transition={{
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1],
            }}
            className="fixed left-0 top-0 z-50 w-full px-4 pt-4 sm:px-6 lg:px-8"
        >
            <motion.nav
            animate={{
                paddingTop: scrolled ? 12 : 20,
                paddingBottom: scrolled ? 12 : 20,
                borderRadius: scrolled ? 999 : 0,
            }}
            transition={{
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
            }}
            className={`mx-auto flex max-w-7xl items-center justify-between px-5 lg:px-6 ${
                scrolled
                ? "border border-white/10 bg-[#0A0A0A]/75 shadow-2xl backdrop-blur-xl"
                : ""
            }`}
            >
            {/* Logo */}
            <a
                href="#"
                onClick={closeMenu}
                className="relative z-10 font-heading text-2xl tracking-tight text-white"
            >
                SK<span className="text-[#D4AF37]">.</span>
            </a>

            {/* Desktop navigation */}
            <div className="hidden items-center gap-8 md:flex">
                {navLinks.map((link) => (
                <a
                    key={link.name}
                    href={link.href}
                    className="relative text-sm text-white/50 transition-colors duration-300 hover:text-white"
                >
                    {link.name}

                    <span className="absolute -bottom-2 left-0 h-px w-0 bg-[#D4AF37] transition-all duration-300 hover:w-full" />
                </a>
                ))}

                <a
                href="#contact"
                className="group flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm text-white transition-all duration-300 hover:border-[#D4AF37] hover:text-[#D4AF37]"
                >
                Let&apos;s Talk

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                    ↗
                </span>
                </a>
            </div>

            {/* Mobile menu button */}
            <button
                type="button"
                onClick={() => setMenuOpen((prev) => !prev)}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
                className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white md:hidden"
            >
                <AnimatePresence mode="wait" initial={false}>
                {menuOpen ? (
                    <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                    >
                    <X size={20} />
                    </motion.div>
                ) : (
                    <motion.div
                    key="menu"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.2 }}
                    >
                    <Menu size={20} />
                    </motion.div>
                )}
                </AnimatePresence>
            </button>
            </motion.nav>
        </motion.header>

        {/* Mobile menu */}
        <AnimatePresence>
            {menuOpen && (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 z-40 bg-[#0A0A0A]/95 backdrop-blur-xl md:hidden"
            >
                <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                }}
                className="flex h-full flex-col justify-between px-6 pb-10 pt-32"
                >
                {/* Links */}
                <nav className="flex flex-col">
                    {navLinks.map((link, index) => (
                    <motion.a
                        key={link.name}
                        href={link.href}
                        onClick={closeMenu}
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                        duration: 0.5,
                        delay: 0.08 + index * 0.07,
                        ease: [0.22, 1, 0.36, 1],
                        }}
                        className="border-b border-white/10 py-5 font-heading text-5xl text-white"
                    >
                        {link.name}
                    </motion.a>
                    ))}
                </nav>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                    delay: 0.4,
                    duration: 0.5,
                    }}
                >
                    <a
                    href="#contact"
                    onClick={closeMenu}
                    className="group flex w-full items-center justify-between rounded-full bg-[#D4AF37] px-6 py-4 text-sm font-medium text-black"
                    >
                    Let&apos;s Talk

                    <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                        ↗
                    </span>
                    </a>

                    <p className="mt-5 text-center text-[10px] uppercase tracking-[0.25em] text-white/20">
                    SK Studio · Digital Experiences
                    </p>
                </motion.div>
                </motion.div>
            </motion.div>
            )}
        </AnimatePresence>
        </>
    );
}