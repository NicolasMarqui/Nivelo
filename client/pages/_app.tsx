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
import { ModalContainer, Reoverlay } from "reoverlay";
import { Toaster } from "react-hot-toast";

Router.events.on("routeChangeStart", () => {
    NProgress.start();
    Reoverlay.hideModal();
});
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

            <ModalContainer />
            <Toaster position="top-center" />

            {/* Side Pages */}

            {router.query.class && (
                <Side
                    isOpen={!!router.query.class}
                    left
                    header={{}}
                    onClickClose={() => router.back()}
                    ignoreCloseOutside={true}
                    width="500px"
                >
                    <ClassesInfo
                        classId={router.query.class as string}
                        pageProps={{}}
                    />
                </Side>
            )}
        </>
    );
}

export default MyApp;
