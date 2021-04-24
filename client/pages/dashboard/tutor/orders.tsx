import { useEffect, useState } from "react";
import OrdersTutor from "@components/DashboardComponents/OrdersTutor";
import EmptyAnimation from "@components/UI/EmptyAnimation";
import LoadingAnimation from "@components/UI/LoadingAnimation";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useTutorOrdersQuery } from "src/generated/graphql";
import ReactPaginate from "react-paginate";
import { getTotalPages } from "@utils/getTotalPages";
import cookies from "next-cookies";
import { useCookies } from "react-cookie";

interface OrdersProps {
    tutorID: number;
}

const Orders: React.FC<OrdersProps> = (props) => {
    const router = useRouter();
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

            <div className="mt-3">
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

            <div className="relative">
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
