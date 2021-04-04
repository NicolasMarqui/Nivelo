import { useState } from "react";
import OrdersTutor from "@components/DashboardComponents/OrdersTutor";
import EmptyAnimation from "@components/UI/EmptyAnimation";
import LoadingAnimation from "@components/UI/LoadingAnimation";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useTutorOrdersAwaitingApprovalQuery } from "src/generated/graphql";
import ReactPaginate from "react-paginate";
import { getTotalPages } from "@utils/getTotalPages";

interface OrdersProps {
    tutorID: number;
}

const Orders: React.FC<OrdersProps> = (props) => {
    const router = useRouter();
    const [page, setPage] = useState(1);
    const [{ data, fetching, error }] = useTutorOrdersAwaitingApprovalQuery({
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

            {data && data.ordersTutorAwaitingApproval !== undefined && (
                <div className="mt-4">
                    {data.ordersTutorAwaitingApproval.length === 0 ||
                    !data.ordersTutorAwaitingApproval ? (
                        <EmptyAnimation />
                    ) : (
                        <>
                            {data.ordersTutorAwaitingApproval
                                .slice((page - 1) * 5, page * 5)
                                .map((ord) => (
                                    <OrdersTutor order={ord} key={ord.id} />
                                ))}

                            <ReactPaginate
                                previousLabel={"Anterior"}
                                nextLabel={"Próximo"}
                                containerClassName={"pagination"}
                                activeClassName={"active"}
                                pageCount={getTotalPages(
                                    data.ordersTutorAwaitingApproval.length,
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
    const cookie = ctx.req.cookies.qid;
    const tutorCookie = ctx.req.cookies.tid;

    if (!cookie) {
        return {
            redirect: {
                permanent: false,
                destination:
                    "/login?message=Você precisa estar logado para acessar essa página",
            },
        };
    }

    if (!tutorCookie || tutorCookie === "") {
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
