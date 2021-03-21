import { PageWrapper } from "../../styles/helpers";
import { LoginSignupWrapper } from "../login/Login.style";
import Meta from "../../components/Meta";
import SignupForm from "../../components/SignupForm";
import { createUrqlClient } from "../../utils/createUrqlClient";
import { withUrqlClient } from "next-urql";

// TODO refactor page

const Signup = () => {
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
                    <SignupForm />
                </div>
            </LoginSignupWrapper>
        </PageWrapper>
    );
};

export default withUrqlClient(createUrqlClient)(Signup);
