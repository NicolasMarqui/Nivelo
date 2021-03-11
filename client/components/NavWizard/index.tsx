import toast from "react-hot-toast";
import ReactTooltip from "react-tooltip";
import { renderTitleAgendar } from "../../functions";
import { Button, Flex } from "../../styles/helpers";
import { TutorTitle } from "../TutorCard/TutorCard.style";
import { Nav, NavTitle } from "./NavWizard.style";

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
        tool?: {
            id: number;
            name: string;
            icon: string;
        };
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
    const { tutorName, selectedClass, classPrice, classSchedule, tool } = info;

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

    const handleFinalizar = () => {
        if (
            !selectedClass ||
            Object.keys(classPrice).length === 0 ||
            !classSchedule ||
            !tool
        ) {
            toast.error(
                "Verifique se todas as informações foram preenchidas corretamente!"
            );
            return false;
        }
    };

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
                            data-tip
                            data-for="final"
                            notActive={!classPrice}
                            onClick={handleFinalizar}
                        >
                            Finalizar
                            <ReactTooltip effect="solid" id="final">
                                <p>Aula: {selectedClass.name}</p>
                                <p>Valor: R${classPrice.price || 0},00</p>
                                <p>Dias: {classSchedule}</p>
                                <p>Meio: {tool.name} </p>
                            </ReactTooltip>
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
