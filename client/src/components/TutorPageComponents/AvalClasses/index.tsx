import ClassItem from "@components/ClassItem";
import EmptyAnimation from "@components/UI/EmptyAnimation";
import { ClassesProps } from "@types";

interface AvalClassesProps {
    classes: ClassesProps[] | [];
    tutorId: number;
}

const AvalClasses: React.FC<AvalClassesProps> = ({ classes, tutorId }) => {
    return (
        <div className="flex mt-20 flex-col relative w-full justify-center md:justify-start">
            <div className="classes__detail detail__ball1"></div>
            <div className="classes__detail detail__ball2"></div>
            <div className="classes__detail detail__ball3"></div>
            <h3 className="text-black222 dark:text-white text-center md:text-left text-xl md:text-3xl font-bold mt-2 md:mt-4">
                Aulas disponíveis
            </h3>

            <div className="flex flex-col mt-5">
                {!classes || classes.length === 0 ? (
                    <EmptyAnimation />
                ) : (
                    classes.map((cl: ClassesProps) => (
                        <ClassItem
                            key={cl.id}
                            singleClass={cl}
                            extraClasses="bg-gray-100 p-4 my-2"
                            tutorId={tutorId}
                        />
                    ))
                )}
            </div>
        </div>
    );
};
export default AvalClasses;
