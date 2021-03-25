import Meta from "@components/Meta";
import { useRouter } from "next/router";
import Lottie from "react-lottie";

interface FourOFourProps {}

const FourOFour: React.FC<FourOFourProps> = ({}) => {
    const router = useRouter();
    const NOTFOUND__ANIMATION = require("../public/animations/not_found.json");

    return (
        <>
            <Meta
                title="Essa página não existe - 404"
                description="Encontre os melhores tutores para te ajudar nessa jornada"
                keywords="home, tutor, javascript, nivelamento, aprender, algoritimos, comprar"
            />
            <div className="h-screen flex flex-col items-center overflow-hidden">
                <div className="-mt-24">
                    <Lottie
                        options={{
                            loop: true,
                            animationData: NOTFOUND__ANIMATION,
                        }}
                        height={500}
                        width={500}
                    />
                </div>
                <h2 className="-mt-14 text-5xl md:text-8xl font-bold">Ops</h2>
                <h3 className="mt-4 text-xl md:text-3xl font-semibold text-center">
                    A página que você procura não existe!
                </h3>

                <p className="mt-4">
                    Utilize o menu superior ou vá para a
                    <span
                        onClick={() => router.push("/")}
                        className="block md:inline py-2 px-5 bg-primaryOrange text-white font-bold text-xl md:ml-3 mt-3 md:mt-0 text-center hover:bg-lightOrange cursor-pointer"
                    >
                        Página Inicial
                    </span>
                </p>
            </div>
        </>
    );
};
export default FourOFour;
