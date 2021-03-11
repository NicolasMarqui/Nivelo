import { SelectPlatformWrapper } from "./SelectPlatform.style";
import Image from "next/image";

interface SelectPlatformProps {
    platform: {
        id: number;
        name: string;
        icon: string;
    };
    handleSelectedPlatform: (i: any) => any;
    active?: boolean;
}

const SelectPlatform: React.FC<SelectPlatformProps> = ({
    platform,
    handleSelectedPlatform,
    active,
}) => {
    return (
        <SelectPlatformWrapper
            className={`${active ? "active" : ""}`}
            onClick={handleSelectedPlatform}
        >
            <Image src={platform.icon} height={75} width={75} />
            <h3>{platform.name}</h3>
        </SelectPlatformWrapper>
    );
};
export default SelectPlatform;
