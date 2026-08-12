import Reveal from "../animations/Reveal";

const steps = [
    {
        number: "01",
        title: "Discover",
        description:
        "We start by understanding your brand, audience, goals, and what you want your digital presence to achieve.",
        label: "Strategy",
    },
    {
        number: "02",
        title: "Define",
        description:
        "We shape the visual direction, structure, content hierarchy, and user journey before development begins.",
        label: "Direction",
    },
    {
        number: "03",
        title: "Build",
        description:
        "Your experience comes to life through thoughtful design, clean development, responsive layouts, and purposeful interactions.",
        label: "Creation",
    },
    {
        number: "04",
        title: "Refine",
        description:
        "We test across devices, optimize performance, polish every detail, and prepare your website for launch.",
        label: "Launch",
    },
    ];

    export default function Process() {
    return (
        <section
        id="process"
        className="bg-[#0A0A0A] px-6 py-32 lg:px-8 lg:py-40"
        >
        <div className="mx-auto max-w-7xl">

            {/* Header */}
            <div className="grid gap-10 md:grid-cols-[1fr_320px] md:items-end">

            <div>
                <p className="mb-5 text-xs font-medium uppercase tracking-[0.35em] text-[#D4AF37]">
                The Process
                </p>

                <h2 className="font-heading max-w-4xl text-5xl leading-[0.95] text-white sm:text-6xl lg:text-7xl">
                Thoughtful from
                <br />
                <span className="text-white/40">
                    first conversation to launch.
                </span>
                </h2>
            </div>

            <p className="max-w-sm text-sm leading-6 text-white/40">
                A focused process designed to keep things clear,
                collaborative, and moving forward.
            </p>

            </div>

            {/* Process */}
            <div className="mt-24 border-t border-white/10">

            {steps.map((step, index) => (
                <Reveal key={step.number} delay={index * 0.08}>
                    <article
                    className="group border-b border-white/10 py-10 transition-all duration-500 hover:bg-white/[0.02] lg:py-12"
                    >

                    <div className="grid gap-8 lg:grid-cols-[100px_1fr_1fr_120px] lg:items-center">

                        {/* Number */}
                        <div className="flex items-center gap-3">

                        <span className="text-xs tracking-[0.2em] text-[#D4AF37]">
                            {step.number}
                        </span>

                        <span className="hidden h-px w-8 bg-white/10 lg:block" />

                        </div>

                        {/* Title */}
                        <div>
                        <h3 className="font-heading text-4xl text-white transition-transform duration-500 group-hover:translate-x-2 sm:text-5xl lg:text-6xl">
                            {step.title}
                        </h3>
                        </div>

                        {/* Description */}
                        <div>
                        <p className="max-w-lg text-sm leading-7 text-white/40">
                            {step.description}
                        </p>
                        </div>

                        {/* Label */}
                        <div className="flex items-center justify-start gap-3 lg:justify-end">

                        <span className="text-[10px] uppercase tracking-[0.25em] text-white/25 transition-colors duration-500 group-hover:text-[#D4AF37]">
                            {step.label}
                        </span>

                        <span className="text-lg text-white/20 transition-all duration-500 group-hover:translate-x-1 group-hover:text-[#D4AF37]">
                            ↗
                        </span>

                        </div>

                    </div>

                    </article>
                </Reveal>
            ))}

            </div>

            {/* Bottom statement */}
            <div className="mt-20 flex flex-col gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">

            <p className="text-xs uppercase tracking-[0.25em] text-white/25">
                Strategy · Design · Development · Launch
            </p>

            <p className="font-heading text-2xl text-white/50">
                No unnecessary complexity.
            </p>

            </div>

        </div>
        </section>
    );
}