import { useRouter } from "next/router";
import toast from "react-hot-toast";
import ReactTooltip from "react-tooltip";
import { renderTitleAgendar } from "../../functions";
import { useMeQuery, useNewOrderMutation } from "../../generated/graphql";
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
        selectedClass: {
            active: boolean;
            amountTimeTaught: number;
            createdAt: string;
            description: string;
            id: number;
            level: string;
            name: string;
            price: any[];
            updatedAt: string;
        };
        classPrice: {
            id: number;
            price: number;
            time: number;
        };
        classSchedule?: string;
        tool?: {
            id: number;
            name: string;
            icon: string;
        };
        tutorName: string;
    };
    userBuyingID: number | null;
}

export default function NavWizard({
    currentStep,
    info,
    nextStep,
    previousStep,
    totalSteps,
    userBuyingID,
}: NavWizardProps) {
    const router = useRouter();
    const [, newOrder] = useNewOrderMutation();
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

    const handleFinalizar = async () => {
        // prettier-ignore
        if ( !selectedClass || Object.keys(classPrice).length === 0 || !classSchedule || !tool) {
            toast.error(
                "Verifique se todas as informações foram preenchidas corretamente!"
            );
            return false;
        }

        const response = await newOrder({
            userID: userBuyingID,
            classID: selectedClass.id,
            date: classSchedule,
            classPrice: classPrice.price,
            classDuration: `${classPrice.time}min`,
            platformId: tool.id,
        });

        if (response.data.createNewOrder.errors) {
            toast.error("Algo deu errado! Tente Novamente");
        } else if (response.data.createNewOrder.order) {
            toast.loading("Por favor aguarde...", { duration: 4000 });
            router.push(`/order/${response.data.createNewOrder.order.id}`);
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
                    {currentStep === (userBuyingID ? 4 : 5) ? (
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
                                Object.keys(selectedClass).length === 0 ||
                                (userBuyingID === null && currentStep === 4)
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
