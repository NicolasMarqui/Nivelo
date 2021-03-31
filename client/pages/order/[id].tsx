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
import OrdersUserList from "@components/DashboardComponents/OrdersUserList";

interface OrderProps {}

const Order: React.FC<OrderProps> = ({}) => {
    const router = useRouter();
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
                        <p className="mt-2 text-desc text-base text-center md:text-left">
                            O tutor já foi notificado de seu pedido, agora cabe
                            a ele(a) aceitar ou negar a aula. Caso ele negue,
                            seu dinheiro será estornado para sua conta!
                        </p>

                        <div className="shadow-md mt-4 rounded-2xl">
                            {/* <OrdersUserList
                                order={data.orderDetail}
                                isOrderPage
                            /> */}
                        </div>
                    </div>
                </Container>
            </Section>
        </>
    );
};
export default withUrqlClient(createUrqlClient)(Order);
