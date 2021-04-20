import ImagesLogin from "@components/ImagesLogin";
import Meta from "@components/Meta";
import SignupForm from "@components/SignupForm";
import Title from "@components/UI/Title";
import { createUrqlClient } from "@utils/createUrqlClient";
import { withUrqlClient } from "next-urql";
import Lottie from "react-lottie";
import { motion } from "framer-motion";

const Signup: React.FC = ({}) => {
    const WELCOME__ANIMATION = require("../public/animations/welcome.json");

    return (
        <>
            <Meta
                title="Criar conta"
                description="Encontre os melhores tutores para te ajudar nessa jornada"
                keywords="home, tutor, javascript, nivelamento, aprender, algoritimos, comprar"
            />
            <div className="flex h-screen w-full flex-row">
                <ImagesLogin classes="order-2" />
                <div className="order-1 flex-1 flex flex-col items-center justify-center px-8 max-h-screen pt-4">
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
                        className="mt-5 w-580 z-20"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        <SignupForm />
                    </motion.div>
                </div>
            </div>
        </>
    );
};
export default withUrqlClient(createUrqlClient)(Signup as any);
