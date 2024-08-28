import Button from "../button";
import InputForm from "../input";
import Title from "../title";

const CardToAdd = () => {
	return (
		<form id="form-pensamento" className="bg-[#f9f9f9] flex flex-col py-10 px-8 min-w-[700px] min-h-[350px] rounded-2xl shadow-xl shadow-[#04183214] gap-10">
			<div className="flex flex-col gap-4">
				<Title>
					<h2>Autosugestão ou Ideia</h2>
				</Title>
				<InputForm
					placeholder={"Digite aqui sua autosugestão..."}
					height={"112px"}
					name={"autosugestão"}
				/>
			</div>
			<div className="flex flex-col gap-4">
				<Title>
					<h2>Autor(a)</h2>
				</Title>
				<InputForm
					placeholder={
						"Digite aqui o autor ou atora desse pensamento ou ideia."
					}
					height={"40px"}
					name={"autor"}
				/>
			</div>
			<div className="flex justify-center gap-4">
				<Button background={"#041832"} color={"white"}>
					Adicionar
				</Button>
				<Button background={"white"} color={"#041832"}>
					Cancelar
				</Button>
			</div>
		</form>
	);
};

export default CardToAdd;
