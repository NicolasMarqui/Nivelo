import { BackButtonWrapper } from "./BackButton.style";
import { PillButton } from "../../styles/helpers";
import { useRouter } from "next/router";

export default function BackButton() {
    const router = useRouter();

    return (
        <BackButtonWrapper onClick={() => router.back()}>
            <PillButton bgColor="#fff">Voltar</PillButton>
        </BackButtonWrapper>
    );
}
