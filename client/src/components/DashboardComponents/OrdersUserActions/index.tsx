import toast from "react-hot-toast";
import Tooltip from "react-tooltip";
import { useMakeUserConfirmDoneMutation } from "src/generated/graphql";

interface OrdersUsersActionsProps {
    isPaid: boolean;
    hasUserConfirmedClassDone: boolean;
    isOrderPage?: boolean;
    orderID: string;
}

const OrdersUsersActions: React.FC<OrdersUsersActionsProps> = ({
    hasUserConfirmedClassDone,
    isOrderPage = false,
    isPaid,
    orderID,
}) => {
    const [{ fetching }, makeOrderDone] = useMakeUserConfirmDoneMutation();

    const handleConfirm = async () => {
        const confirm = await makeOrderDone({ orderID });

        if (!confirm || !confirm.data || !confirm.data.makeUserConfirmDone) {
            toast.error("Algo deu errado...");
        } else {
            toast.success("Você confirmou que teve essa aula!");
        }
    };

    return (
        <div
            className="flex flex-wrap flex-col md:flex-row items-center mt-4"
            data-for="pagar"
            data-tip={
                isPaid
                    ? "Confirmar finalização da aula"
                    : "O tutor deve confirmar o pagamento antes"
            }
        >
            {!hasUserConfirmedClassDone && !isOrderPage && (
                <div
                    onClick={handleConfirm}
                    className={`md:ml-2 mt-3 md:mt-0 cursor-pointer w-full flex-1 px-10 md:px-4 py-2 bg-primaryPurple text-center text-white font-bold rounded-xl hover:bg-lightPurple hover:text-black222 text-sm
                    ${
                        !isPaid
                            ? "pointer-events-none cursor-not-allowed opacity-40"
                            : ""
                    }
                `}
                >
                    {fetching
                        ? "Carregando....."
                        : "Confirmar finalização da aula"}
                </div>
            )}
            <Tooltip id="pagar" />
        </div>
    );
};
export default OrdersUsersActions;
