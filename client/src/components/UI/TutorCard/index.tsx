import { checkAvatar } from "@utils/checkAvatar";
import { shortTutorDescription } from "@utils/shortTutorDescription";
import Link from "next/link";
import { MdEvent, MdChatBubbleOutline } from "react-icons/md";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { TutorCardProps } from "src/types";
import IconButton from "../IconButton";
import ReactStarsRating from "react-awesome-stars-rating";
import Tooltip from "react-tooltip";
import CustomCalendarTutor from "../CalendarTutor";
import { getCategoriesFromArray } from "@utils/getCategoriesFromArray";
import { useRouter } from "next/router";

const TutorCard: React.FC<TutorCardProps> = ({ tutor }) => {
    const router = useRouter();

    return (
        <div className="flex flex-col md:flex-row rounded-3xl items-center md:items-start bg-gray-100 mt-4 px-4 md:px-12 py-3 md:py-7 relative">
            <div className="flex-none flex flex-col">
                <img
                    src={checkAvatar(tutor.user.avatar, tutor.user.name)}
                    className="flex-none rounded-full order-2 md:order-1 object-cover h-28 w-28 mt-4 md:mt-0"
                />

                <div
                    className="flex-1 flex items-center jusify-center mt-5 order-3 md:order-2"
                    data-for="rating"
                    data-tip={`${
                        tutor.rating === 0
                            ? "Sem avaliações"
                            : `Nota ${tutor.rating}`
                    }`}
                >
                    <ReactStarsRating
                        id="rating"
                        value={tutor.rating}
                        className="flex pointer-events-none"
                    />
                    <Tooltip id="rating" effect="solid" place="bottom" />
                </div>

                <p className="bg-primaryPurple text-white text-sm text-center absolute top-0 -right-3 p-2 rounded-sm font-bold hidden md:block detail">
                    {tutor.type.name}
                </p>
            </div>
            <div className="flex-2 px-4 md:px-14 md:mr-4 md:border-r-2 md:border-gray-300 cursor-pointer">
                <Link href="/tutor/[id]" as={`/tutor/${tutor.id}`}>
                    <a className="flex flex-col items-center md:items-start">
                        <h3 className="text-black222 text-xl md:text-2xl font-bold mt-2 md:mt-0">
                            {tutor.user.name}
                        </h3>
                        <p className="text-sm text-primaryOrange md:-mt-1">
                            {getCategoriesFromArray(tutor.categories)}
                        </p>

                        <p className="mt-4 text-base text-desc md:w-4/5 text-center md:text-left">
                            {shortTutorDescription(tutor.description, 200)}
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
                            onClick={() =>
                                router.push(`/tutor/${tutor.id}?agendar=true`)
                            }
                            classes="bg-primaryPink hover:bg-lightOrange text-white"
                        />
                        <IconButton
                            text="Veja mais"
                            icon={
                                <MdChatBubbleOutline size={18} color="#222" />
                            }
                            onClick={() => router.push(`/tutor/${tutor.id}`)}
                            classes="ml-2 bg-primaryGreen hover:bg-lightGreen text-white"
                        />
                    </div>
                </div>
            </div>
            <div className="flex-1.5 w-full">
                <Tabs>
                    <TabList>
                        <Tab>Disponibilidade</Tab>
                    </TabList>
                    <TabPanel>
                        <CustomCalendarTutor
                            tutorId={tutor.id}
                            smaller
                            isTutorDashView={false}
                            isAgendando={false}
                            isShowHours
                        />

                        <div className="mt-4">
                            <div className="flex flex-row items-center justify-center">
                                <div className="flex-none flex items-center mr-7">
                                    <div className="h-3 w-3 bg-primaryGreen rounded-full mr-1"></div>
                                    <h5 className="text-sm text-desc">
                                        Disponível
                                    </h5>
                                </div>
                                <div className="flex-none flex items-center">
                                    <div className="h-3 w-3 bg-white rounded-full mr-1 border-2 border-gray-500"></div>
                                    <h5 className="text-sm text-desc">
                                        Não disponível
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};
export default TutorCard;
