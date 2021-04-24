interface SelectPricesProps {
    price: {
        id: number;
        time: number;
        price: string;
    };
    handleSelectedPrice: (i: any) => any;
    active?: boolean;
}

const SelectPrices: React.FC<SelectPricesProps> = ({
    active,
    price,
    handleSelectedPrice,
}) => {
    return (
        <div
            onClick={handleSelectedPrice}
            className={`my-2 mx-5 rounded-2xl w-72 cursor-pointer border-2 border-gray-100 p-3 hover:bg-lightGreen ${
                active ? "bg-primaryGreen" : ""
            }`}
        >
            <div className="flex flex-col md:flex-row items-center justify-between">
                <h3 className={`${active ? "text-white" : ""}`}>
                    Duração de:{" "}
                </h3>
                <p className={`${active ? "text-white" : ""}`}>
                    {price.time} min
                </p>
            </div>
            <div className="flex items-center justify-between">
                <h3 className={`${active ? "text-white" : ""}`}>Valor de: </h3>
                <p className="text-primaryOrange font-bold">R${price.price}</p>
            </div>
        </div>
    );
};
export default SelectPrices;
