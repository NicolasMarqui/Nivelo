interface OrdersUsersActionsProps {
    isPaid: boolean;
    hasUserConfirmedClassDone: boolean;
    isOrderPage?: boolean;
}

const OrdersUsersActions: React.FC<OrdersUsersActionsProps> = ({
    isPaid,
    hasUserConfirmedClassDone,
    isOrderPage = false,
}) => {
    return (
        <div className="flex flex-wrap flex-col md:flex-row items-center mt-4">
            {!isPaid && (
                <div className="mt-3 md:mt-0 cursor-pointer w-full flex-1 px-10 md:px-4 py-2 bg-primaryGreen text-center text-white font-bold rounded-3xl hover:bg-lightGreen hover:text-black222">
                    Pagar
                </div>
            )}
            {!hasUserConfirmedClassDone && !isOrderPage && (
                <div className="md:ml-2 mt-3 md:mt-0 cursor-pointer w-full flex-1 px-10 md:px-4 py-2 bg-primaryPurple text-center text-white font-bold rounded-3xl hover:bg-lightGreen hover:text-black222">
                    Confirmar
                </div>
            )}
        </div>
    );
};
export default OrdersUsersActions;
