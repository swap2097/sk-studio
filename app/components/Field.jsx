export default function Field({
    label,
    name,
    type,
    placeholder,
    required = false,
    autoComplete,
    }) {
    return (
        <div className="group relative border-b border-white/10 py-6">
        <label
            htmlFor={name}
            className="mb-3 block text-[10px] uppercase tracking-[0.25em] text-white/30"
        >
            {label}
        </label>

        <input
            id={name}
            name={name}
            type={type}
            placeholder={placeholder}
            required={required}
            autoComplete={autoComplete}
            className="w-full bg-transparent text-base text-white outline-none placeholder:text-white/15"
        />

        <span className="absolute bottom-0 left-0 h-px w-0 bg-[var(--gold)] transition-all duration-500 group-focus-within:w-full" />
        </div>
    );
}