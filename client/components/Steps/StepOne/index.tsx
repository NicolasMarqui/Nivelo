import { StepWrapper, StepButtons } from "../Steps.style";
import IconButton from "../../IconButton";
import SelectClasses from "../../Selectables/SelectClasses";

interface StepOneProps {
    goToStep?: any;
    totalSteps?: any;
    currentStep?: any;
    onChange: () => any;
    classes: [
        {
            id: number;
            name: string;
            description: string;
            amountTimeTaught: number;
            price: any | null;
        }
    ];
}

export default function StepOne({ goToStep, onChange, classes }: StepOneProps) {
    console.log(onChange);
    return (
        <StepWrapper>
            {classes.map((cl) => {
                return (
                    <SelectClasses
                        singleClass={cl}
                        handleSelectedClasss={onChange}
                    />
                );
            })}

            <StepButtons>
                <IconButton
                    color="#fff"
                    bColor="#E76F51"
                    text="PRÓXIMO"
                    onClick={() => goToStep(2)}
                />
            </StepButtons>
        </StepWrapper>
    );
}
