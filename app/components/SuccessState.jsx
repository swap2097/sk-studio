export default function SuccessState() {
    return (
        <div className="flex min-h-[500px] flex-col justify-center border-t border-white/10">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--gold)]/40 text-[var(--gold)]">
            ✓
        </div>

        <h3 className="mt-8 font-heading text-5xl text-white">
            Thank you.
        </h3>

        <p className="mt-5 max-w-sm text-sm leading-7 text-white/40">
            Your inquiry has been received. We&apos;ll be in touch soon
            to talk about your project and the next steps.
        </p>

        <a
            href="#"
            className="group mt-8 flex w-fit items-center gap-3 text-sm text-white transition-colors hover:text-[var(--gold)]"
        >
            Back to top
            <span className="transition-transform duration-300 group-hover:-translate-y-1">
            ↑
            </span>
        </a>
        </div>
    );
}

