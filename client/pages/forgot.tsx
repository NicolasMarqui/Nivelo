import Meta from "@components/Meta";
import Lottie from "react-lottie";

const Forgot: React.FC = ({}) => {
    const FORGOT__ANIMATION = require("../public/animations/forgot.json");

    return (
        <>
            <Meta
                title="Esqueceu senha"
                description="Encontre os melhores tutores para te ajudar nessa jornada"
                keywords="home, tutor, javascript, nivelamento, aprender, algoritimos, comprar"
            />

            <div className="relative py-56 flex justify-center items-center overflow-hidden">
                <div className="absolute top-0 left-0">
                    <Lottie
                        options={{
                            loop: true,
                            autoplay: true,
                            animationData: FORGOT__ANIMATION,
                            rendererSettings: {
                                preserveAspectRatio: "xMidYMid slice",
                            },
                        }}
                        height={300}
                        width={300}
                        style={{ cursor: "initial" }}
                    />
                </div>
                <p>HELLO</p>
            </div>
        </>
    );
};
export default Forgot;
