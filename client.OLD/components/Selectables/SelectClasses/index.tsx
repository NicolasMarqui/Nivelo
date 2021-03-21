import { useState, useEffect } from "react";
// prettier-ignore
import { Description, Pill } from "../../../styles/helpers";
import { getLowestValueArray } from "../../../utils/getLowestValueArray";
import { SelectClassWrapper } from "./SelectClass.style";
import ReactTooltip from "react-tooltip";

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
}: SelectClassesProps) => {
    return (
        <SelectClassWrapper>
            <div
                className={`classes__box ${
                    active ? "classes__active" : "base__classes"
                }`}
                onClick={handleSelectedClasss}
                data-tip={singleClass.description}
            >
                <div className="box__info">
                    <h3>{singleClass.name}</h3>
                    <p>{singleClass.amountTimeTaught} aula(s)</p>
                </div>
                <div className="box__price">
                    <Pill>
                        R${" "}
                        <span>{getLowestValueArray(singleClass.price)}.00</span>
                        {singleClass.price.length > 1 ? "+" : ""}
                    </Pill>
                </div>
                <ReactTooltip multiline effect="solid" />
            </div>
        </SelectClassWrapper>
    );
};
export default SelectClasses;
