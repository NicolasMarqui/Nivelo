import BecomeForm from "../../components/BecomeTutorComponents/BecomeForm";
import Meta from "../../components/Meta";
import { useMeQuery } from "../../generated/graphql";
// prettier-ignore
import { AnimationWrapper, Description, PageWrapper, Title } from "../../styles/helpers";
import { TitleArea } from "../dashboard/Dashboard.style";
// prettier-ignore
import { BecomeTutorWrapper, BecomeTutorBg, TutorLoginForm,} from "./becomeTutor.style";
import Lottie from "react-lottie";
import LoginForm from "../../components/LoginForm";

const BecomeTutor: React.FC = () => {
    const [{ data, fetching }] = useMeQuery();
    const LOADING__ANIMATION = require("../../public/assets/animations/loading.json");

    return (
        <PageWrapper pTop="113px">
            <Meta
                title="Se torne um tutor"
                description="Encontre os melhores tutores para te ajudar nessa jornada"
                keywords="tutor, javascript, nivelamento, aprender, algoritimos, comprar"
            />
            <BecomeTutorBg />
            <BecomeTutorWrapper>
                <TitleArea>
                    <Title fontWeight="400">
                        Se torne um tutor <span>Nivelo</span>
                    </Title>
                    <Description marginTop={20} color="#b1b1b1">
                        Venha fazer parte da nossa comunidade!
                    </Description>
                </TitleArea>
                {fetching ? (
                    <AnimationWrapper>
                        <Lottie
                            options={{
                                loop: true,
                                animationData: LOADING__ANIMATION,
                            }}
                            height={150}
                            width={150}
                        />
                    </AnimationWrapper>
                ) : !data || data.me === null || !data.me ? (
                    <TutorLoginForm>
                        <LoginForm
                            hasTitle={false}
                            formWidth="100%"
                            hasAditionalText={false}
                            hasRedirect={false}
                        />
                    </TutorLoginForm>
                ) : (
                    <BecomeForm />
                )}
            </BecomeTutorWrapper>
        </PageWrapper>
    );
};
export default BecomeTutor;
