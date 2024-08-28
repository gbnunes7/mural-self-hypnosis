export const initialState = {
	pensamento: "",
	autor: "",
	data: [],
};

export default function cardReducer(state, action) {
	switch (action.type) {
		case "SET_PENSAMENTO":
			return { ...state, pensamento: action.payload };
		case "SET_AUTOR":
			return { ...state, autor: action.payload };
		case "SET_DATA":
			return { ...state, data: action.payload };
		case "UPDATE_ITEM":
			return {
				...state,
				data: state.data.map((item) =>
					item.id === action.payload.id
						? { ...item, ...action.payload.updates }
						: item
				),
			};
		case "DELETE_ITEM":
			return {
				...state,
				data: state.data.filter((item) => item.id !== action.payload.id),
			};
		case "ADD_ITEM":
			return { ...state, data: [...state.data, action.payload] };
		default:
			return state;
	}
}
