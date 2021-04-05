import { lowestPriceClasses } from "@utils/lowestPriceClasses";
import Tooltip from "react-tooltip";

interface ClassInside {
    id: number;
    name: string;
    description: string;
    amountTimeTaught: number;
    price: any | null;
}

interface SelectClassesProps {
    singleClass: ClassInside;
    handleSelectedClasss: () => any;
    active?: boolean;
}

const SelectClasses: React.FC<SelectClassesProps> = ({
    singleClass,
    handleSelectedClasss,
    active,
}) => {
    return (
        <div
            className={`flex items-center justify-between cursor-pointer shadow-md hover:bg-lightGreen rounded-2xl bg-gray-50 p-5 my-2 ${
                active ? "bg-primaryGreen" : ""
            }`}
            onClick={handleSelectedClasss}
            data-tip={singleClass.description}
        >
            <div className="flex-none">
                <h3 className={`${active ? "text-white" : ""}`}>
                    {singleClass.name}
                </h3>
                <p className={`${active ? "text-white" : ""} text-sm `}>
                    {singleClass.amountTimeTaught} aula(s)
                </p>
            </div>
            <div className="flex-none">
                <div className="bg-primaryPink p-2 rounded-2xl">
                    {singleClass && singleClass.price && (
                        <p className="text-base md:text-lg text-white font-bold">
                            R$ {lowestPriceClasses(singleClass.price)}
                            <span>
                                {singleClass.price.length > 1 ? "+" : ""}
                            </span>
                        </p>
                    )}
                </div>
            </div>
            <Tooltip multiline effect="solid" />
        </div>
    );
};
export default SelectClasses;
