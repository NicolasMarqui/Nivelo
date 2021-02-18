import "../styles/_app.css";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "../styles/globals";
import Layout from "../components/Layout";
import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import Side from "../components/Side";
import { useRouter } from "next/router";
import ClassesInfo from "../components/ClassesInfo";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
    const router = useRouter();
    return (
        <>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                {/* @ts-ignore */}
                <Layout>
                    <div className="body__overlay"></div>
                    <Component {...pageProps} />
                </Layout>
            </ThemeProvider>

            {/* Side Pages */}

            <Side
                isOpen={!!router.query.class}
                left
                header={{}}
                onClickClose={() => router.back()}
                ignoreCloseOutside={true}
            >
                <ClassesInfo
                    classId={router.query.class as string}
                    pageProps={{}}
                />
                <p>{parseInt(router.query.class as string)}</p>
            </Side>
        </>
    );
}

export default MyApp;
