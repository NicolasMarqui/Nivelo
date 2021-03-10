import { renderTitleAgendar } from "../../functions";
import { Button, Flex, Title } from "../../styles/helpers";
import IconButton from "../IconButton";
import { TutorTitle } from "../TutorCard/TutorCard.style";
import { Nav, Dot, NavTitle } from "./NavWizard.style";

interface NavWizardProps {
    totalSteps?: any;
    currentStep?: any;
    goToStep?: any;
    nextStep?: any;
    previousStep?: any;
    lastStep?: any;
    info?: {
        selectedClass: any;
        classPrice: {
            id: number;
            price: number;
            time: number;
        };
        classSchedule?: [any];
        tool?: String;
        tutorName: string;
    };
}

export default function NavWizard({
    currentStep,
    info,
    nextStep,
    previousStep,
    totalSteps,
}: NavWizardProps) {
    const { tutorName, selectedClass, classPrice } = info;

    const dots = [];
    for (let i = 1; i <= totalSteps; i += 1) {
        const isActive = currentStep === i;
        dots.push(
            <span
                key={`step-${i}`}
                className={`dot ${isActive ? "dot__active" : ""}`}
            >
                &bull;
            </span>
        );
    }

    return (
        <>
            <NavTitle>
                <TutorTitle>{renderTitleAgendar(currentStep)}</TutorTitle>
                <p>
                    Tutor: <span>{tutorName}</span>
                </p>
                <div className="dot__wrapper">{dots}</div>
            </NavTitle>
            <Nav>
                <Flex size={1}>
                    <Button
                        bgColor="#57CC99"
                        color="#fff"
                        fSize="20px"
                        bold
                        margin="0"
                        notActive={currentStep === 1 ? true : false}
                        onClick={previousStep}
                    >
                        Anterior
                    </Button>
                </Flex>
                <Flex size={3} justifyCenter>
                    <TutorTitle>R${classPrice.price || 0},00</TutorTitle>
                </Flex>
                <Flex size={1} justifyEnd>
                    {currentStep === 4 ? (
                        <Button
                            bgColor="#57CC99"
                            color="#fff"
                            fSize="20px"
                            bold
                            margin="0"
                        >
                            Finalizar
                        </Button>
                    ) : (
                        <Button
                            bgColor="#57CC99"
                            color="#fff"
                            fSize="20px"
                            bold
                            margin="0"
                            notActive={
                                Object.keys(selectedClass).length === 0
                                    ? true
                                    : false
                            }
                            onClick={nextStep}
                        >
                            Próximo
                        </Button>
                    )}
                </Flex>
            </Nav>
        </>
    );
}
