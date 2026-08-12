import Reveal from "../animations/Reveal";

const services = [
    {
        number: "01",
        title: "Signature Website",
        description:
        "A custom digital home designed around your personality, aesthetic, and audience. Fast, responsive, and built to make your brand feel unmistakably yours.",
        features: [
        "Custom visual direction",
        "Mobile-first experience",
        "Performance optimized",
        "SEO-ready architecture",
        ],
    },
    {
        number: "02",
        title: "Conversion Experience",
        description:
        "Turn attention into action with intentional journeys that guide visitors from discovery to subscription without making the experience feel transactional.",
        features: [
        "Strategic landing pages",
        "Clear conversion paths",
        "CTA placement & hierarchy",
        "Analytics integration",
        ],
    },
    {
        number: "03",
        title: "Brand Direction",
        description:
        "Create a visual identity that feels consistent across your website and digital presence, from typography and color to imagery and tone.",
        features: [
        "Typography system",
        "Color direction",
        "Visual language",
        "Content hierarchy",
        ],
    },
    {
        number: "04",
        title: "Ongoing Support",
        description:
        "Your website shouldn't be finished the day it launches. We keep it fast, secure, current, and ready for whatever comes next.",
        features: [
        "Content updates",
        "Performance monitoring",
        "Technical maintenance",
        "Continuous refinement",
        ],
    },
    ];

    export default function Services() {
    return (
        <section
        id="services"
        className="bg-[#0A0A0A] px-6 py-32 lg:px-8 lg:py-40"
        >
        <div className="mx-auto max-w-7xl">

            {/* Header */}
            <div className="grid gap-10 md:grid-cols-[1fr_320px] md:items-end">

            <div>
                <p className="mb-5 text-xs font-medium uppercase tracking-[0.35em] text-[#D4AF37]">
                What We Do
                </p>

                <h2 className="font-heading max-w-4xl text-5xl leading-[0.95] text-white sm:text-6xl lg:text-7xl">
                Everything your
                <br />
                <span className="text-white/40">
                    digital presence needs.
                </span>
                </h2>
            </div>

            <p className="max-w-sm text-sm leading-6 text-white/40">
                From the first impression to the moment someone
                decides to subscribe, every detail has a purpose.
            </p>

            </div>

            {/* Services List */}
            <div className="mt-24 border-t border-white/10">

            {services.map((service, index) => (
                <Reveal key={service.number} delay={index * 0.08}>
                    <article
                    className="group border-b border-white/10 py-10 transition-colors duration-500 hover:border-white/20 lg:py-14"
                    >

                    <div className="grid gap-8 lg:grid-cols-[100px_1fr_1fr_40px] lg:items-start">

                        {/* Number */}
                        <span className="text-xs tracking-[0.2em] text-[#D4AF37]">
                        {service.number}
                        </span>

                        {/* Title */}
                        <div>
                        <h3 className="font-heading text-4xl text-white transition-transform duration-500 group-hover:translate-x-2 sm:text-5xl lg:text-6xl">
                            {service.title}
                        </h3>
                        </div>

                        {/* Description + Features */}
                        <div className="max-w-lg">

                        <p className="text-sm leading-7 text-white/45">
                            {service.description}
                        </p>

                        <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                            {service.features.map((feature) => (
                            <li
                                key={feature}
                                className="flex items-center gap-3 text-xs text-white/30"
                            >
                                <span className="h-px w-3 bg-[#D4AF37]/60" />
                                {feature}
                            </li>
                            ))}
                        </ul>

                        </div>

                        {/* Arrow */}
                        <div className="hidden lg:block">
                        <span className="inline-block text-xl text-white/20 transition-all duration-500 group-hover:translate-x-2 group-hover:text-[#D4AF37]">
                            ↗
                        </span>
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