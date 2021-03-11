import { useState } from "react";
import { Description } from "../../../styles/helpers";
import SelectClasses from "../../Selectables/SelectClasses";
import { StepDesc, StepWrapper } from "../Steps.style";
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
                        key={cl.id}
                        singleClass={cl}
                        active={cl === selected}
                        handleSelectedClasss={() => handleSelected(cl)}
                    />
                );
            })}

            <StepDesc>
                <Description color="#696969" fontSize="15px">
                    Não achou a aula que gostaria? Mande mensagem para o tutor
                    para descobrir se ele resolve seu problema!
                </Description>
            </StepDesc>
        </StepWrapper>
    );
}
