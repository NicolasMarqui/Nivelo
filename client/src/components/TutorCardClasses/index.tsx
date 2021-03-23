import CardClassItem from "@components/CardClassItem";
import EmptyAnimation from "@components/UI/EmptyAnimation";
import { ClassesProps } from "@types";

interface TutorCardClassesProps {
    classes: ClassesProps[] | [];
    tutorId: number;
}

const TutorCardClasses: React.FC<TutorCardClassesProps> = ({
    classes,
    tutorId,
}) => {
    return (
        <div className="relative">
            {!classes || classes.length === 0 ? (
                <EmptyAnimation />
            ) : (
                classes.map((cl: ClassesProps) => (
                    <CardClassItem
                        singleClass={cl}
                        key={cl.id}
                        extraClasses="bg-white my-2 p-2"
                        tutorId={tutorId}
                    />
                ))
            )}
        </div>
    );
};
export default TutorCardClasses;
