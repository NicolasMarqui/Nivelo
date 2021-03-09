import LoadingAnimation from "../../LoadingAnimation";
import { StepWrapper } from "../Steps.style";

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
}

export default function StepTwo({ selected }: StepTwoProps) {
    return (
        <StepWrapper>
            {Object.keys(selected).length === 0 ? (
                <LoadingAnimation />
            ) : !selected.price || selected.price.length === 0 ? (
                <p>No price Homie</p>
            ) : (
                selected.price.map((pr) => <p>{pr.price}</p>)
            )}
        </StepWrapper>
    );
}
