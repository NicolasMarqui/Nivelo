import { useState } from "react";
import { TutorProps } from "@types";
import { useMeSimplifiedQuery } from "src/generated/graphql";
import LoadingAnimation from "@components/UI/LoadingAnimation";
import EmptyAnimation from "@components/UI/EmptyAnimation";
import StepWizard from "react-step-wizard";
import NavWizard from "@components/Wizard/NavWizard";
import StepOne from "@components/Wizard/StepOne";
import StepTwo from "@components/Wizard/StepTwo";
import StepThree from "@components/Wizard/StepThree";
import StepFour from "@components/Wizard/StepFour";
import Title from "@components/UI/Title";
import Link from "next/link";
import { useRouter } from "next/router";

interface AgendarProps {
    tutor: TutorProps;
}

const Agendar: React.FC<AgendarProps> = ({ tutor }) => {
    const [{ data, fetching, error }] = useMeSimplifiedQuery();
    const [selectedClass, setSelectedClass] = useState({});
    const [classPrice, setClassPrice] = useState({});
    const [schedule, setSchedule] = useState("");
    const [tool, setTool] = useState("");
    const router = useRouter();

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
                    <div className="md:w-5/12 mx-auto flex flex-col items-center">
                        <Title classes="text-center mt-5 font-regular">
                            Faça login para continuar
                        </Title>
                        <p className="text-center text-desc mt-2">
                            A partir desse ponto você precisa estar logado para
                            continuar....
                        </p>
                        <div className="bg-primaryOrange p-2 rounded-2xl mt-4 hover:bg-lightOrange">
                            <Link href={`/login?from=${router.asPath}`}>
                                <a className="text-center text-white">
                                    Ir para o login
                                </a>
                            </Link>
                        </div>
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
