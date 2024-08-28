import { createContext, useState } from "react";

export const CardContext = createContext();

const CardProvider = ({ children }) => {
	const [pensamento, setPensamento] = useState("");
	const [autor, setAutor] = useState("");

	return (
		<CardContext.Provider
			value={{ pensamento, setPensamento, autor, setAutor }}
		>
			{children}
		</CardContext.Provider>
	);
};

export default CardProvider;
