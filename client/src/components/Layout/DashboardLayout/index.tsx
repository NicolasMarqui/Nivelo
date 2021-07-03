import Container from "@components/container";
import Sidebar from "@components/DashboardComponents/SideBar";
import Footer from "@components/Footer";
import Meta from "@components/Meta";
import Navbar from "@components/Navbar";
import EmptyAnimation from "@components/UI/EmptyAnimation";
import LoadingAnimation from "@components/UI/LoadingAnimation";
import { createUrqlClient } from "@utils/createUrqlClient";
import { GetServerSideProps } from "next";
import cookies from "next-cookies";
import { withUrqlClient } from "next-urql";
import { useMeQuery } from "src/generated/graphql";
import { useCookies } from "react-cookie";
import { useEffect } from "react";
import { useRouter } from "next/router";

interface DashboardLayoutProps {
    children?: any;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
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

    const [{ data, fetching, error }] = useMeQuery();

    if (fetching) {
        return <LoadingAnimation />;
    }

    if (error) {
        return <EmptyAnimation />;
    }

    return (
        <div className="dark:bg-darkPrimaryBg">
            <Meta
                title={`Dashboard - ${data && data.me ? data.me.name : ""}`}
                description="Encontre os melhores tutores para te ajudar nessa jornada"
                keywords="home, tutor, javascript, nivelamento, aprender, algoritimos, comprar"
            />
            <Navbar />
            <div className="mt-20 mb-10">
                <Container classes="px-3">
                    <div className="flex md:flex-row flex-col items-start">
                        <div className="flex-none bg-white dark:bg-gray-600 shadow-2xl rounded-2xl p-3 mb-3 md:mb-0 w-full md:w-auto">
                            <Sidebar user={data} />
                        </div>
                        <div className="flex flex-2 bg-white dark:bg-gray-800 rounded-2xl p-3 w-full md:w-auto md:ml-4 flex-col">
                            {children}
                        </div>
                    </div>
                </Container>
            </div>
            <Footer />
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = async (ctx: any) => {
    const cookie = cookies(ctx).qid;

    // if (!cookie || cookie === "null") {
    //     return {
    //         redirect: {
    //             permanent: false,
    //             destination: "/login",
    //         },
    //     };
    // }

    return { props: { logged: true, cookie } };
};

export default withUrqlClient(createUrqlClient)(DashboardLayout);
