import "../styles/_app.css";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "../styles/globals";
import Layout from "../components/Layout";
import { Provider, createClient } from "urql";

function MyApp({ Component, pageProps }) {
    const client = createClient({
        url: "http://localhost:4000/graphql",
        fetchOptions: {
            credentials: "include",
        },
    });

    return (
        <>
            <GlobalStyle />
            <Provider value={client}>
                <ThemeProvider theme={theme}>
                    <Layout>
                        <div className="body__overlay"></div>
                        <Component {...pageProps} />
                    </Layout>
                </ThemeProvider>
            </Provider>
        </>
    );
}

export default MyApp;
