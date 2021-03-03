import IconButton from "../IconButton";
import { ShortcutListWrapper } from "./ShortcutList.style";
import { BsPencil } from "react-icons/bs";
import { BiEditAlt } from "react-icons/bi";
import ReactTooltip from "react-tooltip";
import { Reoverlay } from "reoverlay";
import AddClass from "../Modals/AddClass";

interface ShortcutListProps {}

const ShortcutList: React.FC<ShortcutListProps> = ({}) => {
    const openAddClassModal = () => Reoverlay.showModal(AddClass, {});

    return (
        <ShortcutListWrapper>
            <ul>
                <li>
                    <IconButton
                        text="Adicionar aula"
                        smaller
                        bColor="#E76F51"
                        color="#fff"
                        icon={<BsPencil size={17} />}
                        onClick={openAddClassModal}
                    />
                    <ReactTooltip effect="solid" />
                </li>
                <li data-tip="Editar aulas">
                    <IconButton
                        text="Editar aulas"
                        smaller
                        bColor="#57CC99"
                        color="#fff"
                        icon={<BiEditAlt size={17} />}
                    />
                    <ReactTooltip effect="solid" />
                </li>
                <li data-tip="Editar minhas informações">
                    <IconButton
                        text="Editar minhas informações"
                        smaller
                        bColor="#4895EF"
                        color="#fff"
                        icon={<BiEditAlt size={17} />}
                    />
                    <ReactTooltip effect="solid" />
                </li>
            </ul>
        </ShortcutListWrapper>
    );
};
export default ShortcutList;
