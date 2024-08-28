import { createContext, useState } from "react";

export const CardContext = createContext();

const CardProvider = ({ children }) => {
	const [pensamento, setPensamento] = useState("");
	const [autor, setAutor] = useState("");
	const [data, setData] = useState([]);


	return (
		<CardContext.Provider
			value={{ pensamento, setPensamento, autor, setAutor,data,setData }}
		>
			{children}
		</CardContext.Provider>
	);
};

export default CardProvider;
