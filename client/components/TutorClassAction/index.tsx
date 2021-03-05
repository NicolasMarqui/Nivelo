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
    classDetail: {
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
    };
}

const TutorClassAction: React.FC<TutorClassActionProps> = ({ classDetail }) => {
    const openEditModal = () =>
        Reoverlay.showModal(EditClass, { singleClass: classDetail });
    const openConfirmActiveModal = () =>
        Reoverlay.showModal(ConfirmActive, {
            active: classDetail.active,
            classID: classDetail.id,
        });
    const openConfirmDeleteModal = () =>
        Reoverlay.showModal(ConfirmDeleteClass, { classID: classDetail.id });

    return (
        <TutorClassActionWrapper>
            <li data-tip="Editar" data-for="editar" onClick={openEditModal}>
                <BoxIcon bColor="#57CC99" hasCursor>
                    <AiFillEdit size={22} color="#fff" />
                </BoxIcon>
                <ReactTooltip effect="solid" id="editar" />
            </li>
            <li
                data-tip={!classDetail.active ? "Ativar" : "Desativar"}
                data-for="desativar"
                onClick={openConfirmActiveModal}
            >
                <BoxIcon
                    bColor={!classDetail.active ? "#F79D65" : "#FF928B"}
                    hasCursor
                >
                    {!classDetail.active ? (
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
