import React from "react";
import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import "@styles/global.scss";
import "nprogress/nprogress.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-tabs/style/react-tabs.css";
import { appWithTranslation } from "@i18n";
import Layout from "@components/Layout";
import NProgress from "nprogress";
import { Router, useRouter } from "next/router";
import { Toaster } from "react-hot-toast";
import DashboardLayout from "@components/Layout/DashboardLayout";

Router.events.on("routeChangeStart", () => {
    NProgress.start();
    document.querySelector("body").classList.remove("overflow-hidden");
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    const router = useRouter();

    return (
        <>
            <Toaster position="top-center" />
            {router.pathname.startsWith("/dashboard") ? (
                <DashboardLayout pageProps>
                    <Component {...pageProps} />
                </DashboardLayout>
            ) : (
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            )}
        </>
    );
}

export default appWithTranslation(MyApp);
