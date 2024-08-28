const InputForm = ({ placeholder, height,name,pensamento,onChange }) => {
	return (
		<input
			type="text"
			minLength={3}
			maxLength={350}
			placeholder={placeholder}
            style={{ height: height }}
			value={pensamento}
			onChange={onChange}
            required
            name={name}
			className="rounded w-full px-4 py-1 bg-[#EDF0F4] focus:ring-1 outline-none"
		/>
	);
};

export default InputForm;
