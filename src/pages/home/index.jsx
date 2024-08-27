import { Link } from "react-router-dom";
import CardToAdd from "../../components/cardToAdd";
import Title from "../../components/title";

const Home = () => {
	return (
		<main className="flex flex-grow flex-col gap-4 py-14 items-center bg-[url('/public/images/image-background.svg')] bg-cover bg-center bg-no-repeat">
			<Title>Adicione aqui sua autosugestão ou ideia.</Title>
			<Title>
				<Link to="/mural">Meu mural</Link>
			</Title>
			<CardToAdd />
		</main>
	);
};

export default Home;
