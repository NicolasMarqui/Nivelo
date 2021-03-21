import ClassItem from "@components/ClassItem";

interface AvalClassesProps {}

const AvalClasses: React.FC<AvalClassesProps> = ({}) => {
    return (
        <div className="flex mt-20 flex-col relative w-full justify-center md:justify-start">
            <div className="classes__detail detail__ball1"></div>
            <div className="classes__detail detail__ball2"></div>
            <div className="classes__detail detail__ball3"></div>
            <h3 className="text-black222 text-center md:text-left text-xl md:text-3xl font-bold mt-2 md:mt-4">
                Aulas disponíveis
            </h3>

            <div className="flex flex-col mt-5">
                <ClassItem />
                <ClassItem />
                <ClassItem />
            </div>
        </div>
    );
};
export default AvalClasses;
