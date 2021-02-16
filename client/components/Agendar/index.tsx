import { useState } from "react";
import Side from "../Side";
import { AgendarWrapper } from "./Agendar.style";
import StepWizard from "react-step-wizard";
import NavWizard from "../NavWizard";
import StepOne from "../Steps/StepOne";
import StepTwo from "../Steps/StepTwo";
import StepThree from "../Steps/StepThree";
import StepFour from "../Steps/StepFour";
import IconButton from "../IconButton";

interface AgendarProps {
    isOpen: boolean;
    closeAgendar: () => any;
}

export default function Agendar({ isOpen, closeAgendar }: AgendarProps) {
    const [className, setClassName] = useState("Javascript");
    const [classPrice, setClassPrice] = useState(25);
    const [schedule, setSchedule] = useState(null);
    const [tool, setTool] = useState("Skype");

    return (
        <Side
            isOpen={isOpen}
            left
            width="50%"
            header={{}}
            onClickClose={closeAgendar}
        >
            <AgendarWrapper>
                <StepWizard
                    nav={
                        <NavWizard
                            info={{
                                classPrice: classPrice,
                                className: className,
                                tool: tool,
                                classSchedule: schedule,
                            }}
                        />
                    }
                >
                    <StepOne />
                    <StepTwo />
                    <StepThree />
                    <StepFour />
                </StepWizard>
            </AgendarWrapper>
        </Side>
    );
}
