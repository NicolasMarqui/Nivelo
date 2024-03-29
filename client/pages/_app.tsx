import React from "react";
import { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import Layout from "@components/Layout";
import NProgress from "nprogress";
import { Router, useRouter } from "next/router";
import { Toaster } from "react-hot-toast";
import DashboardLayout from "@components/Layout/DashboardLayout";
import { ModalContainer } from "reoverlay";
import { CookiesProvider } from "react-cookie";
import { ThemeProvider } from "next-themes";

import "tailwindcss/tailwind.css";
import "@styles/global.scss";
import "nprogress/nprogress.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-tabs/style/react-tabs.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "react-input-range/lib/css/index.css";

Router.events.on("routeChangeStart", () => {
    NProgress.start();
    document.querySelector("body").classList.remove("overflow-hidden");
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    const router = useRouter();

    return (
        <ThemeProvider attribute="class" defaultTheme="light">
            <ModalContainer />
            <Toaster position="top-center" />

            {router.pathname.startsWith("/dashboard") ? (
                <CookiesProvider>
                    <DashboardLayout pageProps>
                        <Component {...pageProps} />
                    </DashboardLayout>
                </CookiesProvider>
            ) : (
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            )}
        </ThemeProvider>
    );
}

export default appWithTranslation(MyApp);
