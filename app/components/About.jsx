export default function About() {
    return (
        <section
        id="about"
        className="bg-[#0A0A0A] px-6 py-32 lg:px-8 lg:py-40"
        >
        <div className="mx-auto max-w-7xl">

            <div className="border-t border-white/10 pt-8">

            {/* Header */}
            <div className="grid gap-10 md:grid-cols-[180px_1fr] md:gap-16">

                <div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/30">
                    About SK Studio
                </p>
                </div>

                <div>

                <h2 className="font-heading max-w-5xl text-5xl leading-[0.95] text-white sm:text-6xl lg:text-7xl">
                    Small studio.
                    <br />
                    <span className="text-white/40">
                    Serious attention to detail.
                    </span>
                </h2>

                <div className="mt-12 grid gap-10 md:grid-cols-2">

                    <p className="text-sm leading-7 text-white/45">
                    SK Studio is an independent digital studio focused on
                    creating premium websites for creators and personal brands.
                    We combine thoughtful design with modern development to
                    create experiences that feel distinctive, fast, and effortless.
                    </p>

                    <p className="text-sm leading-7 text-white/45">
                    We believe a website should do more than look beautiful.
                    It should communicate who you are, create trust with your
                    audience, and make the next step feel natural.
                    </p>

                </div>

                {/* Founder */}
                <div className="mt-16 flex items-center gap-5 border-t border-white/10 pt-6">

                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 font-heading text-lg text-white">
                    SK
                    </div>

                    <div>
                    <p className="text-sm text-white">
                        Swapnil KK
                    </p>

                    <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/30">
                        Founder · Designer · Developer
                    </p>
                    </div>

                </div>

                </div>

            </div>

            </div>

        </div>
        </section>
    );
}