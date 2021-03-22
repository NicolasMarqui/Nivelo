import ClassItem from "@components/ClassItem";
import EmptyAnimation from "@components/UI/EmptyAnimation";
import { ClassesProps } from "@types";

interface TutorCardClassesProps {
    classes: ClassesProps[] | [];
}

const TutorCardClasses: React.FC<TutorCardClassesProps> = ({ classes }) => {
    return (
        <div className="relative">
            {!classes || classes.length === 0 ? (
                <EmptyAnimation />
            ) : (
                classes.map((cl: ClassesProps) => (
                    <ClassItem
                        singleClass={cl}
                        key={cl.id}
                        extraClasses="bg-white my-2 p-2"
                    />
                ))
            )}
        </div>
    );
};
export default TutorCardClasses;
