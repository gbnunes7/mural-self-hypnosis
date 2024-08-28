import { createContext, useReducer } from "react";
import cardReducer from "../hooks/useReducer";
import { initialState } from "../hooks/useReducer";

export const CardContext = createContext();

const CardProvider = ({ children }) => {
	const [state, dispatch] = useReducer(cardReducer, initialState);
	return (
		<CardContext.Provider value={{ state, dispatch }}>
			{children}
		</CardContext.Provider>
	);
};

export default CardProvider;
