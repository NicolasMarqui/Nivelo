import Container from "@components/container";
import OrdersUsers from "@components/DashboardComponents/OrdersUser";
import ShortcutUser from "@components/DashboardComponents/ShotcutUser";
import EmptyAnimation from "@components/UI/EmptyAnimation";
import LoadingAnimation from "@components/UI/LoadingAnimation";
import Title from "@components/UI/Title";
import { createUrqlClient } from "@utils/createUrqlClient";
import { GetServerSideProps, NextPage } from "next";
import { withUrqlClient } from "next-urql";
import { useMeQuery } from "src/generated/graphql";

interface DashbaordProps {}

const Dashbaord: NextPage<DashbaordProps> = (props) => {
    const [{ data, fetching, error }] = useMeQuery();

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
            <div className="relative p-4 bg-gray-50 rounded-3xl ">
                {data && data.me !== undefined ? (
                    <div className="flex flex-col my-1">
                        <h2 className="text-2xl md:text-3xl font-bold text-center md:text-left">
                            Bem vindo
                            <span className="text-primaryOrange ml-1 md:block md:ml-0">
                                {data.me.name}
                            </span>
                        </h2>
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
            <div className="relative p-4 bg-gray-50 rounded-3xl mt-4">
                <div className="flex flex-col my-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-center md:text-left">
                        Seus
                        <span className="text-primaryOrange ml-1 ">
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

// export const getServerSideProps: GetServerSideProps = async (ctx: any) => {
//     const cookie = ctx.req.cookies.qid;

//     if (!cookie) {
//         return {
//             redirect: {
//                 permanent: false,
//                 destination: "/login",
//             },
//         };
//     }

//     return { props: { logged: true, cookie } };
// };

export default withUrqlClient(createUrqlClient)(Dashbaord);
