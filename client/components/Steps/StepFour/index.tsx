import { useState } from "react";
import ClassItem from "../../ClassItem";
import { StepWrapper, StepButtons, StepPriceWrapper } from "../Steps.style";
import IconButton from "../../IconButton";
import SelectPlatform from "../../Selectables/SelectPlatform";
import { Description } from "../../../styles/helpers";

interface PlatformItems {
    platform: {
        id: number;
        name: string;
        icon: string;
    };
}
interface StepFourProps {
    platforms: PlatformItems[];
    handlePlat?: (i: any) => any;
}

export default function StepFour({ platforms, handlePlat }: StepFourProps) {
    const [selectedPlatform, setSelectedPlatform] = useState({});

    const handleSelected = (cl: any) => {
        setSelectedPlatform(cl);
        handlePlat(cl);
    };

    return (
        <StepWrapper>
            <Description fontSize="17px" color="#696969" txtAlign>
                Essas são as plataformas que o tutor usa para ensinar, caso não
                possua nenhuma das indicadas abaixos, entre em contato com o
                tutor!
            </Description>
            {!platforms || platforms.length === 0 ? (
                <p>Tutor no platform</p>
            ) : (
                <StepPriceWrapper>
                    {platforms.map((p) => (
                        <SelectPlatform
                            key={p.platform.id}
                            platform={p.platform}
                            active={selectedPlatform === p.platform}
                            handleSelectedPlatform={() =>
                                handleSelected(p.platform)
                            }
                        />
                    ))}
                </StepPriceWrapper>
            )}
        </StepWrapper>
    );
}
