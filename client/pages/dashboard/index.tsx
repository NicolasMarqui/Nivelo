import OrdersUsers from "@components/DashboardComponents/OrdersUser";
import ShortcutUser from "@components/DashboardComponents/ShotcutUser";
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

interface DashboardProps {}

const Dashboard: NextPage<DashboardProps> = (props) => {
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
        return (
            <div className="flex-justify-center items-center text-center">
                <EmptyAnimation />
            </div>
        );
    }

    return (
        <>
            <div className="relative p-8 bg-gray-50 rounded-3xl shadow-md">
                {data && data.me !== undefined ? (
                    <div className="flex flex-col my-1">
                        <div className="flex flex-col md:flex-row items-center justify-between">
                            <h2 className="text-3xl font-bold text-center md:text-left">
                                Bem vindo
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
                        <p className="mt-4 text-base text-desc md:w-4/5 text-center md:text-left">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Consequatur blanditiis velit exercitationem
                            sapiente. Cupiditate, dolore dolor vero laudantium
                            harum molestias?
                        </p>

                        <ShortcutUser />
                    </div>
                ) : (
                    <EmptyAnimation />
                )}
            </div>
            <div className="relative p-8 bg-gray-50 rounded-3xl mt-6 shadow-md">
                <div className="flex flex-col my-1">
                    <h3 className="text-3xl font-bold text-center md:text-left">
                        Seus
                        <span className="text-primaryOrange ml-1 block md:inline">
                            Pedidos
                        </span>
                    </h3>
                    <p className="mt-4 text-base text-desc md:w-4/5 text-center md:text-left">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Consequatur blanditiis velit exercitationem
                        sapiente. Cupiditate, dolore dolor vero laudantium harum
                        molestias?
                    </p>

                    {data && data.me !== undefined ? (
                        <OrdersUsers userId={data.me.id} />
                    ) : (
                        <LoadingAnimation />
                    )}
                </div>
            </div>
        </>
    );
};

export const getServerSideProps: GetServerSideProps = async (ctx: any) => {
    const cookie = ctx.req.cookies.qid;

    if (!cookie) {
        return {
            redirect: {
                permanent: false,
                destination: "/login",
            },
        };
    }

    return { props: { logged: true, cookie } };
};

export default withUrqlClient(createUrqlClient)(Dashboard);
