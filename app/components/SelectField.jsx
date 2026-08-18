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
                required={required}
                defaultValue=""
                className="w-full appearance-none bg-transparent text-base text-white outline-none"
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

            <span className="absolute bottom-0 left-0 h-px w-0 bg-[var(--gold)] transition-all duration-500 group-focus-within:w-full" />

        </div>
    );
}