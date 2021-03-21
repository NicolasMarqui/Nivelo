import { GetServerSideProps, NextPage } from "next";
import BackButton from "../../../components/BackButton";
import AccountForm from "../../../components/DashboardComponents/AccountForm";
import { useMeQuery } from "../../../generated/graphql";
// prettier-ignore
import { Title } from "../../../styles/helpers";
// prettier-ignore
import { ColumnGroup, TitleArea } from "../Dashboard.style";

interface AccountProps {
    logged: boolean;
    cookie: string;
}

const Account: NextPage<AccountProps> = (props) => {
    const [{ data, fetching }] = useMeQuery();

    return (
        <>
            <ColumnGroup margin="0">
                <TitleArea margin="0 30px">
                    <BackButton bgColor="#8390FA" color="#fff" />
                    {/* <Breadcumb data={dashBoardAccountBread} /> */}
                    <Title fontWeight="400" margin="-2px 0 47px 0">
                        Editar sua conta
                    </Title>
                </TitleArea>
                <AccountForm user={data.me} />
            </ColumnGroup>
        </>
    );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const cookie = ctx.req.cookies.qid;

    if (!cookie) {
        return {
            redirect: {
                permanent: false,
                destination: "/login",
            },
        };
    }

    return { props: { logged: true, cookie } };
};

export default Account;
