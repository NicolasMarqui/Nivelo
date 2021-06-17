import ImagesLogin from "@components/ImagesLogin";
import Meta from "@components/Meta";
import LoginForm from "@components/UI/Forms/LoginFom";
import { createUrqlClient } from "@utils/createUrqlClient";
import { withUrqlClient } from "next-urql";
import { useRouter } from "next/router";
import Lottie from "react-lottie";
import { motion } from "framer-motion";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Login: React.FC = ({}) => {
    const router = useRouter();
    const WELCOME__ANIMATION = require("../public/animations/welcome.json");

    return (
        <div className="dark:bg-gray-700">
            <Meta
                title="Login"
                description="Encontre os melhores tutores para te ajudar nessa jornada"
                keywords="home, tutor, javascript, nivelamento, aprender, algoritimos, comprar"
            />
            <div className="flex py-20 md:py-0 md:h-screen w-full flex-row overflow-x-hidden">
                <ImagesLogin />
                <div className="flex-1 flex flex-col items-center justify-center max-h-screen pt-4">
                    <div className="absolute top-20  right-0 md:hidden flex flex-col w-full">
                        <Lottie
                            options={{
                                loop: true,
                                autoplay: true,
                                animationData: WELCOME__ANIMATION,
                                rendererSettings: {
                                    preserveAspectRatio: "xMidYMid slice",
                                },
                            }}
                            height={300}
                            width="100%"
                        />
                    </div>

                    <motion.div
                        className="mt-10 w-580 z-20"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        <LoginForm
                            hasRedirect
                            redirectTo={`${
                                router.query.from ? router.query.from : "/"
                            }`}
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale, ["login"])),
    },
});

export default withUrqlClient(createUrqlClient)(Login);
