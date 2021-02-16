import {
    Button,
    Description,
    Overlay,
    PageWrapper,
    Title,
} from "../../styles/helpers";
import { LoginWrapper } from "./Login.style";
import Meta from "../../components/Meta";
import LoginForm from "../../components/LoginForm";
import Image from "next/image";
import { BorderedButton } from "../tutors/Tutors.styles";

// TODO refactor page

export default function Login() {
    return (
        <PageWrapper pTop="0">
            <Meta
                title="Login"
                description="Encontre os melhores tutores para te ajudar nessa jornada"
                keywords="tutor, javascript, nivelamento, aprender, algoritimos, comprar"
            />
            <LoginWrapper>
                <Overlay border="0" opacity={0.8} />
                <div className="login__bg">
                    <Title color="#fff" fontSize="40px" fontWeight="400">
                        Melhore seu conhecimento
                    </Title>
                    <Description size="70" color="#fff">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptate ut earum aperiam error nisi molestiae maiores
                        iure dicta fugit impedit molestias quo officia similique
                        at nobis ex nihil.
                    </Description>

                    <Description size="70" color="#fff">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptate ut earum aperiam error nisi molestiae maiores
                        iure dicta fugit impedit molestias quo officia similique
                        at nobis ex nihil. impedit molestias quo officia
                        similique at nobis ex nihil.
                    </Description>

                    <div className="bg__buttons">
                        <Button>Como functiona?</Button>
                        <BorderedButton>Seja um tutor</BorderedButton>
                    </div>
                </div>
                <div className="login__form">
                    <LoginForm />
                </div>
            </LoginWrapper>
        </PageWrapper>
    );
}
