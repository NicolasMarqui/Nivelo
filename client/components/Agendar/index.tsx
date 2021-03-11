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

export default function Agendar({ isOpen, closeAgendar, tutor }: AgendarProps) {
    const [selectedClass, setSelectedClass] = useState({});
    const [classPrice, setClassPrice] = useState({});
    const [schedule, setSchedule] = useState("");
    const [tool, setTool] = useState("");

    const { classes, user } = tutor;

    const handleClassName = (value: any) => setSelectedClass(value);
    const handleChangePrice = (value: any) => setClassPrice(value);
    const handleSchedule = (value: any) => setSchedule(value);
    const handlePlatform = (value: any) => setTool(value);

    const info = {
        tutorName: user.name,
        selectedClass,
        classPrice,
        classSchedule: schedule,
        tool,
    };

    return (
        <Side
            isOpen={isOpen}
            bottom
            width="100%"
            header={{}}
            onClickClose={closeAgendar}
            headerAbsolute
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
                        <StepThree handleScheduleChange={handleSchedule} />
                        <StepFour
                            platforms={user.userPlatformAccount}
                            handlePlat={handlePlatform}
                        />
                    </StepWizard>
                </div>
            </AgendarWrapper>
        </Side>
    );
}
