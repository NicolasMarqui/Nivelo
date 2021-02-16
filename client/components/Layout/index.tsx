import Footer from "../Footer";
import Navbar from "../Navbar";

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <div className="nivelo">{children}</div>
            <Footer />
        </>
    );
};

export default Layout;
