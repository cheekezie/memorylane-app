import { HTMLInputTypeAttribute } from "react";

interface prop {
	label?: string;
	placeholder?: string;
	name?: string;
	max?: number;
	min?: number;
	disabled?: boolean;
	id?: string;
	className?: string;
	type?: HTMLInputTypeAttribute;
	mode?:
		| "none"
		| "text"
		| "tel"
		| "url"
		| "email"
		| "numeric"
		| "decimal"
		| "search"
		| undefined;
	value?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput = ({
	label,
	type = "text",
	max,
	name,
	min,
	mode,
	placeholder,
	className,
	id = "myinput",
	value,
	onChange,
}: prop) => {
	return (
		<div className="mb-4">
			{label && (
				<label htmlFor={id} className="block mb-2 text-sm text-gray-800">
					{label}
				</label>
			)}
			<input
				name={name}
				id={id}
				inputMode={mode}
				min={min}
				max={max}
				type={type}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				className={`block w-full  border
						 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none border-gray-600  px-8 py-3 rounded-[12px] ${className}`}
			/>
		</div>
	);
};

export default TextInput;
