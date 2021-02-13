import Navbar from "../Navbar";

const Layout = ({ children }) => (
    <>
        <Navbar />
        <div className="nivelo">{children}</div>
    </>
);

export default Layout;
