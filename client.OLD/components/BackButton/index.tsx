import { BackButtonWrapper } from "./BackButton.style";
import { PillButton } from "../../styles/helpers";
import { useRouter } from "next/router";

interface BackButtonProps {
    bgColor?: string;
    color?: string;
    jContent?: string;
}

export default function BackButton({
    bgColor,
    color,
    jContent,
}: BackButtonProps) {
    const router = useRouter();

    return (
        <BackButtonWrapper
            onClick={() => router.back()}
            color={color}
            jPosition={jContent}
        >
            <PillButton bgColor={bgColor ? bgColor : "#fff"}>Voltar</PillButton>
        </BackButtonWrapper>
    );
}
