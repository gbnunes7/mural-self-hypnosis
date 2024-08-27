import InputForm from "../input";
import Title from "../title";

const CardToAdd = () => {
	return (
		<form id="form-pensamento" className="bg-red-500 flex flex-col py-10 px-8 min-w-[792px] min-h-[350px] rounded-2xl shadow-xl shadow-[#04183214] gap-10">
			<div className="flex flex-col gap-4">
				<Title>
					<h2>Autosugestão ou Ideia</h2>
				</Title>
				<InputForm placeholder={"Digite aqui sua autosugestão..."} height={'112px'} name={'Autosugestão'}/>
			</div>
			<div className="flex flex-col gap-4">
				<Title>
					<h2>Autor(a)</h2>
				</Title>
				<InputForm placeholder={"Digite aqui o autor ou atora desse pensamento ou ideia."} height={'40px'} name={'Autor'}/>
			</div>
            <div className="flex justify-center">
            <button>oi</button>
            <button>oi</button>
            </div>
		</form>
	);
};

export default CardToAdd;
