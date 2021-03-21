import { BoxIcon } from "../../../styles/helpers";
import { UserOrdersActionWrapper } from "./UserOrdersAction.style";
import ReactTooltip from "react-tooltip";
import { BsCheckAll } from "react-icons/bs";
import { FaTimes, FaUserTimes } from "react-icons/fa";
import { MdAttachMoney, MdMoneyOff } from "react-icons/md";
import { IoIosChatboxes } from "react-icons/io";

interface UserOrdersActionProps {
    isConfirmed: boolean;
    isPaid: boolean;
    hasAlunoConfirmed: boolean;
}

const UserOrdersAction: React.FC<UserOrdersActionProps> = ({
    isPaid,
    isConfirmed,
    hasAlunoConfirmed,
}) => {
    return (
        <UserOrdersActionWrapper>
            <ul>
                <li
                    data-tip={
                        isConfirmed
                            ? "Essa aula foi aceita pelo tutor!"
                            : "O tutor ainda não aceitou essa aula!"
                    }
                    data-for="confirmed"
                >
                    <BoxIcon bColor={isConfirmed ? "#57CC99" : "#FB475E"}>
                        {isConfirmed ? (
                            <BsCheckAll size={24} />
                        ) : (
                            <FaTimes size={24} color="#fff" />
                        )}
                    </BoxIcon>
                    <ReactTooltip effect="solid" place="top" id="confirmed" />
                </li>
                <li
                    data-tip={
                        isPaid
                            ? "Você já pagou por essa aula!"
                            : "Aguardando pagamento!"
                    }
                    data-for="confirmed"
                >
                    <BoxIcon bColor={isPaid ? "#57CC99" : "#FB475E"}>
                        {isPaid ? (
                            <MdAttachMoney size={24} />
                        ) : (
                            <MdMoneyOff size={24} color="#fff" />
                        )}
                    </BoxIcon>
                    <ReactTooltip effect="solid" place="top" id="confirmed" />
                </li>
                <li
                    data-tip={
                        hasAlunoConfirmed
                            ? "Essa aula for ensinada pelo tutor!"
                            : "Essa aula ainda não foi ensinada pelo tutor!"
                    }
                    data-for="confirmed"
                    className={!isPaid ? "not__active" : ""}
                >
                    <BoxIcon bColor={hasAlunoConfirmed ? "#57CC99" : "#FB475E"}>
                        {hasAlunoConfirmed ? (
                            <IoIosChatboxes size={24} />
                        ) : (
                            <FaUserTimes size={24} color="#fff" />
                        )}
                    </BoxIcon>
                    <ReactTooltip effect="solid" place="top" id="confirmed" />
                </li>
            </ul>
        </UserOrdersActionWrapper>
    );
};
export default UserOrdersAction;
