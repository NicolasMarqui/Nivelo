import { createUrqlClient } from "../../utils/createUrqlClient";
import Footer from "../Footer";
import Navbar from "../Navbar";
import { withUrqlClient } from "next-urql";

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <div className="nivelo">{children}</div>
            <Footer />
        </>
    );
};

export default withUrqlClient(createUrqlClient)(Layout as any);
