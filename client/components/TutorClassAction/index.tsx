import { BoxIcon } from "../../styles/helpers";
import { TutorClassActionWrapper } from "./TutorClassAction.style";
import { AiFillEdit } from "react-icons/ai";
import ReactTooltip from "react-tooltip";
import { BsTrash, BsFillEyeSlashFill, BsFillEyeFill } from "react-icons/bs";
import { Reoverlay } from "reoverlay";
import EditClass from "../Modals/EditClass";
import ConfirmActive from "../Modals/ConfirmActive";
import ConfirmDeleteClass from "../Modals/ConfirmDeleteClass";

interface TutorClassActionProps {
    id: number;
    name: string;
    description: string;
    amountTimeTaught: number;
    level: string;
    active: boolean;
    price: {
        id: number;
        price: number;
        time: number;
    };
    createdAt: string;
    updatedAt: string;
}

const TutorClassAction: React.FC<TutorClassActionProps> = ({ active }) => {
    const openEditModal = () => Reoverlay.showModal(EditClass, {});
    const openConfirmActiveModal = () => Reoverlay.showModal(ConfirmActive, {});
    const openConfirmDeleteModal = () =>
        Reoverlay.showModal(ConfirmDeleteClass, {});

    return (
        <TutorClassActionWrapper>
            <li data-tip="Editar" data-for="editar" onClick={openEditModal}>
                <BoxIcon bColor="#57CC99" hasCursor>
                    <AiFillEdit size={22} color="#fff" />
                </BoxIcon>
                <ReactTooltip effect="solid" id="editar" />
            </li>
            <li
                data-tip={active ? "Ativar" : "Desativar"}
                data-for="desativar"
                onClick={openConfirmActiveModal}
            >
                <BoxIcon bColor="#F79D65" hasCursor>
                    {active ? (
                        <BsFillEyeFill size={22} color="#fff" />
                    ) : (
                        <BsFillEyeSlashFill size={22} color="#fff" />
                    )}
                </BoxIcon>
                <ReactTooltip effect="solid" id="desativar" />
            </li>
            <li
                data-tip="Excluir"
                data-for="excluir"
                onClick={openConfirmDeleteModal}
            >
                <BoxIcon bColor="#fb475e" hasCursor>
                    <BsTrash size={22} color="#fff" />
                </BoxIcon>
                <ReactTooltip effect="solid" id="excluir" />
            </li>
        </TutorClassActionWrapper>
    );
};
export default TutorClassAction;
