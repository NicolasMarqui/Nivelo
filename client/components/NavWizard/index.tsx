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
        classPrice: Number;
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
}: NavWizardProps) {
    const { tutorName, selectedClass } = info;

    return (
        <>
            <NavTitle>
                <TutorTitle>{renderTitleAgendar(currentStep)}</TutorTitle>
                <p>
                    Tutor: <span>{tutorName}</span>
                </p>
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
                    <TutorTitle>R$,00</TutorTitle>
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
