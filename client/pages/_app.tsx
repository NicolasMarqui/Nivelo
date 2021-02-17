import "../styles/_app.css";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "../styles/globals";
import Layout from "../components/Layout";
import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
    return (
        <>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <Layout>
                    <div className="body__overlay"></div>
                    <Component {...pageProps} />
                </Layout>
            </ThemeProvider>
        </>
    );
}

export default MyApp;
