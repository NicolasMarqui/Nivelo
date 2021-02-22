import { useState, useEffect } from "react";
// prettier-ignore
import { Description, Pill } from "../../../styles/helpers";
import { getLowestValueArray } from "../../../utils/getLowestValueArray";
import { SelectClassWrapper } from "./SelectClass.style";

interface ClassInside {
    id: number;
    name: string;
    description: string;
    amountTimeTaught: number;
    price: any | null;
}

interface SelectClassesProps {
    singleClass: ClassInside;
    handleSelectedClasss: any;
}

const SelectClasses: React.FC<SelectClassesProps> = ({
    singleClass,
    handleSelectedClasss,
}: SelectClassesProps) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [hasClass, setHasClass] = useState(false);

    const handleClassClick = () => {
        handleSelectedClasss({
            id: singleClass.id,
            name: singleClass.name,
        });

        setHasClass(!hasClass);
    };

    useEffect(() => {
        console.log(selectedIndex);
    }, [selectedIndex]);

    return (
        <SelectClassWrapper>
            <div
                className={`classes__box ${
                    hasClass ? "classes__active" : "base__classes"
                }`}
                onClick={handleClassClick}
            >
                <div className="box__info">
                    <h3>{singleClass.name}</h3>
                    <p>{singleClass.amountTimeTaught} aula(s)</p>
                </div>
                <div className="box__price">
                    <Pill>
                        R${getLowestValueArray(singleClass.price)}
                        {singleClass.price.length > 1 ? "+" : ""}
                    </Pill>
                </div>
            </div>
        </SelectClassWrapper>
    );
};
export default SelectClasses;
