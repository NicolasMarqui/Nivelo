import { TutorCardWrapper, TutorTitle, TutorSubtitle } from "./TutorCard.style";
import Image from "next/image";
import { MdStar, MdStarBorder, MdEvent, MdChat } from "react-icons/md";
import { Description, Pill, SampleDiv } from "../../styles/helpers";
import IconButton from "../IconButton";
import Link from "next/link";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getCategoriesFromArray } from "../../utils/getCategoriesFromArray";

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

    getCategoriesFromArray(categories);

    return (
        <TutorCardWrapper isColumn={isColumn}>
            <Link href="/tutor/[id]" as={`/tutor/${id}`}>
                <div className="tutor__fRow">
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
                        <MdStar size={24} color="yellow" />
                        <MdStar size={24} color="yellow" />
                        <MdStar size={24} color="yellow" />
                        <MdStar size={24} color="yellow" />
                        <MdStarBorder size={24} />
                    </div>
                    <div className="fRow__type">
                        <Pill>{type.name ? type.name : "-"}</Pill>
                    </div>
                </div>
            </Link>
            <div className="tutor__sRow">
                <Link href="/tutor/[id]" as="/tutor/1">
                    <div>
                        <TutorTitle>{user.name}</TutorTitle>
                        <TutorSubtitle>
                            Ensina <span>Javascript</span> e{" "}
                            <span>algoritimos</span>
                        </TutorSubtitle>

                        <Description fontSize="14px" marginTop={14} size="80">
                            {description}
                        </Description>
                    </div>
                </Link>
                <div className="sRow__prices">
                    <h5>Preço por hora a partir de</h5>
                    <p className="prices__value">R$8.00</p>

                    <div className="prices__btn">
                        <IconButton
                            icon={<MdEvent size={17} />}
                            text="AGENDAR"
                            smaller
                            bColor="#FF928B"
                            color="#fff"
                            onClick={() => alert("Hello")}
                        />
                        <IconButton
                            icon={<MdChat size={17} />}
                            text="VEJA MAIS"
                            smaller
                            bColor="#57CC99"
                            color="#fff"
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
                        <SampleDiv />
                    </TabPanel>
                    <TabPanel>
                        <SampleDiv />
                    </TabPanel>
                </Tabs>
            </div>
        </TutorCardWrapper>
    );
}
