import Image from "next/image";
import { Pill } from "../../../styles/helpers";
import { checkIfUndefined } from "../../../utils/checkIfUndefined";
import Avatar from "../../Avatar";

interface FirstColumnProps {
    data: any;
}

const FirstColumn: React.FC<FirstColumnProps> = ({
    data,
}: FirstColumnProps) => {
    return (
        <div className="st__first">
            <Avatar avatar={data.singleTutor.tutor.user.avatar} />
            <div className="first__rating">
                {/* TODO --> add rating library here */}
            </div>
            <div className="first__type">
                <Pill>
                    {checkIfUndefined(data.singleTutor.tutor.type.name)}
                </Pill>
            </div>
        </div>
    );
};
export default FirstColumn;
