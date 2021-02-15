import Footer from "../Footer";
import Navbar from "../Navbar";

const Layout = ({ children }) => (
    <>
        <Navbar />
        <div className="nivelo">{children}</div>
        <Footer />
    </>
);

export default Layout;
