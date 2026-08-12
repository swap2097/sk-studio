"use client";

export default function ProjectMockup({ project }) {
    const isLight = project.theme === "light";

    return (
        <div
        className="relative h-full w-full overflow-hidden"
        style={{
            backgroundColor: project.background,
            color: project.text,
        }}
        >
        {/* =========================================
            BROWSER CHROME
        ========================================= */}

        <div
            className="absolute left-0 right-0 top-0 z-30 flex h-11 items-center border-b px-4 sm:px-6"
            style={{
            backgroundColor: isLight
                ? "rgba(255,255,255,0.82)"
                : "rgba(10,10,10,0.72)",
            borderColor: isLight
                ? "rgba(0,0,0,0.08)"
                : "rgba(255,255,255,0.08)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            }}
        >
            {/* Browser dots */}
            <div className="flex gap-1.5">
            {[1, 2, 3].map((dot) => (
                <span
                key={dot}
                className="h-2 w-2 rounded-full"
                style={{
                    backgroundColor: isLight
                    ? "#C8C3BD"
                    : "#4A4641",
                }}
                />
            ))}
            </div>

            {/* Address bar */}
            <div
            className="absolute left-1/2 hidden -translate-x-1/2 rounded-full px-8 py-1 text-[8px] sm:block"
            style={{
                backgroundColor: isLight
                ? "rgba(0,0,0,0.05)"
                : "rgba(255,255,255,0.06)",
                color: project.muted,
            }}
            >
            {project.url}
            </div>
        </div>


        {/* =========================================
            WEBSITE
        ========================================= */}

        <div className="absolute inset-0 overflow-hidden pt-11">

            {/* =======================================
                NAVIGATION
            ======================================= */}

            <nav className="relative z-20 flex items-center justify-between px-6 py-5 sm:px-10 lg:px-14">

            {/* Logo */}
            <span
                className="font-heading text-base tracking-wide sm:text-xl"
                style={{
                color: project.text,
                }}
            >
                {project.logo}
            </span>


            {/* Desktop navigation */}
            <div
                className="hidden items-center gap-7 text-[8px] uppercase tracking-[0.25em] sm:flex"
                style={{
                color: project.muted,
                }}
            >
                <span>About</span>
                <span>Journal</span>
                <span>Gallery</span>
                <span>Private</span>
            </div>


            {/* Menu */}
            <button
                type="button"
                className="rounded-full border px-3 py-1.5 text-[7px] uppercase tracking-[0.15em]"
                style={{
                color: project.text,
                borderColor: `${project.text}25`,
                }}
            >
                Menu
            </button>

            </nav>


            {/* =======================================
                HERO
            ======================================= */}

            <div className="relative min-h-[430px] sm:min-h-[520px]">

            {/* Decorative circle */}
            <div
                className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full sm:h-[380px] sm:w-[380px]"
                style={{
                border: `1px solid ${project.accent}35`,
                boxShadow: `0 0 100px ${project.accent}12`,
                }}
            />


            {/* Inner shape */}
            <div
                className="absolute left-1/2 top-1/2 h-[180px] w-[130px] -translate-x-1/2 -translate-y-1/2 rotate-12 rounded-[50%]"
                style={{
                background: `linear-gradient(
                    135deg,
                    ${project.accent}40,
                    transparent
                )`,
                filter: "blur(1px)",
                }}
            />


            {/* Editorial side image */}
            <div
                className="absolute right-[8%] top-[12%] hidden h-[55%] w-[30%] overflow-hidden rounded-[100px] sm:block"
                style={{
                border: `1px solid ${project.accent}30`,
                }}
            >
                <div
                className="absolute inset-0"
                style={{
                    background: `
                    radial-gradient(
                        circle at 50% 35%,
                        ${project.accent}80,
                        transparent 45%
                    ),
                    linear-gradient(
                        160deg,
                        ${project.background},
                        ${project.accent}20
                    )
                    `,
                }}
                />

                <div
                className="absolute inset-x-6 bottom-8 top-8 rounded-full"
                style={{
                    border: `1px solid ${project.accent}25`,
                }}
                />
            </div>


            {/* Hero content */}
            <div className="absolute left-1/2 top-1/2 z-10 w-full max-w-xl -translate-x-1/2 -translate-y-1/2 px-8 text-center">

                <p
                className="mb-5 text-[7px] uppercase tracking-[0.4em] sm:text-[8px]"
                style={{
                    color: project.accent,
                }}
                >
                {project.eyebrow}
                </p>


                <h2
                className="font-heading text-5xl leading-[0.85] sm:text-7xl lg:text-8xl"
                style={{
                    color: project.text,
                }}
                >
                {project.heading}
                </h2>


                <p
                className="mx-auto mt-6 max-w-xs text-[8px] leading-4 sm:text-[9px]"
                style={{
                    color: project.muted,
                }}
                >
                {project.description}
                </p>


                <button
                type="button"
                className="mt-7 rounded-full px-6 py-2.5 text-[7px] uppercase tracking-[0.25em] transition-transform duration-300 hover:scale-105"
                style={{
                    backgroundColor: project.accent,
                    color: isLight ? "#FFFFFF" : "#0A0A0A",
                }}
                >
                {project.buttonText}
                </button>

            </div>


            {/* =====================================
                GALLERY PREVIEW
            ===================================== */}

            <div
                className="
                absolute
                bottom-[-100px]
                left-8
                right-8
                grid
                grid-cols-3
                gap-2
                opacity-50
                sm:left-12
                sm:right-12
                "
            >
                {[1, 2, 3].map((item) => (
                <div
                    key={item}
                    className="aspect-[4/5] overflow-hidden rounded-md"
                    style={{
                    background: `
                        linear-gradient(
                        145deg,
                        ${project.accent}30,
                        ${project.background}
                        )
                    `,
                    }}
                >
                    <div
                    className="h-full w-full"
                    style={{
                        background: `
                        radial-gradient(
                            circle at ${30 + item * 15}% ${30 + item * 10}%,
                            ${project.accent}35,
                            transparent 50%
                        )
                        `,
                    }}
                    />
                </div>
                ))}
            </div>


            {/* =====================================
                SIDE LABELS
            ===================================== */}

            <span
                className="absolute bottom-8 left-6 text-[7px] uppercase tracking-[0.35em] sm:left-10"
                style={{
                color: project.muted,
                writingMode: "vertical-rl",
                }}
            >
                SK Studio Concept
            </span>


            <span
                className="absolute bottom-8 right-6 text-[7px] tracking-[0.25em] sm:right-10"
                style={{
                color: project.muted,
                }}
            >
                {project.year}
            </span>

            </div>
        </div>
        </div>
    );
}