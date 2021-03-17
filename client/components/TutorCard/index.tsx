import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { BsDot } from "react-icons/bs";
import { MdStar, MdStarBorder } from "react-icons/md";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useWindowSize from "../../hooks/useWindowSize";
import { Description, Pill, PillButton } from "../../styles/helpers";
import { shortTutorDescription } from "../../utils/shortTutorDescription";
import CustomCalendarTutor from "../CalendarTutor";
import CategoriesFromTutor from "../CategoriesFromTutor";
import TutorCardClassesList from "../TutorCardClassesList";
import { TutorCardWrapper, TutorSubtitle, TutorTitle } from "./TutorCard.style";

interface TutorCardProps {
    isColumn: boolean;
    tutor: any;
}

export default function TutorCard({ isColumn, tutor }: TutorCardProps) {
    const router = useRouter();
    // prettier-ignore
    const { id, description, type, rating, amountClasses, amountStudents, user, classes, categories,} = tutor;

    const { width } = useWindowSize();

    const handleAgendarClick = () => router.push(`/tutor/${id}?agendar=true`);
    const handleSeeMore = () => router.push(`/tutor/${id}`);

    return (
        <>
            <TutorCardWrapper isColumn={isColumn}>
                <Link href="/tutor/[id]" as={`/tutor/${id}`}>
                    <div className="tutor__fRow">
                        <div className="fRow__type">
                            <Pill>{type ? type.name : "-"}</Pill>
                        </div>
                        {user.avatar ? (
                            <Image
                                src={user.avatar}
                                width={120}
                                height={120}
                                className="tutor__avatar"
                            />
                        ) : (
                            <img
                                src="https://picsum.photos/200"
                                width={120}
                                height={120}
                                className="tutor__avatar"
                            />
                        )}
                        <div className="fRow__rating">
                            <MdStar size={24} color="#c1c100" />
                            <MdStar size={24} color="#c1c100" />
                            <MdStar size={24} color="#c1c100" />
                            <MdStar size={24} color="#c1c100" />
                            <MdStarBorder size={24} />
                        </div>
                    </div>
                </Link>
                <div className="tutor__sRow">
                    <Link href="/tutor/[id]" as={`/tutor/${id}`}>
                        <div>
                            <TutorTitle>{user.name}</TutorTitle>
                            <TutorSubtitle>
                                <CategoriesFromTutor tutorId={id} />
                            </TutorSubtitle>

                            <Description
                                fontSize="14px"
                                marginTop={20}
                                size={width > 1024 ? "80" : "100"}
                            >
                                {description
                                    ? shortTutorDescription(description, 200)
                                    : "-"}
                            </Description>
                        </div>
                    </Link>
                    <div className="sRow__prices">
                        <h5>Preço por hora a partir de</h5>
                        <p className="prices__value">R$8.00</p>

                        <div className="prices__btn">
                            <PillButton
                                bgColor="#FF928B"
                                onClick={handleAgendarClick}
                            >
                                AGENDAR
                            </PillButton>
                            <PillButton
                                bgColor="#57CC99"
                                onClick={handleSeeMore}
                            >
                                VEJA MAIS
                            </PillButton>
                        </div>
                    </div>
                </div>
                <div className="tutor__tRow">
                    <Tabs>
                        <TabList>
                            <Tab>Aulas</Tab>
                            <Tab>Disponibilidade</Tab>
                        </TabList>

                        <TabPanel>
                            <TutorCardClassesList classes={classes} />
                        </TabPanel>
                        <TabPanel>
                            <CustomCalendarTutor
                                tutorId={id}
                                smaller
                                isTutorDashView={false}
                            />
                        </TabPanel>
                    </Tabs>
                </div>
            </TutorCardWrapper>
        </>
    );
}
