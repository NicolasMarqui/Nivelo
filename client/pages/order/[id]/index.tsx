import { useRouter } from "next/router";
import { PageWrapper } from "../../../styles/helpers";

interface OrderProps {}

const Order: React.FC<OrderProps> = ({}) => {
    const router = useRouter();

    return (
        <PageWrapper pTop="113px">
            <h2>{router.query.id}</h2>
        </PageWrapper>
    );
};
export default Order;
