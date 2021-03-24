import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

const Layout = ({ children }: any) => {
    return (
        <>
            <Navbar />
            <div className="nivelo">{children}</div>
            <Footer />
        </>
    );
};

export default Layout;
