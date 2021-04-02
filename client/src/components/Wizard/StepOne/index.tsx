import { useState } from "react";
import { PriceProps } from "@types";
import SelectClasses from "../SelectClasses";
import EmptyAnimation from "@components/UI/EmptyAnimation";

interface StepOneProps {
    totalSteps?: any;
    currentStep?: any;
    handleChange: (i: any) => any;
    classes:
        | [
              {
                  id: number;
                  name: string;
                  description: string;
                  amountTimeTaught: number;
                  price: PriceProps[] | [];
              }
          ]
        | [];
}

const StepOne: React.FC<StepOneProps> = ({ handleChange, classes }) => {
    const [selected, setSelected] = useState({});

    const handleSelected = (cl: any) => {
        setSelected(cl);
        handleChange(cl);
    };

    return (
        <div className="h-full overflow-x-hidden overflow-y-auto md:w-7/12 mx-auto mt-3">
            {!classes || classes.length === 0 ? (
                <EmptyAnimation />
            ) : (
                classes.map((cl) => {
                    return (
                        <SelectClasses
                            key={cl.id}
                            singleClass={cl}
                            active={cl === selected}
                            handleSelectedClasss={() => handleSelected(cl)}
                        />
                    );
                })
            )}
        </div>
    );
};
export default StepOne;
