import { PageWrapper } from "../../styles/helpers";
import { LoginSignupWrapper } from "./Login.style";
import Meta from "../../components/Meta";
import LoginForm from "../../components/LoginForm";
import { createUrqlClient } from "../../utils/createUrqlClient";
import { withUrqlClient } from "next-urql";

const Login = () => {
    return (
        <PageWrapper pTop="0">
            <Meta
                title="Login"
                description="Encontre os melhores tutores para te ajudar nessa jornada"
                keywords="tutor, javascript, nivelamento, aprender, algoritimos, comprar"
            />
            <LoginSignupWrapper>
                <div className="wrapper__detail">
                    <div className="detail__bg"></div>
                </div>
                <div className="wrapper__form">
                    <LoginForm />
                </div>
            </LoginSignupWrapper>
        </PageWrapper>
    );
};

export default withUrqlClient(createUrqlClient)(Login);
