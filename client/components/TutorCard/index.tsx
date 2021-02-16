import { TutorCardWrapper, TutorTitle, TutorSubtitle } from "./TutorCard.style";
import Image from "next/image";
import { MdStar, MdStarBorder, MdEvent, MdChat } from "react-icons/md";
import { Description, Pill } from "../../styles/helpers";
import IconButton from "../IconButton";
import Link from "next/link";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

interface TutorCardProps {
    isColumn: boolean;
}

export default function TutorCard({ isColumn }: TutorCardProps) {
    return (
        <TutorCardWrapper isColumn={isColumn}>
            <div className="tutor__fRow">
                <Image
                    src="/assets/student.jpg"
                    width={120}
                    height={120}
                    className="tutor__avatar"
                />
                <div className="fRow__rating">
                    <MdStar size={24} color="yellow" />
                    <MdStar size={24} color="yellow" />
                    <MdStar size={24} color="yellow" />
                    <MdStar size={24} color="yellow" />
                    <MdStarBorder size={24} />
                </div>
                <div className="fRow__type">
                    <Pill>Professor</Pill>
                </div>
            </div>
            <div className="tutor__sRow">
                <TutorTitle>Walter White</TutorTitle>
                <TutorSubtitle>
                    Ensina <span>Javascript</span> e <span>algoritimos</span>
                </TutorSubtitle>

                <Description fontSize="14px" marginTop={14} size="80">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam
                </Description>

                <div className="sRow__prices">
                    <h5>Preço por hora a partir de</h5>
                    <p className="prices__value">R$8.00</p>

                    <div className="prices__btn">
                        <IconButton
                            icon={<MdEvent size={17} />}
                            text="AGENDAR"
                        />
                        <IconButton
                            icon={<MdChat size={17} />}
                            text="CONTATO"
                        />
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
                        <h2>Any content 1</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 2</h2>
                    </TabPanel>
                </Tabs>
            </div>
        </TutorCardWrapper>
    );
}
