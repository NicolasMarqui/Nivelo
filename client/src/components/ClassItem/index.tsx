import { MdSchool } from "react-icons/md";

interface ClassItemProps {}

const ClassItem: React.FC<ClassItemProps> = ({}) => {
    return (
        <div className="w-full flex flex-row items-center justify-between bg-gray-100 rounded-2xl p-4 my-2 cursor-pointer transform hover:scale-105">
            <div className="flex-none">
                <MdSchool size={22} />
            </div>
            <div className="flex-1 mx-6">
                <h5 className="text-lg text-black222">Javascript básico</h5>
                <p className="text-sm text-gray-400">20 aulas dadas</p>
            </div>
            <div className="flex-none justify-self-end">
                <div className="bg-primaryPink p-2 rounded-2xl">
                    <p className="text-base md:text-lg text-white font-bold">
                        R$ 8.00
                    </p>
                </div>
            </div>
        </div>
    );
};
export default ClassItem;
