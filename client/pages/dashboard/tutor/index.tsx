import { GetServerSideProps, NextPage } from "next";
import BackButton from "../../../components/BackButton";
import { useMeQuery } from "../../../generated/graphql";
// prettier-ignore
import { Title } from "../../../styles/helpers";
// prettier-ignore
import { ColumnGroup, TitleArea } from "../Dashboard.style";

interface AccountProps {
    logged: boolean;
    cookie: string;
}

const Tutor: NextPage<AccountProps> = (props) => {
    const [{ data, fetching }] = useMeQuery();

    return (
        <>
            <ColumnGroup margin="0">
                <TitleArea margin="0 30px">
                    <BackButton bgColor="#8390FA" color="#fff" />
                    <Title fontWeight="400" margin="-2px 0 47px 0">
                        Tutor
                    </Title>
                </TitleArea>
            </ColumnGroup>
        </>
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

    return { props: { logged: true, cookie } };
};

export default Tutor;
