import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "../../utils/createUrqlClient";
import Footer from "../Footer";
import Navbar from "../Navbar";

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <div className="body__overlay"></div>
            <div className="nivelo">{children}</div>
            <Footer />
        </>
    );
};

export default withUrqlClient(createUrqlClient)(Layout as any);
