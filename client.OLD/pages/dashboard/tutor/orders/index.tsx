import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import TutorOrdersList from "../../../../components/DashboardComponents/TutorOrdersList";
import LoadingAnimation from "../../../../components/LoadingAnimation";
import { useTutorOrdersAwaitingApprovalQuery } from "../../../../generated/graphql";
import { Description, Title } from "../../../../styles/helpers";
import {
    ColumnGroup,
    TitleArea,
    TutorsOrdersWrapper,
} from "../../Dashboard.style";

interface OrdersProps {
    tutorID: number;
}

const Orders: NextPage<OrdersProps> = (props) => {
    const router = useRouter();
    const [{ data, fetching, error }] = useTutorOrdersAwaitingApprovalQuery({
        variables: { id: props.tutorID },
    });

    if (fetching) {
        return <LoadingAnimation />;
    }

    if (error) router.push("/dashboard/tutor");

    return (
        <ColumnGroup margin="0">
            <TitleArea>
                <Title fontWeight="400">Tutor - Seus Pedidos</Title>
                <Description>
                    Aqui você pode aceitar ou recusar pedidos de aulas feitos
                    por alunos!
                </Description>
            </TitleArea>
            <TutorsOrdersWrapper>
                {data.ordersTutorAwaitingApproval.length === 0 ||
                !data.ordersTutorAwaitingApproval ? (
                    <h3>Você não possui nenhum pedido para aprovar!</h3>
                ) : (
                    data.ordersTutorAwaitingApproval.map((ord) => (
                        <TutorOrdersList order={ord} key={ord.id} />
                    ))
                )}
            </TutorsOrdersWrapper>
        </ColumnGroup>
    );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
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
