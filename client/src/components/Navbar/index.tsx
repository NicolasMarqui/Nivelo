import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "@components/container";
import LanguageNav from "@components/LanguageNav";
import Menu from "@components/Menu";
import Hamburger from "hamburger-react";
import { useRouter } from "next/router";
import Side from "@components/UI/Side";
import MobileNavSide from "@components/SideChilds/MobileNavSide";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
    const router = useRouter();
    const [isOpen, setOpen] = useState(false);
    const handleToggle = () => setOpen(!isOpen);

    return (
        <>
            <header
                id="navbar"
                className={`border-b-2 border-gray-200 px-3 z-20 ${
                    router.pathname === "/"
                        ? "relative md:bsolute top-0 right-0 left-0 bg-white"
                        : "relative"
                }`}
            >
                <Container classes="p-0">
                    <div className="flex justify-betweeen items-center">
                        <div className="flex-none border-r-2 border-gray-200 pt-3">
                            <Link href="/">
                                <a>
                                    <h1>
                                        <Image
                                            src="/logo.svg"
                                            width={170}
                                            height={50}
                                            alt="Nivelo"
                                        />
                                    </h1>
                                </a>
                            </Link>
                        </div>
                        <div className="flex-1 flex items-center justify-between">
                            <LanguageNav />
                            <div className="hidden md:block">
                                <Menu pageProps />
                            </div>
                        </div>
                        <div className="flex-none md:hidden">
                            <Hamburger toggled={isOpen} toggle={handleToggle} />
                        </div>
                    </div>
                </Container>
            </header>

            {isOpen && (
                <Side
                    isOpen={isOpen}
                    handleClose={handleToggle}
                    position="left"
                >
                    <MobileNavSide />
                </Side>
            )}
        </>
    );
};

export default Navbar;
