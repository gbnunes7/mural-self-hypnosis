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

	return (
		<div className="flex flex-grow flex-col gap-4 py-14 items-center bg-[url('/public/images/image-background.svg')] bg-cover bg-center bg-no-repeat">
			<Title>Meu mural</Title>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-[1200px]">
				{json.map((item) => (
					<CardModel
						key={item.id}
						autoria={item.autoria}
						conteudo={item.conteudo}
					/>
				))}
			</div>
		</div>
	);
};

export default MuralPage;
