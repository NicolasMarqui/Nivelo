import { useRouter } from "next/router";
import LoadingAnimation from "../../../components/LoadingAnimation";
import Meta from "../../../components/Meta";
import Details from "../../../components/OrderComponent/Details";
import { useOrderDetailQuery } from "../../../generated/graphql";
import { Container, Flex, PageWrapper } from "../../../styles/helpers";
import { OrderDetails, OrderPrice } from "../Order.style";

interface OrderProps {}

const Order: React.FC<OrderProps> = ({}) => {
    const router = useRouter();
    const [{ data, fetching, error }] = useOrderDetailQuery({
        variables: { id: router.query.id as string },
    });

    if (fetching) {
        return <LoadingAnimation />;
    }

    if (error) router.push("/");

    return (
        <PageWrapper pTop="160px">
            <Meta
                title={`Checkout - ${router.query.id}`}
                description="Encontre os melhores tutores para te ajudar nessa jornada"
                keywords="tutor, javascript, nivelamento, aprender, algoritimos, comprar"
            />
            <Container flex>
                <Flex size={3} mr={20} justifyCenter align="center">
                    <Details orderDetail={data.orderDetail} />
                </Flex>
                <Flex size={1}>
                    <OrderPrice>15.00</OrderPrice>
                </Flex>
            </Container>
        </PageWrapper>
    );
};
export default Order;
