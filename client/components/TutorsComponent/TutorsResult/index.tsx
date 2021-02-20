import { AreaTutors } from "../../../pages/tutors/Tutors.styles";
import TutorCard from "../../TutorCard";

interface TutorsResultProps {
    data: any;
    isColumn: boolean;
}

const TutorsResult: React.FC<TutorsResultProps> = ({
    data,
    isColumn,
}: TutorsResultProps) => {
    return (
        <AreaTutors isColumn={isColumn}>
            {data.allTutors.map((tut) => (
                <TutorCard key={tut.id} isColumn={isColumn} tutor={tut} />
            ))}
        </AreaTutors>
    );
};
export default TutorsResult;
