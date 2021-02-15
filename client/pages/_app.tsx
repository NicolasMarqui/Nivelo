import "../styles/_app.css";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "../styles/globals";
import Layout from "../components/Layout";

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
