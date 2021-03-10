import { useState, useEffect } from "react";
import StepWizard from "react-step-wizard";
import NavWizard from "../NavWizard";
import Side from "../Side";
import StepFour from "../Steps/StepFour";
import StepOne from "../Steps/StepOne";
import StepThree from "../Steps/StepThree";
import StepTwo from "../Steps/StepTwo";
import { AgendarWrapper } from "./Agendar.style";

interface AgendarProps {
    isOpen: boolean;
    closeAgendar: () => any;
    tutor: any;
}

interface ClassnameProps {
    price: {} | {};
}

export default function Agendar({ isOpen, closeAgendar, tutor }: AgendarProps) {
    const [selectedClass, setSelectedClass] = useState({});
    const [classPrice, setClassPrice] = useState({});
    const [schedule, setSchedule] = useState(null);
    const [tool, setTool] = useState("");

    const { classes, user } = tutor;

    const handleClassName = (value: any) => setSelectedClass(value);
    const handleChangePrice = (value: any) => setClassPrice(value);

    const info = {
        tutorName: user.name,
        selectedClass,
        classPrice,
        schedule,
        tool,
    };

    return (
        <Side
            isOpen={isOpen}
            bottom
            width="100%"
            header={{}}
            onClickClose={closeAgendar}
        >
            <AgendarWrapper>
                <div className="agendar__group">
                    {/* @ts-ignore */}
                    <StepWizard nav={<NavWizard info={info} />}>
                        <StepOne
                            classes={classes}
                            handleFuckingChange={handleClassName}
                        />
                        <StepTwo
                            // @ts-ignore
                            selected={selectedClass}
                            handleChangePrice={handleChangePrice}
                        />
                        <StepThree />
                        <StepFour />
                    </StepWizard>
                </div>
            </AgendarWrapper>
        </Side>
    );
}
