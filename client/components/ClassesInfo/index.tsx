import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "../../utils/createUrqlClient";
import { useSingleClassQuery } from "../../generated/graphql";
import { ClassesInfoWrapper } from "./ClassesInfo.style";
import { checkIfUndefined } from "../../utils/checkIfUndefined";

interface ClassesInfoProps {
    classId: any;
}

const ClassesInfo = ({ classId }: ClassesInfoProps) => {
    const [{ data, fetching }] = useSingleClassQuery({
        variables: { id: parseInt(classId) },
    });

    console.log(data);

    return (
        <ClassesInfoWrapper>
            {fetching ? (
                <p>Carregando</p>
            ) : !data || data.singleClass === null ? (
                <p>Error</p>
            ) : (
                <h2>{checkIfUndefined(data.singleClass.name)}</h2>
            )}
        </ClassesInfoWrapper>
    );
};

export default withUrqlClient(createUrqlClient, { ssr: false })(
    ClassesInfo as any
);
