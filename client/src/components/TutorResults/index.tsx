import TutorCard from "@components/UI/TutorCard";

interface TutorResultsProps {}

const TutorResults: React.FC<TutorResultsProps> = ({}) => {
    return (
        <div className="mt-8">
            <TutorCard />
            <TutorCard />
        </div>
    );
};
export default TutorResults;
