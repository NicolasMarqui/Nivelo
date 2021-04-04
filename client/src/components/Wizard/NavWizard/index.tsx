import FinalizarOrder from "@components/Modals/FinalizarOrder";
import IconButton from "@components/UI/IconButton";
import { renderTitleAgendar } from "@utils/renderTitleAgendar";
import ReactToolTip from "react-tooltip";
import { Reoverlay } from "reoverlay";

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
        hour?: {
            id?: string;
            from?: string;
            date?: string;
            to?: string;
            tutorID?: number;
        };
        tool?: {
            id: number;
            name: string;
            icon: string;
        };
        tutorName: string;
    };
    userBuyingID: number | null;
}

const NavWizard: React.FC<NavWizardProps> = ({
    currentStep,
    info,
    nextStep,
    previousStep,
    totalSteps,
    userBuyingID,
}) => {
    const {
        tutorName,
        selectedClass,
        classPrice,
        classSchedule,
        tool,
        hour,
    } = info;

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
        Reoverlay.showModal(FinalizarOrder, {
            info,
            userBuyingID,
        });
    };

    return (
        <>
            <div className="flex justify-center flex-col items-center my-2 mx-3">
                <h3 className="text-center text-xl font-semibold text-black222">
                    {renderTitleAgendar(currentStep, userBuyingID)}
                </h3>
                <p className="mt-1 text-center">
                    Tutor:{" "}
                    <span className="text-primaryOrange">{tutorName}</span>
                </p>
            </div>

            <div className="fixed bg-white z-20 bottom-0 left-0 right-0 border-t-2 border-gray-300 flex items-center justify-between p-4 mx-auto">
                <div className="flex-none justify-start text-left">
                    <IconButton
                        text="Anterior"
                        classes="bg-primaryPurple text-white  hover:bg-lightPurple"
                        onClick={previousStep}
                        isActive={currentStep === 1 ? false : true}
                    />
                </div>
                <div className="flex-3 justify-center">
                    <h4 className="text-center text-xl font-bold">
                        R${classPrice.price || 0},00
                    </h4>
                </div>
                <div className="flex-none justify-end items-end">
                    {currentStep === (userBuyingID ? 5 : 6) ? (
                        <div className="rel" data-tip data-for="final">
                            <IconButton
                                text="Finalizar"
                                classes="bg-primaryGreen text-white font-bold m-0 hover:bg-lightGreen"
                                onClick={handleFinalizar}
                            />

                            <ReactToolTip effect="solid" id="final">
                                <p>Aula: {selectedClass.name}</p>
                                <p>Valor: R${classPrice.price || 0},00</p>
                                <p>Dias: {classSchedule}</p>
                                <p>Meio: {tool.name} </p>
                            </ReactToolTip>
                        </div>
                    ) : (
                        <IconButton
                            text="Próximo"
                            classes="bg-primaryGreen text-white font-bold m-0 hover:bg-lightGreen"
                            isActive={
                                Object.keys(selectedClass).length === 0 ||
                                (currentStep === 3 && !classSchedule) ||
                                (currentStep === 4 &&
                                    Object.keys(hour).length === 0) ||
                                (userBuyingID === null && currentStep === 5)
                                    ? false
                                    : true
                            }
                            onClick={nextStep}
                        />
                    )}
                </div>
            </div>
        </>
    );
};
export default NavWizard;
