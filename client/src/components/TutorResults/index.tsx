import TutorCard from "@components/UI/TutorCard";
import { TutorProps } from "src/types";

interface TutorResultsProps {
    data: TutorProps[];
}

const TutorResults: React.FC<TutorResultsProps> = ({ data }) => {
    return (
        <div className="mt-8">
            {data.map((t) => (
                <TutorCard tutor={t} key={t.id} />
            ))}
        </div>
    );
};
export default TutorResults;
