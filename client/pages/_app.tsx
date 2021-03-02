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
import DashboardLayout from "../components/Layout/DashboardLayout";

Router.events.on("routeChangeStart", () => {
    NProgress.start();
    if (document.querySelector(".reOverlay").hasChildNodes()) {
        Reoverlay.hideAll();
    }
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
    const router = useRouter();
    return (
        <>
            <GlobalStyle />
            <ModalContainer />
            <Toaster position="top-center" />
            <ThemeProvider theme={theme}>
                {router.pathname.startsWith("/dashboard") ? (
                    // @ts-ignore
                    <DashboardLayout>
                        <Component {...pageProps} />
                    </DashboardLayout>
                ) : (
                    // @ts-ignore
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                )}
            </ThemeProvider>

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
