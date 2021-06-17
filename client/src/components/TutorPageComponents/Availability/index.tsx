import { Sticky } from "react-sticky";
import { MdEvent, MdChatBubbleOutline } from "react-icons/md";
import IconButton from "@components/UI/IconButton";
import CustomCalendarTutor from "@components/UI/CalendarTutor";
import { lowestPriceAval } from "@utils/lowestPriceClasses";
import { ClassesProps } from "@types";
import PaymentList from "../PaymentList";

interface AvailabilityProps {
    tutorId: number;
    classes: ClassesProps[];
    setAgendarOpen: (value: boolean) => void;
    isAgendarOpen: boolean;
}

const Availability: React.FC<AvailabilityProps> = ({
    tutorId,
    classes,
    setAgendarOpen,
    isAgendarOpen,
}) => {
    return (
        <div className="flex-1 z-0 -mt-28 md:block hidden">
            <Sticky topOffset={-120}>
                {({ style, isSticky }) => (
                    <div
                        className={`bg-white rounded-3xl shadow-md ${
                            isSticky ? "mt-20" : ""
                        }`}
                        style={style}
                    >
                        <div className="relative p-7">
                            <h5 className="text-center md:text-left text-base dark:text-black222">
                                Preço por hora a partir de
                            </h5>
                            <p className="text-2xl text-primaryOrange text-center md:text-left font-bold">
                                {classes !== null && classes.length > 0
                                    ? `R$ ${lowestPriceAval(classes)}`
                                    : "R$-.00"}
                            </p>
                            <div className="mt-4 flex items-center justify-center md:justify-start mb-5 md:mb-0">
                                <IconButton
                                    text="Agendar"
                                    icon={<MdEvent size={18} color="#222" />}
                                    classes="bg-primaryPink hover:bg-lightOrange text-white ml-0"
                                    onClick={() =>
                                        setAgendarOpen(!isAgendarOpen)
                                    }
                                />
                                <IconButton
                                    text="Contato"
                                    icon={
                                        <MdChatBubbleOutline
                                            size={18}
                                            color="#222"
                                        />
                                    }
                                    isActive={false}
                                    classes="ml-2 bg-primaryGreen hover:bg-lightGreen text-white cursor-not-allowed"
                                />
                            </div>
                        </div>

                        <div className="my-1 w-full border-2 border-gray-200"></div>

                        <div className="mt-2 px-7 py-5">
                            <h5 className="text-center text-base font-bold dark:text-black222">
                                Disponibilidade
                            </h5>

                            <div className="my-3">
                                <CustomCalendarTutor
                                    tutorId={tutorId}
                                    smaller
                                    isAgendando={false}
                                    isTutorDashView={false}
                                    isShowHours
                                />
                            </div>

                            <div className="relative">
                                <p className="my-2 text-center text-sm color-desc">
                                    Metódos de pagamento
                                </p>
                                <PaymentList />
                            </div>
                        </div>
                    </div>
                )}
            </Sticky>
        </div>
    );
};
export default Availability;
