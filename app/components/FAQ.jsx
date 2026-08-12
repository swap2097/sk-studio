"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const faqs = [
    {
        question: "How does a project start?",
        answer:
        "Every project begins with a discovery conversation. We discuss your brand, audience, goals, existing digital presence, and what you want the new experience to achieve. From there, we define the right scope and direction.",
    },
    {
        question: "How long does a website take?",
        answer:
        "Most projects take around 2 to 6 weeks depending on the scope, number of pages, content requirements, and level of customization. A clear timeline is established before development begins.",
    },
    {
        question: "What does a typical project include?",
        answer:
        "A typical project can include strategy, visual direction, custom UI design, responsive development, performance optimization, SEO foundations, analytics, testing, and launch support.",
    },
    {
        question: "Can you work with my existing brand?",
        answer:
        "Absolutely. If your visual identity is already established, we can build around it. If it needs refinement, we can help bring your typography, colors, imagery, and overall digital direction into a more cohesive system.",
    },
    {
        question: "Do you provide ongoing support?",
        answer:
        "Yes. After launch, ongoing support can include content updates, technical maintenance, performance checks, analytics reviews, and continued improvements as your brand grows.",
    },
    ];

    export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex((current) => (current === index ? null : index));
    };

    return (
        <section
        id="faq"
        className="bg-[var(--background)] px-6 py-32 lg:px-8 lg:py-40"
        >
        <div className="mx-auto max-w-7xl">

            <div className="grid gap-16 lg:grid-cols-[0.75fr_1.25fr] lg:gap-28">

            {/* Left */}
            <div>
                <p className="mb-5 text-xs font-medium uppercase tracking-[0.35em] text-[var(--gold)]">
                FAQ
                </p>

                <h2 className="font-heading text-[3.2rem] leading-[0.9] tracking-[-0.02em] text-[var(--text)] sm:text-6xl lg:text-7xl">
                A few things
                <br />
                <span className="text-white/35">
                    you may wonder.
                </span>
                </h2>

                <p className="mt-8 max-w-sm text-sm leading-7 text-[var(--muted)]">
                Still have a question? Tell us about your project and
                we&apos;ll figure out the right direction together.
                </p>

                <a
                href="#contact"
                className="group mt-8 inline-flex items-center gap-3 text-sm text-white transition-colors duration-300 hover:text-[var(--gold)]"
                >
                Start a conversation

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                    ↗
                </span>
                </a>
            </div>

            {/* Accordion */}
            <div className="border-t border-white/10">

                {faqs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                    <div
                    key={faq.question}
                    className={`border-b border-white/10 transition-colors duration-500 ${
                        isOpen ? "border-white/20" : ""
                    }`}
                    >

                    <button
                        type="button"
                        onClick={() => toggleFAQ(index)}
                        aria-expanded={isOpen}
                        className="group flex w-full items-center justify-between gap-8 py-7 text-left sm:py-8"
                    >
                        <span
                        className={`font-heading text-2xl leading-tight transition-colors duration-300 sm:text-3xl ${
                            isOpen
                            ? "text-white"
                            : "text-white/80 group-hover:text-white"
                        }`}
                        >
                        {faq.question}
                        </span>

                        {/* Plus */}
                        <span
                        className={`relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${
                            isOpen
                            ? "border-[var(--gold)]/50 text-[var(--gold)]"
                            : "border-white/10 text-white/40 group-hover:border-white/25 group-hover:text-white"
                        }`}
                        >
                        <span
                            className={`absolute h-px w-3 bg-current transition-transform duration-500 ${
                            isOpen ? "rotate-45" : ""
                            }`}
                        />

                        <span
                            className={`absolute h-px w-3 bg-current transition-transform duration-500 ${
                            isOpen ? "-rotate-45" : "rotate-90"
                            }`}
                        />
                        </span>
                    </button>

                    <AnimatePresence initial={false}>
                        {isOpen && (
                        <motion.div
                            initial={{
                            height: 0,
                            opacity: 0,
                            }}
                            animate={{
                            height: "auto",
                            opacity: 1,
                            }}
                            exit={{
                            height: 0,
                            opacity: 0,
                            }}
                            transition={{
                            height: {
                                duration: 0.45,
                                ease: [0.22, 1, 0.36, 1],
                            },
                            opacity: {
                                duration: 0.25,
                            },
                            }}
                            className="overflow-hidden"
                        >
                            <p className="max-w-2xl pb-8 pr-12 text-sm leading-7 text-white/40">
                            {faq.answer}
                            </p>
                        </motion.div>
                        )}
                    </AnimatePresence>

                    </div>
                );
                })}

            </div>
            </div>
        </div>
        </section>
    );
}