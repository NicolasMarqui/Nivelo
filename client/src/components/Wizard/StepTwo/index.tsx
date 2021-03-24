import EmptyAnimation from "@components/UI/EmptyAnimation";
import LoadingAnimation from "@components/UI/LoadingAnimation";
import { useState } from "react";
import SelectPrices from "../SelectPrices";

export interface PriceProps {
    id: number;
    time: number;
    price: number;
}
interface StepTwoProps {
    selected: {
        id: number;
        name: string;
        description: string;
        amountTimeTaught: number;
        price: PriceProps[];
    };
    handleChangePrice: (i: any) => any;
}

const StepTwo: React.FC<StepTwoProps> = ({ selected, handleChangePrice }) => {
    const [selectedPrice, setSelectedPrice] = useState({});

    const handleSelected = (cl: any) => {
        setSelectedPrice(cl);
        handleChangePrice(cl);
    };

    return (
        <div className="h-full overflow-x-hidden overflow-y-auto md:w-7/12 mx-auto mt-3">
            {Object.keys(selected).length === 0 ? (
                <LoadingAnimation />
            ) : !selected.price || selected.price.length === 0 ? (
                <EmptyAnimation />
            ) : (
                <div className="flex items-center justify-center">
                    {selected.price.map((pr) => (
                        <SelectPrices
                            key={pr.id}
                            price={pr}
                            active={selectedPrice === pr}
                            handleSelectedPrice={() => handleSelected(pr)}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};
export default StepTwo;
