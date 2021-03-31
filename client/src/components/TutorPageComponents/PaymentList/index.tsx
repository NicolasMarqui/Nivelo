import Tooltip from "react-tooltip";

interface PaymentListProps {}

const PaymentList: React.FC<PaymentListProps> = ({}) => {
    return (
        <div
            className="flex items-center justify-between"
            style={{ height: "70px" }}
        >
            <div className="flex-none" data-tip="Pix" data-for="pix">
                <img src="/icons/pix.svg" alt="Pix" className="w-32 salve" />
                <Tooltip id="pix" />
            </div>
            {/* <div
                className="flex-none"
                data-tip="Mastercard"
                data-for="Mastercard"
            >
                <img
                    src="/icons/mastercard.svg"
                    alt="Mastercard"
                    className="w-14"
                />
                <Tooltip id="Mastercard" />
            </div>
            <div className="flex-none" data-tip="Visa" data-for="Visa">
                <img src="/icons/visa.svg" alt="Visa" className="w-14" />
                <Tooltip id="Visa" />
            </div>
            <div className="flex-none" data-tip="Boleto" data-for="Boleto">
                <img src="/icons/boleto.png" alt="Boleto" className="w-14" />
                <Tooltip id="Boleto" />
            </div> */}
        </div>
    );
};
export default PaymentList;
