import { BackButtonWrapper } from "./BackButton.style";
import { PillButton } from "../../styles/helpers";
import { useRouter } from "next/router";

interface BackButtonProps {
    bgColor?: string;
    color?: string;
}

export default function BackButton({ bgColor, color }: BackButtonProps) {
    const router = useRouter();

    return (
        <BackButtonWrapper onClick={() => router.back()}>
            <PillButton bgColor={bgColor ? bgColor : "#fff"}>Voltar</PillButton>
        </BackButtonWrapper>
    );
}
