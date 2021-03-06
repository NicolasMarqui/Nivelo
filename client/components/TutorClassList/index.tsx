import TimeAgo from "react-timeago";
import { Description, Detail, Flex, Pill } from "../../styles/helpers";
import { formatter } from "../../utils/agoPtFormat";
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
                {classes.map((cl) =>
                    !cl ? null : (
                        <li
                            key={cl.id}
                            className={!cl.active ? "not__active" : ""}
                        >
                            <TutorClass>
                                <Detail>
                                    <Pill>{cl.level}</Pill>
                                </Detail>
                                <Flex col align="flex-start" justifyCenter>
                                    <h2>{cl.name}</h2>
                                    <Description
                                        color="#a0a0a0;"
                                        fontSize="14px"
                                    >
                                        Ensinada {cl.amountTimeTaught} vezes
                                    </Description>
                                    <Description fontSize="12px">
                                        Última atualização
                                        <span
                                            style={{
                                                marginLeft: 3,
                                                fontWeight: 700,
                                            }}
                                        >
                                            <TimeAgo
                                                date={Number(cl.updatedAt)}
                                                formatter={formatter}
                                                live={true}
                                            />
                                        </span>
                                    </Description>
                                </Flex>
                                <Flex justifyCenter>
                                    <TutorClassAction classDetail={cl} />
                                </Flex>
                            </TutorClass>
                        </li>
                    )
                )}
            </ul>
        </TutorClassListWrapper>
    );
};
export default TutorClassList;
