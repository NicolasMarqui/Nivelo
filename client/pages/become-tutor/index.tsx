import LoginForm from "../../components/LoginForm";
import Meta from "../../components/Meta";
import { useMeQuery } from "../../generated/graphql";
// prettier-ignore
import { AnimationWrapper, Button, Description, Flex, PageWrapper, Title } from "../../styles/helpers";
import { TitleArea } from "../dashboard/Dashboard.style";
// prettier-ignore
import { BecomeTutorCTA, BecomeTutorWrapper } from "./becomeTutor.style";
import Lottie from "react-lottie";
import { Reoverlay } from "reoverlay";
import ConfirmTutor from "../../components/Modals/ConfirmTutor";

const BecomeTutor: React.FC = () => {
    const [{ data, fetching }] = useMeQuery();
    const LOADING__ANIMATION = require("../../public/assets/animations/loading.json");

    const openCheckModal = () =>
        Reoverlay.showModal(ConfirmTutor, {
            user: data.me,
        });

    return (
        <PageWrapper pTop="0">
            <Meta
                title="Se torne um tutor"
                description="Encontre os melhores tutores para te ajudar nessa jornada"
                keywords="tutor, javascript, nivelamento, aprender, algoritimos, comprar"
            />
            <BecomeTutorWrapper>
                <Flex size={2} className="flex__bg">
                    image
                </Flex>
                <Flex size={1}>
                    <BecomeTutorCTA>
                        <TitleArea>
                            <Title fontWeight="400" fontSize="40px">
                                Se torne um tutor <span>Nivelo</span>
                            </Title>
                            <Description marginTop={20} color="#B1B1B1">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam
                            </Description>
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
                            ) : // prettier-ignore
                            !data || !data.me || data.me === undefined || data.me === null ? (
                                <LoginForm
                                    formWidth="100%"
                                    hasRedirect={false}
                                    hasTitle={false}
                                    hasAditionalText={false}
                                />
                            ) : (
                                <Button
                                    bgColor="#FF4338"
                                    color="#fff"
                                    bold
                                    margin="40px 0 10px"
                                    onClick={openCheckModal}
                                >
                                    EMBARCAR NESSA JORNADA
                                </Button>
                            )}
                        </TitleArea>
                    </BecomeTutorCTA>
                </Flex>
            </BecomeTutorWrapper>
        </PageWrapper>
    );
};
export default BecomeTutor;
