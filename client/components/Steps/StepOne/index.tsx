import { useState } from "react";
import SelectClasses from "../../Selectables/SelectClasses";
import { StepWrapper } from "../Steps.style";
import { PriceProps } from "../StepTwo";

interface StepOneProps {
    goToStep?: any;
    totalSteps?: any;
    currentStep?: any;
    handleFuckingChange: (i: any) => any;
    classes: [
        {
            id: number;
            name: string;
            description: string;
            amountTimeTaught: number;
            price: PriceProps[] | [];
        }
    ];
}

export default function StepOne({
    goToStep,
    handleFuckingChange,
    classes,
}: StepOneProps) {
    const [selected, setSelected] = useState({});

    const handleSelected = (cl: any) => {
        setSelected(cl);
        handleFuckingChange(cl);
    };

    return (
        <StepWrapper>
            {classes.map((cl) => {
                return (
                    <SelectClasses
                        singleClass={cl}
                        active={cl === selected}
                        handleSelectedClasss={() => handleSelected(cl)}
                    />
                );
            })}
        </StepWrapper>
    );
}
