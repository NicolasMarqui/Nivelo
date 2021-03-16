import { useState } from "react";
import LoadingAnimation from "../../LoadingAnimation";
import SelectPrice from "../../Selectables/SelectPrice";
import { StepWrapper, StepPriceWrapper } from "../Steps.style";

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

export default function StepTwo({ selected, handleChangePrice }: StepTwoProps) {
    const [selectedPrice, setSelectedPrice] = useState({});

    const handleSelected = (cl: any) => {
        setSelectedPrice(cl);
        handleChangePrice(cl);
    };

    return (
        <StepWrapper>
            {Object.keys(selected).length === 0 ? (
                <LoadingAnimation />
            ) : !selected.price || selected.price.length === 0 ? (
                <p>No price Homie</p>
            ) : (
                <StepPriceWrapper>
                    {selected.price.map((pr) => (
                        <SelectPrice
                            key={pr.id}
                            price={pr}
                            active={selectedPrice === pr}
                            handleSelectedPrice={() => handleSelected(pr)}
                        />
                    ))}
                </StepPriceWrapper>
            )}
        </StepWrapper>
    );
}
