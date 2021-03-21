import { Sticky } from "react-sticky";
import { MdEvent, MdChatBubbleOutline } from "react-icons/md";
import IconButton from "@components/UI/IconButton";

interface AvailabilityProps {}

const Availability: React.FC<AvailabilityProps> = ({}) => {
    return (
        <div className="flex-1 z-20 -mt-28 md:block hidden">
            <Sticky topOffset={-112}>
                {({ style, isSticky }) => (
                    <div
                        className="bg-white rounded-3xl shadow-md"
                        style={style}
                    >
                        <div className="relative p-7">
                            <h5 className="text-center md:text-left text-base">
                                Preço por hora a partir de
                            </h5>
                            <p className="text-2xl text-primaryOrange text-center md:text-left font-bold">
                                R$8.00
                            </p>
                            <div className="mt-4 flex items-center justify-center md:justify-start mb-5 md:mb-0">
                                <IconButton
                                    text="Agendar"
                                    icon={<MdEvent size={18} color="#222" />}
                                    classes="bg-primaryPink hover:bg-lightOrange text-white ml-0"
                                />
                                <IconButton
                                    text="Contato"
                                    icon={
                                        <MdChatBubbleOutline
                                            size={18}
                                            color="#222"
                                        />
                                    }
                                    classes="ml-2 bg-primaryGreen hover:bg-lightGreen text-white"
                                />
                            </div>
                        </div>

                        <div className="my-1 w-full border-2 border-gray-200"></div>

                        <div className="mt-2 px-7 py-5">
                            <h5 className="text-center text-base font-bold">
                                Disponibilidade
                            </h5>

                            <div className="my-3 h-32 bg-gray-200"></div>

                            <p className="my-2 text-center text-sm color-desc">
                                Lorem ipsum dolor sit amet, consectetur eiusmod
                                tempor.
                            </p>
                        </div>
                    </div>
                )}
            </Sticky>
        </div>
    );
};
export default Availability;
