import { useState } from "react";
import StepWizard from "react-step-wizard";
import NavWizard from "../NavWizard";
import Side from "../Side";
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
    const [classPrice, setClassPrice] = useState(0);
    const [schedule, setSchedule] = useState(null);
    const [tool, setTool] = useState("");

    const { classes, user } = tutor;

    const handleClassName = (value: any) => setSelectedClass(value);

    const info = {
        tutorName: user.name,
        selectedClass,
        classPrice: classPrice,
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
                    <StepWizard nav={<NavWizard info={info} />}>
                        <StepOne
                            classes={classes}
                            handleFuckingChange={handleClassName}
                        />
                        {/* @ts-ignore */}
                        <StepTwo selected={selectedClass} />
                        <StepThree />
                    </StepWizard>
                </div>
            </AgendarWrapper>
        </Side>
    );
}
