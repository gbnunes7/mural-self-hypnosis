import { MdEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";

const CardModel = ({ conteudo, autoria,onClickEdit, onClickDelete }) => {
	return (
		<div id="shadow-custom" className="max-w-[384px] p-6 flex flex-col bg-white shadow-[0_8px_8px_rgba(21,69,128,1)] gap-4">
			<p className="text-base text-[#444444]">{conteudo}</p>
			<p className="text-[18px] text-[#444444] font-semibold">{autoria}</p>
			<div className="flex justify-end gap-2">
				<button onClick={onClickEdit}><MdEdit /></button>
				<button onClick={onClickDelete}><MdDeleteOutline /></button>
			</div>
		</div>
	);
};

export default CardModel;

