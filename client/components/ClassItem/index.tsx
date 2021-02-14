import { ClassItemWrapper } from "./ClassItem.style";
import { MdSchool } from "react-icons/md";
import { SmallerButton } from "../../styles/helpers";

export default function ClassItem() {
    return (
        <ClassItemWrapper>
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
