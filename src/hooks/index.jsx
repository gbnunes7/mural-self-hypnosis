import { useContext, useEffect } from "react";
import { CardContext } from "../context";
import axios from "axios";

const useCardContext = () => {
	const { pensamento, setPensamento, autor, setAutor } =
		useContext(CardContext);

	const API__URL = "http://localhost:3000/pensamentos";

	useEffect(() => {
		axios
			.get(API__URL)
			.then((response) => {
				setPensamento(response.data);
			})
			.catch((error) => console.error("There was an error", error));
	}, []);

	const handleDelete = (idToDelete) => {
		setPensamento(pensamento.filter((item) => item.id !== idToDelete));
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
		const item = pensamento.find((item) => item.id === id);
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
				setPensamento(
					pensamento.map((iitem) => (iitem.id === id ? updatedItem : iitem))
				);

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
		setPensamento(event.target.value);
	};

	const onInputChangeAutor = (event) => {
		setAutor(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		alert(`Pensamento: ${pensamento}\nAutor(a):${autor}`);

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
	};

	return {
		pensamento,
		autor,
		handleSubmit,
		onInputChangeAutor,
		onInputChangePensamento,
		handleEdit,
		handleDelete,
	};
};
