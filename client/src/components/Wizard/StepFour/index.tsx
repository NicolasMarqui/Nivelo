import { useState } from "react";
import SelectPlatform from "../SelectPlatform";

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

const StepFour: React.FC<StepFourProps> = ({ platforms, handlePlat }) => {
    const [selectedPlatform, setSelectedPlatform] = useState({});

    const handleSelected = (cl: any) => {
        setSelectedPlatform(cl);
        handlePlat(cl);
    };

    return (
        <div className="h-full overflow-x-hidden overflow-y-auto md:w-7/12 mx-auto mt-3">
            <p className="text-desc text-center">
                Essas são as plataformas que o tutor usa para ensinar, caso não
                possua nenhuma das indicadas abaixos, entre em contato com o
                tutor!
            </p>

            {!platforms || platforms.length === 0 ? (
                <p>Tutor no platform</p>
            ) : (
                <div className="mt-3 flex justify-center">
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
                </div>
            )}
        </div>
    );
};
export default StepFour;
