import { ClassItemWrapper } from "./ClassItem.style";
import { MdSchool } from "react-icons/md";
import { SmallerButton } from "../../styles/helpers";

interface ClassItemProps {
    smaller?: boolean;
}

export default function ClassItem({ smaller }: ClassItemProps) {
    return (
        <ClassItemWrapper smaller={smaller ? smaller : false}>
            <div className="class__icon">
                <MdSchool size={24} />
            </div>
            <div className="class__info">
                <h3>Javascript básico</h3>
                <p>20 aulas dadas</p>
            </div>
            <div className="class__price">
                <SmallerButton>R$ 8.00+</SmallerButton>
            </div>
        </ClassItemWrapper>
    );
}
