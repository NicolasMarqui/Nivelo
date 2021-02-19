import { useState } from "react";
import { TutorCardWrapper, TutorTitle, TutorSubtitle } from "./TutorCard.style";
import Image from "next/image";
import { MdStar, MdStarBorder, MdEvent, MdChat } from "react-icons/md";
import { BsDot } from "react-icons/bs";
import { Description, Pill, SampleDiv, PillButton } from "../../styles/helpers";
import IconButton from "../IconButton";
import Link from "next/link";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getCategoriesFromArray } from "../../utils/getCategoriesFromArray";
import TutorCardClassesList from "../TutorCardClassesList";

interface TutorCardProps {
    isColumn: boolean;
    tutor: any;
}

export default function TutorCard({ isColumn, tutor }: TutorCardProps) {
    const {
        id,
        description,
        type,
        rating,
        amountClasses,
        amountStudents,
        user,
        classes,
        categories,
    } = tutor;

    const [sideClassesOpen, setSideClassesOpen] = useState(true);
    // getCategoriesFromArray(categories);

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
                        <div className="fRow__status">
                            <BsDot color="green" size={30} />
                            <p>Online</p>
                        </div>
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
                                Ensina <span>Javascript</span> e
                                <span>algoritimos</span>
                            </TutorSubtitle>

                            <Description
                                fontSize="14px"
                                marginTop={20}
                                size="80"
                            >
                                {description ? description : "-"}
                            </Description>
                        </div>
                    </Link>
                    <div className="sRow__prices">
                        <h5>Preço por hora a partir de</h5>
                        <p className="prices__value">R$8.00</p>

                        <div className="prices__btn">
                            <PillButton
                                bgColor="#FF928B"
                                onClick={() => alert("Agendar")}
                            >
                                AGENDAR
                            </PillButton>
                            <PillButton
                                bgColor="#57CC99"
                                onClick={() => alert("Mais")}
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
                            <SampleDiv />
                        </TabPanel>
                    </Tabs>
                </div>
            </TutorCardWrapper>
        </>
    );
}
