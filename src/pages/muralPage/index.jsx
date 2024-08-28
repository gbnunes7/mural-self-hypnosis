import { useEffect, useState } from "react";
import Title from "../../components/title";
import axios from "axios";
import CardModel from "../../components/cardModel";
const MuralPage = () => {
	const [json, setJson] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:3000/pensamentos")
			.then((response) => {
				setJson(response.data);
			})
			.catch((error) => console.error("There was an error", error));
	}, []);

	const handleDelete = (idToDelete) => {
		setJson(json.filter((item) => item.id !== idToDelete));
		axios
			.delete(`http://localhost:3000/pensamentos/${idToDelete}`)
			.then((response) => {
				console.log(`Deleted post with ID ${idToDelete}`);
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const handleEdit = (id) => {
		const item = json.find((item) => item.id === id);
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
				setJson(json.map((iitem) => (iitem.id === id ? updatedItem : iitem)));

				axios
					.put(`http://localhost:3000/pensamentos/${id}`, updatedItem) 
					.then((response) => {
						console.log(response);
					})
					.catch((error) => console.error("Erro ao atualizar item:", error));
			}
		}
	};

	return (
		<div className="flex flex-grow flex-col gap-4 py-14 items-center bg-[url('/public/images/image-background.svg')] bg-cover bg-center bg-no-repeat">
			<Title>Meu mural</Title>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-[1200px]">
				{json.map((item) => (
					<CardModel
						key={item.id}
						autoria={item.autoria}
						conteudo={item.conteudo}
						onClickDelete={() => handleDelete(item.id)}
						onClickEdit={() => handleEdit(item.id)}
					/>
				))}
			</div>
		</div>
	);
};

export default MuralPage;
