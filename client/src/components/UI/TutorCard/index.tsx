import Link from "next/link";
import { MdStarBorder, MdEvent, MdChatBubbleOutline } from "react-icons/md";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import IconButton from "../IconButton";

interface TutorCardProps {}

const TutorCard: React.FC<TutorCardProps> = ({}) => {
    return (
        <div className="flex flex-col md:flex-row rounded-3xl items-center md:items-start bg-gray-100 mt-4 px-4 md:px-12 py-3 md:py-7">
            <div className="flex-none flex flex-col">
                <img
                    src="/images/example.jpg"
                    className="flex-none rounded-full order-2 md:order-1 object-cover h-28 w-28 mt-4 md:mt-0"
                />

                <div className="flex-1 flex items-center jusify-center mt-4 order-3 md:order-2">
                    <MdStarBorder size={20} />
                    <MdStarBorder size={20} />
                    <MdStarBorder size={20} />
                    <MdStarBorder size={20} />
                    <MdStarBorder size={20} />
                </div>

                <div className="flex-1 flex items-center justify-center rounded-xl bg-primaryPurple mt-2 md:mt-4 order-1 md:order-3 py-1">
                    <p className="text-white text-sm">Tutor</p>
                </div>
            </div>
            <div className="flex-2 px-4 md:px-14 md:mr-4 md:border-r-2 md:border-gray-300 cursor-pointer">
                <Link href="/tutor/123">
                    <a className="flex flex-col items-center md:items-start">
                        <h3 className="text-black222 text-xl md:text-2xl font-bold mt-2 md:mt-0">
                            Nicolas Marqui
                        </h3>
                        <p className="text-sm text-primaryOrange md:-mt-1">
                            Javascript, Algoritimos
                        </p>

                        <p className="mt-4 text-base text-desc md:w-4/5 text-center md:text-left">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam
                        </p>
                    </a>
                </Link>

                <div className="mt-5 flex flex-col">
                    <div className="my-2">
                        <h5 className="text-center md:text-left font-bold text-base">
                            Preço por hora a partir de
                        </h5>
                        <p className="text-2xl text-primaryOrange text-center md:text-left font-bold">
                            R$8.00
                        </p>
                    </div>
                    <div className="mt-4 flex items-center justify-center md:justify-start mb-5 md:mb-0">
                        <IconButton
                            text="Agendar"
                            icon={<MdEvent size={18} color="#222" />}
                            classes="bg-primaryPink hover:bg-lightOrange text-white"
                        />
                        <IconButton
                            text="Veja mais"
                            icon={
                                <MdChatBubbleOutline size={18} color="#222" />
                            }
                            classes="ml-2 bg-primaryGreen hover:bg-lightGreen text-white"
                        />
                    </div>
                </div>
            </div>
            <div className="flex-1.5 w-full">
                <Tabs>
                    <TabList>
                        <Tab>Aulas</Tab>
                        <Tab>Disponibilidade</Tab>
                    </TabList>

                    <TabPanel>
                        <h2>Aulas aqui</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Calendário aqui</h2>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};
export default TutorCard;
