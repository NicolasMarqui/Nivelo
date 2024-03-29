import Meta from "@components/Meta";
import LoadingAnimation from "@components/UI/LoadingAnimation";
import { createUrqlClient } from "@utils/createUrqlClient";
import { withUrqlClient } from "next-urql";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useLogoutMutation } from "src/generated/graphql";
import cookieCutter from "cookie-cutter";

const Out: React.FC = () => {
    const router = useRouter();
    const [_, logout] = useLogoutMutation();

    useEffect(() => {
        let timer = window.setInterval(handleLogout, 2000);

        return () => {
            window.clearInterval(timer);
        };
    }, []);

    const handleLogout = async () => {
        const log = await logout();
        cookieCutter.set("tid", "");
        cookieCutter.set("qid", "");
        cookieCutter.set("gASDFW2", "");

        if (log) {
            router.push("/");
        }
    };

    return (
        <div className="h-screen dark:bg-gray-700">
            <Meta
                title="Aguarde..."
                description="Encontre os melhores tutores para te ajudar nessa jornada"
                keywords="home, tutor, javascript, nivelamento, aprender, algoritimos, comprar"
            />

            <LoadingAnimation />
            <h3 className="mt-4 text-xl md:text-3xl font-semibold text-center dark:text-white">
                Aguarde enquanto você está sendo deslogado!
            </h3>

            <p className="mt-4 text-center dark:text-white">
                Você será redirecionado para a página inicial assim que
                completo...
            </p>
        </div>
    );
};
export default withUrqlClient(createUrqlClient)(Out as any);
