import { Description, Detail, Flex, Pill } from "../../styles/helpers";
import { TutorTitle } from "../TutorCard/TutorCard.style";
import TutorClassAction from "../TutorClassAction";
import { TutorClass, TutorClassListWrapper } from "./TutorClassList.style";

interface ClassItem {
    id: number;
    name: string;
    description: string;
    amountTimeTaught: number;
    level: string;
    active: boolean;
    price: {
        id: number;
        price: number;
        time: number;
    };
    createdAt: string;
    updatedAt: string;
}

interface TutorClassListProps {
    classes: ClassItem[];
}

const TutorClassList: React.FC<TutorClassListProps> = ({ classes }) => {
    return (
        <TutorClassListWrapper>
            <ul className="class__list">
                {classes.map((cl) => (
                    <li key={cl.id} className={!cl.active ? "not__active" : ""}>
                        <TutorClass>
                            <Detail>
                                <Pill>{cl.level}</Pill>
                            </Detail>
                            <Flex col align="flex-start" justifyCenter>
                                <h2>{cl.name}</h2>
                                <Description color="#a0a0a0;">
                                    Ensinada {cl.amountTimeTaught} vezes
                                </Description>
                            </Flex>
                            <Flex justifyCenter>
                                {/* @ts-ignore */}
                                <TutorClassAction classDetail={cl} />
                            </Flex>
                        </TutorClass>
                    </li>
                ))}
            </ul>
        </TutorClassListWrapper>
    );
};
export default TutorClassList;
