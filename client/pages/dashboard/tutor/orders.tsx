import { useState } from "react";
import OrdersTutor from "@components/DashboardComponents/OrdersTutor";
import EmptyAnimation from "@components/UI/EmptyAnimation";
import LoadingAnimation from "@components/UI/LoadingAnimation";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useTutorOrdersQuery } from "src/generated/graphql";
import ReactPaginate from "react-paginate";
import { getTotalPages } from "@utils/getTotalPages";
import cookies from "next-cookies";

interface OrdersProps {
    tutorID: number;
}

const Orders: React.FC<OrdersProps> = (props) => {
    const router = useRouter();
    const [page, setPage] = useState(1);
    const [showOnlyAwaiting, setShowOnlyAwaiting] = useState(false);
    const [showOnlyAwaitingApproval, setShowOnlyAwaitingApproval] = useState(
        false
    );
    const [{ data, fetching, error }] = useTutorOrdersQuery({
        variables: { id: props.tutorID },
    });

    if (fetching) {
        return <LoadingAnimation />;
    }

    if (error) router.push("/dashboard/tutor");

    const handlePagination = (e: number) => {
        setPage(e);
    };

    return (
        <div className="relative p-8 bg-gray-50 rounded-3xl shadow-md">
            <h2 className="text-3xl md:text-4xl font-bold text-center md:text-left">
                Seus
                <span className="text-primaryOrange ml-2">Pedidos</span>
            </h2>

            <p className="mt-4 text-base text-desc md:w-4/5 text-center md:text-left">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Consequatur blanditiis velit exercitationem sapiente.
                Cupiditate, dolore dolor vero laudantium harum molestias?
            </p>

            <div className="my-4">
                <label className="inline-flex items-center mt-3 cursor-pointer">
                    <input
                        type="checkbox"
                        className="form-radio h-5 w-5 text-gray-600"
                        name="categories"
                        checked={showOnlyAwaiting}
                        onChange={(e) => setShowOnlyAwaiting(!showOnlyAwaiting)}
                    />
                    <span className="ml-2 text-gray-400">
                        Mostrar apenas pedidos esperando confirmação de
                        pagamento
                    </span>
                </label>
            </div>

            <div className="my-1">
                <label className="inline-flex items-center mt-3 cursor-pointer">
                    <input
                        type="checkbox"
                        className="form-radio h-5 w-5 text-gray-600"
                        name="categories"
                        checked={showOnlyAwaitingApproval}
                        onChange={(e) =>
                            setShowOnlyAwaitingApproval(
                                !showOnlyAwaitingApproval
                            )
                        }
                    />
                    <span className="ml-2 text-gray-400">
                        Mostrar apenas pedidos esperando confirmação de aula
                        finalizada
                    </span>
                </label>
            </div>

            {data && data.getTutorOrders !== undefined && (
                <div className="mt-4">
                    {data.getTutorOrders.length === 0 ||
                    !data.getTutorOrders ? (
                        <EmptyAnimation />
                    ) : (
                        <>
                            {data.getTutorOrders
                                .filter((o) =>
                                    showOnlyAwaiting
                                        ? !o.isOrderAproved
                                        : showOnlyAwaitingApproval
                                        ? !o.hasTutorConfirmedClassDone
                                        : o
                                )
                                .slice((page - 1) * 5, page * 5)
                                .map((ord) =>
                                    ord ? (
                                        <OrdersTutor order={ord} key={ord.id} />
                                    ) : (
                                        <EmptyAnimation />
                                    )
                                )}

                            <ReactPaginate
                                previousLabel={"Anterior"}
                                nextLabel={"Próximo"}
                                containerClassName={"pagination"}
                                activeClassName={"active"}
                                pageCount={getTotalPages(
                                    data.getTutorOrders.filter((o) =>
                                        showOnlyAwaiting
                                            ? !o.isOrderAproved
                                            : showOnlyAwaitingApproval
                                            ? !o.hasTutorConfirmedClassDone
                                            : o
                                    ).length,
                                    5
                                )}
                                marginPagesDisplayed={2}
                                pageRangeDisplayed={5}
                                onPageChange={(e) =>
                                    handlePagination(
                                        e.selected === 0 ? 1 : e.selected + 1
                                    )
                                }
                            />
                        </>
                    )}
                </div>
            )}
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = async (ctx: any) => {
    const cookie = cookies(ctx).qid;
    const tutorCookie = cookies(ctx).tid;

    if (!cookie || cookie === "null") {
        return {
            redirect: {
                permanent: false,
                destination:
                    "/login?message=Você precisa estar logado para acessar essa página",
            },
        };
    }

    if (!tutorCookie || tutorCookie === "" || tutorCookie === "null") {
        return {
            redirect: {
                permanent: false,
                destination: "/dashboard?message=Acesso negado",
            },
        };
    }

    return { props: { tutorID: Number(tutorCookie) } };
};

export default Orders;
