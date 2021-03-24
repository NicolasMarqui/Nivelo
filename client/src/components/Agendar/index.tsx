import { useState } from "react";
import { TutorProps } from "@types";
import { useMeQuery } from "src/generated/graphql";
import LoadingAnimation from "@components/UI/LoadingAnimation";
import EmptyAnimation from "@components/UI/EmptyAnimation";
import StepWizard from "react-step-wizard";
import NavWizard from "@components/Wizard/NavWizard";
import StepOne from "@components/Wizard/StepOne";
import StepTwo from "@components/Wizard/StepTwo";
import StepThree from "@components/Wizard/StepThree";
import LoginForm from "@components/UI/Forms/LoginFom";
import StepFour from "@components/Wizard/StepFour";

interface AgendarProps {
    tutor: TutorProps;
}

const Agendar: React.FC<AgendarProps> = ({ tutor }) => {
    const [{ data, fetching, error }] = useMeQuery();
    const [selectedClass, setSelectedClass] = useState({});
    const [classPrice, setClassPrice] = useState({});
    const [schedule, setSchedule] = useState("");
    const [tool, setTool] = useState("");

    const { classes, user, id } = tutor;

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

    if (fetching) {
        return <LoadingAnimation />;
    }

    if (error) {
        return <EmptyAnimation />;
    }

    return (
        <div className="relative overflow-y-auto overflow-x-hidden h-full">
            <StepWizard
                nav={
                    <NavWizard
                        // @ts-ignore
                        info={info}
                        userBuyingID={data && data.me ? data.me.id : null}
                    />
                }
            >
                <StepOne
                    // @ts-ignore
                    classes={classes}
                    handleChange={handleClassName}
                />
                <StepTwo
                    // @ts-ignore
                    selected={selectedClass}
                    handleChangePrice={handleChangePrice}
                />
                <StepThree handleScheduleChange={handleSchedule} tutorID={id} />
                {!data.me && (
                    <div className="md:w-5/12 mx-auto">
                        <LoginForm hasRedirect={false} />
                    </div>
                )}

                <StepFour
                    // @ts-ignore
                    platforms={user.userPlatformAccount}
                    handlePlat={handlePlatform}
                />
            </StepWizard>
        </div>
    );
};
export default Agendar;
