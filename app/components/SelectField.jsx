export default function SelectField({
    label,
    name,
    options,
    required = false,
    }) {
    return (
        <div className="group relative border-b border-white/10 py-6">
        <label
            htmlFor={name}
            className="mb-3 block text-[10px] uppercase tracking-[0.25em] text-white/30"
        >
            {label}
        </label>

        <select
            id={name}
            name={name}
            defaultValue=""
            required={required}
            className="w-full cursor-pointer appearance-none bg-transparent pr-8 text-base text-white outline-none"
        >
            <option
            value=""
            disabled
            className="bg-[#141414]"
            >
            Select an option
            </option>

            {options.map((option) => (
            <option
                key={option}
                value={option}
                className="bg-[#141414]"
            >
                {option}
            </option>
            ))}
        </select>

        <span className="pointer-events-none absolute bottom-6 right-0 text-xs text-white/30">
            ↓
        </span>

        <span className="absolute bottom-0 left-0 h-px w-0 bg-[var(--gold)] transition-all duration-500 group-focus-within:w-full" />
        </div>
    );
}