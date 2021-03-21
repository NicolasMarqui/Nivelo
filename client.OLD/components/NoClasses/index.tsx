import IconButton from "../IconButton";
import { NoClassesWrapper } from "./NoClasses.style";
import { BsPencil } from "react-icons/bs";
import { Reoverlay } from "reoverlay";
import AddClass from "../Modals/AddClass";

const NoClasses: React.FC = ({}) => {
    const openAddClassModal = () => Reoverlay.showModal(AddClass, {});

    return (
        <NoClassesWrapper>
            <p>Você não possui nenhuma aula</p>
            <IconButton
                text="Adicionar aulas"
                smaller
                bColor="#F79D65"
                color="#fff"
                icon={<BsPencil size={17} />}
                onClick={openAddClassModal}
            />
        </NoClassesWrapper>
    );
};
export default NoClasses;
