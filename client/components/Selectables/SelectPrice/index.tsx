import { SelectPriceWrapper } from "./SelectPrice.style";

interface SelectPriceProps {
    price: {
        id: number;
        time: number;
        price: number;
    };
    handleSelectedPrice: (i: any) => any;
    active?: boolean;
}

const SelectPrice: React.FC<SelectPriceProps> = ({
    price,
    handleSelectedPrice,
    active,
}) => {
    return (
        <SelectPriceWrapper
            onClick={handleSelectedPrice}
            className={`${active ? "active" : ""}`}
        >
            <div className="sp__time">
                <h3>Duração de: </h3>
                <p>{price.time} min</p>
            </div>
            <div className="sp__value">
                <h3>Valor de: </h3>
                <p>R${price.price},00</p>
            </div>
        </SelectPriceWrapper>
    );
};
export default SelectPrice;
