import IconButton from "../IconButton";
import { ShortcutListWrapper } from "./ShortcutList.style";
import { BsPencil } from "react-icons/bs";
import ReactTooltip from "react-tooltip";
import { Reoverlay } from "reoverlay";
import AddClass from "../Modals/AddClass";
import { MdEventAvailable } from "react-icons/md";
import Link from "next/link";

interface ShortcutListProps {}

const ShortcutList: React.FC<ShortcutListProps> = ({}) => {
    const openAddClassModal = () => Reoverlay.showModal(AddClass, {});

    return (
        <ShortcutListWrapper>
            <ul>
                <li data-tip="Adicionar aula" data-for="add-aula">
                    <IconButton
                        text="Adicionar aula"
                        smaller
                        bColor="#E76F51"
                        color="#fff"
                        icon={<BsPencil size={17} />}
                        onClick={openAddClassModal}
                    />
                    <ReactTooltip effect="solid" id="add-aula" />
                </li>
                <Link href="/dashboard/tutor/calendar">
                    <li data-tip="Editar meu calendário" data-for="editarInfo">
                        <IconButton
                            text="Editar meu calendário"
                            smaller
                            bColor="#4895EF"
                            color="#fff"
                            icon={<MdEventAvailable size={17} />}
                        />
                        <ReactTooltip effect="solid" id="editarInfo" />
                    </li>
                </Link>
            </ul>
        </ShortcutListWrapper>
    );
};
export default ShortcutList;
