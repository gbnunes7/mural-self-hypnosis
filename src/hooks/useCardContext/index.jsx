import { useContext, useEffect } from "react";
import { CardContext } from "../../context";
import axios from "axios";
import { useNavigate } from "react-router";

const useCardContext = () => {
	const { state, dispatch } = useContext(CardContext);
	const { pensamento, autor, data } = state;

	const API__URL = "https://json-server-vercel-kappa-coral.vercel.app/pensamentos";

	const navigate = useNavigate();

	useEffect(() => {
		axios
			.get(API__URL)
			.then((response) => {
				dispatch({ type: "SET_DATA", payload: response.data });
			})
			.catch((error) => console.error("There was an error", error));
	}, []);

	const handleDelete = (idToDelete) => {
		dispatch({ type: "DELETE_ITEM", payload: { id: idToDelete } });
		axios
			.delete(`${API__URL}/${idToDelete}`)
			.then((response) => {
				console.log(`Deleted post with ID ${idToDelete}`);
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const handleEdit = (id) => {
		const item = data.find((item) => item.id === id);
		if (item) {
			const newAutoria = prompt(
				"Digite o novo valor para autoria:",
				item.autoria
			);
			const newConteudo = prompt(
				"Digite o novo valor para conteúdo:",
				item.conteudo
			);

			if (newAutoria !== null && newConteudo !== null) {
				const updatedItem = {
					...item,
					autoria: newAutoria,
					conteudo: newConteudo,
				};

				dispatch({
					type: "UPDATE_ITEM",
					payload: { id, updates: updatedItem },
				});

				axios
					.put(`${API__URL}/${id}`, updatedItem)
					.then((response) => {
						console.log(response);
					})
					.catch((error) => console.error("Erro ao atualizar item:", error));
			}
		}
	};
	const onInputChangePensamento = (event) => {
		dispatch({ type: "SET_PENSAMENTO", payload: event.target.value });
	};

	const onInputChangeAutor = (event) => {
		dispatch({ type: "SET_AUTOR", payload: event.target.value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		axios
			.post(API__URL, {
				conteudo: pensamento,
				autoria: autor,
			})
			.then((response) => {
				console.log(response);
			})
			.catch((error) => {
				console.error(error);
			});
		setTimeout(() => {
			navigate(+1);
		}, 0);
	};

	return {
		pensamento,
		autor,
		handleSubmit,
		navigate,
		onInputChangeAutor,
		onInputChangePensamento,
		handleEdit,
		handleDelete,
		data,
	};
};

export default useCardContext;
