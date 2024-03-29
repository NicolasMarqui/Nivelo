import OrdersUsers from "@components/DashboardComponents/OrdersUser";
import EmptyAnimation from "@components/UI/EmptyAnimation";
import LoadingAnimation from "@components/UI/LoadingAnimation";
import { createUrqlClient } from "@utils/createUrqlClient";
import { GetServerSideProps, NextPage } from "next";
import { withUrqlClient } from "next-urql";
import { FaCog } from "react-icons/fa";
import { useMeQuery } from "src/generated/graphql";
import Tooltip from "react-tooltip";
import { Reoverlay } from "reoverlay";
import EditUserAccount from "@components/Modals/EditUserAccount";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";
import { useEffect } from "react";

interface DashboardProps {}
const Dashboard: NextPage<DashboardProps> = ({}) => {
    const [cookies] = useCookies();

    useEffect(() => {
        if (!cookies.gASDFW2 || cookies.gASDFW2 === "") {
            router.push("/login");
            return;
        }
    }, []);

    if (!cookies.gASDFW2 || cookies.gASDFW2 === "") {
        return <LoadingAnimation />;
    }

    const router = useRouter();
    const [{ data, fetching, error }] = useMeQuery();

    const openSettings = () =>
        Reoverlay.showModal(EditUserAccount, {
            user: data,
            fetchingData: fetching,
        });

    if (fetching) {
        return <LoadingAnimation />;
    }

    if (error) {
        router.push("/login");
        return (
            <div className="flex-justify-center items-center text-center">
                <EmptyAnimation />
            </div>
        );
    }

    return (
        <div className="dark:bg-gray-700">
            {data && !fetching && data.me !== null && data.me.tutor ? (
                <div className="w-full p-3 bg-indigo-400 flex flex-col md:flex-row items-center justify-between mb-2">
                    <h3 className="text-white text-sm md:text-xl font-semibold">
                        Acesse sua área de tutor!
                    </h3>
                    <div
                        className="p-1.5 bg-white text-black222 flex items-center justify-center mt-2 md:mt-0 cursor-pointer transform hover:scale-105 hover:bg-gray-50"
                        onClick={() => router.push("/dashboard/tutor")}
                    >
                        Acessar
                    </div>
                </div>
            ) : (
                ""
            )}
            <div className="relative p-8 bg-gray-50 dark:bg-gray-600 rounded-3xl shadow-md">
                {data && data.me !== undefined ? (
                    <div className="flex flex-col my-1">
                        <div className="flex flex-col md:flex-row items-center justify-between">
                            <h2 className="text-3xl font-bold text-center md:text-left">
                                Bem vindo(a)
                                <span className="text-primaryOrange ml-1 block md:ml-0">
                                    {data.me.name}
                                </span>
                            </h2>
                            <div
                                className="relative"
                                data-for="settings"
                                data-tip="Editar suas informações"
                            >
                                <FaCog
                                    size={30}
                                    className="mt-5 md:mt-2 cursor-pointer transform hover:scale-105"
                                    onClick={openSettings}
                                />
                                <Tooltip
                                    effect="solid"
                                    place="bottom"
                                    id="settings"
                                />
                            </div>
                        </div>
                        <p className="mt-4 text-base text-desc dark:text-gray-400 md:w-4/5 text-center md:text-left">
                            Bem vindo a sua dashboard!! Aqui você verificar e
                            atualizar o status das suas aulas!
                        </p>

                        {/* <ShortcutUser /> */}
                    </div>
                ) : (
                    <EmptyAnimation />
                )}
            </div>
            <div className="relative p-8 bg-gray-50 dark:bg-gray-600  rounded-3xl mt-6 shadow-md">
                <div className="flex flex-col my-1">
                    <h3 className="text-3xl font-bold text-center md:text-left">
                        Seus
                        <span className="text-primaryOrange ml-1 block md:inline">
                            Pedidos
                        </span>
                    </h3>
                    <p className="mt-4 text-base text-desc dark:text-gray-400 md:w-4/5 text-center md:text-left">
                        Todos os seus pedidos aparecem aqui. Você pode confirmar
                        que teve a aula com o tutor e até deixar um feedback!
                    </p>

                    {data && data.me !== undefined ? (
                        <OrdersUsers userId={data.me.id} />
                    ) : (
                        <LoadingAnimation />
                    )}
                </div>
            </div>
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = async (ctx: any) => {
    // const cookie = ctx.req.headers.cookies.qid || "";
    // Create a cookies instance
    // const cookies = new Cookies(ctx.req, ctx.res);
    // // Get a cookie
    // const cookie = cookies.get("qid");

    // if (!cookie || cookie === "null") {
    //     return {
    //         redirect: {
    //             permanent: false,
    //             destination: "/login",
    //         },
    //     };
    // }

    return {
        props: {
            logged: true,
        },
    };
};

export default withUrqlClient(createUrqlClient)(Dashboard as any);
