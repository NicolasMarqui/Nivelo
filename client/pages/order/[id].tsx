import Container from "@components/container";
import Meta from "@components/Meta";
import EmptyAnimation from "@components/UI/EmptyAnimation";
import LoadingAnimation from "@components/UI/LoadingAnimation";
import Section from "@components/UI/Section";
import { useRouter } from "next/router";
import { useOrderDetailQuery } from "src/generated/graphql";
import { FcApproval } from "react-icons/fc";
import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "@utils/createUrqlClient";
import { useState } from "react";

interface OrderProps {}

const Order: React.FC<OrderProps> = ({}) => {
    const router = useRouter();
    const [openChave, setOpenChave] = useState(false);
    const [{ data, fetching, error }] = useOrderDetailQuery({
        variables: { id: router.query.id as string },
    });

    if (fetching) {
        return <LoadingAnimation />;
    }

    if (error) {
        return <EmptyAnimation />;
    }

    return (
        <>
            <Meta
                title={`Order - ${router.query.id}`}
                description="Encontre os melhores tutores para te ajudar nessa jornada"
                keywords="home, tutor, javascript, nivelamento, aprender, algoritimos, comprar"
            />
            <Section>
                <Container classes="px-4">
                    <div className="mt-5 flex flex-2 flex-col">
                        <div className="flex flex-col md:flex-row items-center md:items-start">
                            <FcApproval size={50} className="md:mr-3" />
                            <h3 className="text-4xl md:text-6xl font-bold text-center md:text-left">
                                Pedido concluido
                            </h3>
                        </div>

                        <p className="mt-10 text-desc text-base text-center md:text-left">
                            Seu pedido foi feito com sucesso.
                        </p>
                        {data.orderDetail.classPrice !== "00.00" && (
                            <p className="mt-2 text-desc text-base text-center md:text-left">
                                O tutor já foi notificado de seu pedido, agora
                                você tem acesso a chave PIX do tutor, faça o
                                pagamento no valor de R$
                                {data.orderDetail.classPrice} para ter acesso a
                                aula
                            </p>
                        )}

                        {data.orderDetail.classPrice !== "00.00" && (
                            <>
                                <div
                                    className="shadow-md mt-6 rounded-2xl bg-primaryOrange p-2 md:w-2/5 lg:w-1/5 text-white text-center font-bold cursor-pointer hover:bg-lightOrange"
                                    onClick={() => setOpenChave(!openChave)}
                                >
                                    Ver chave PIX do tutor
                                </div>
                                {openChave && (
                                    <div className="my-6 p-4 shadow-lg bg-gray-50 transform transition-all ease-linear rounded-xl">
                                        <h4 className="text-lg">
                                            Chave PIX de{" "}
                                            {data.orderDetail.classes.tutor.user
                                                .name || "-"}
                                        </h4>

                                        <p className="py-2 text-primaryOrange w-auto font-bold text-xl mt-2">
                                            {data.orderDetail.classes.tutor
                                                .chavePix || "-"}
                                        </p>
                                    </div>
                                )}
                            </>
                        )}

                        {data.orderDetail.classPrice === "00.00" && (
                            <div
                                className="shadow-md mt-6 rounded-2xl bg-primaryOrange p-2 md:w-2/5 lg:w-1/5 text-white text-center font-bold cursor-pointer hover:bg-lightOrange"
                                onClick={() =>
                                    router.push("/dashboard#userOrders")
                                }
                            >
                                Ir para seus pedidos
                            </div>
                        )}
                    </div>
                </Container>
            </Section>
        </>
    );
};
export default withUrqlClient(createUrqlClient)(Order);
