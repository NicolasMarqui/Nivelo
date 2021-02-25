import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "../../utils/createUrqlClient";
import { useSingleClassQuery } from "../../generated/graphql";
import { ClassesInfoWrapper, ClassesDetails } from "./ClassesInfo.style";
import { checkIfUndefined } from "../../utils/checkIfUndefined";
import { Description, Pill, PillButton } from "../../styles/helpers";

interface ClassesInfoProps {
    classId: any;
}

const ClassesInfo = ({ classId }: ClassesInfoProps) => {
    const [{ data, fetching }] = useSingleClassQuery({
        variables: { id: Number(classId) },
    });

    return (
        <ClassesInfoWrapper>
            {fetching ? (
                <p>Carregando</p>
            ) : !data || data.singleClass === null ? (
                <p>Error</p>
            ) : (
                <ClassesDetails>
                    <div className="details__header">
                        <h4>Detalhes da aula</h4>
                    </div>
                    <div className="details__item">
                        <div className="item__title">
                            <h5>Descrição</h5>
                        </div>
                        <div className="item__desc">
                            <Description
                                color="#B1B1B1"
                                fontSize="17px"
                                size="80"
                            >
                                {data.singleClass.description
                                    ? data.singleClass.description
                                    : "Essa aula não possui descrição!"}
                            </Description>
                        </div>
                    </div>
                    <div className="details__item">
                        <div className="item__title">
                            <h5>Nível</h5>
                        </div>
                        <div className="item__desc">
                            <Description
                                color="#B1B1B1"
                                fontSize="17px"
                                size="80"
                            >
                                {data.singleClass.level}
                            </Description>
                        </div>
                    </div>
                    <div className="details__item">
                        <div className="item__title">
                            <h5>Preços</h5>
                        </div>
                        <div className="item__desc">
                            <ul>
                                {data.singleClass.price ? (
                                    data.singleClass.price.map((p) => (
                                        <li key={p.id}>
                                            <Description
                                                color="#B1B1B1"
                                                fontSize="17px"
                                                size="80"
                                            >
                                                {p.price}
                                            </Description>
                                            <Pill bgColor="#8390FA">
                                                {p.time ? p.time : 60} min
                                            </Pill>
                                        </li>
                                    ))
                                ) : (
                                    <p>-</p>
                                )}
                            </ul>
                        </div>
                    </div>
                    <div className="details__item">
                        <PillButton
                            bgColor="#FF928B"
                            onClick={() => alert("Agendar")}
                        >
                            AGENDAR
                        </PillButton>
                    </div>
                </ClassesDetails>
            )}
        </ClassesInfoWrapper>
    );
};

export default withUrqlClient(createUrqlClient, { ssr: false })(
    ClassesInfo as any
);
