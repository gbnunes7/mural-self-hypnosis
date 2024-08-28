import Title from "../../components/title";
import CardModel from "../../components/cardModel";
import useCardContext from "../../hooks";
import { IoMdArrowBack } from "react-icons/io";

const MuralPage = () => {
	const { data, handleDelete, handleEdit,navigate } = useCardContext();

	return (
		<div className="flex flex-grow flex-col gap-4 py-14 items-center bg-[url('/public/images/image-background.svg')] bg-cover bg-center bg-no-repeat">
			<button className="relative top-11 right-1/3" onClick={() => navigate(-1)}>
				<IoMdArrowBack  />
			</button>
			<Title>Meu mural</Title>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-[1200px]">
				{data.map((item) => (
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
