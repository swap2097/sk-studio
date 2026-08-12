export default function StudioStatement() {
    return (
        <section className="bg-[#0A0A0A] px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">

            <div className="border-t border-white/10 pt-8">

            <div className="grid gap-8 md:grid-cols-[180px_1fr] md:gap-16">

                {/* Label */}
                <div className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />

                <span className="text-xs uppercase tracking-[0.3em] text-white/30">
                    Our Approach
                </span>
                </div>

                {/* Statement */}
                <div>
                <p className="font-heading max-w-4xl text-4xl leading-[1.05] text-white sm:text-5xl lg:text-6xl">
                    We believe your digital presence should feel as
                    <span className="text-white/40">
                    {" "}distinctive as the brand behind it.
                    </span>
                </p>

                <div className="mt-8 flex items-center gap-4">

                    <span className="h-px w-12 bg-[#D4AF37]" />

                    <span className="text-xs uppercase tracking-[0.25em] text-white/30">
                    SK Studio
                    </span>

                </div>
                </div>

            </div>

            </div>

        </div>
        </section>
    );
}