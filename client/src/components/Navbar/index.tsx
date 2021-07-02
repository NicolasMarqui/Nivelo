import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "@components/container";
import LanguageNav from "@components/LanguageNav";
import Menu from "@components/Menu";
import Hamburger from "hamburger-react";
import { useRouter } from "next/router";
import Side from "@components/UI/Side";
import MobileNavSide from "@components/SideChilds/MobileNavSide";
import { FaTimes } from "react-icons/fa";
import Toggle from "@components/Toggle";
import { useTheme } from "next-themes";

const Navbar: React.FC = () => {
    const router = useRouter();
    const { theme } = useTheme();

    const [mounted, setMounted] = useState(false);
    const [isOpen, setOpen] = useState(false);
    const [isOpenAviso, setIsOpenAviso] = useState(true);
    const [isFixed, setIsFixed] = useState(false);

    const handleToggle = () => setOpen(!isOpen);

    const fixedNav = () => {
        if (window.pageYOffset > 300) {
            setIsFixed(true);
        } else {
            setIsFixed(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", fixedNav);

        return () => {
            window.removeEventListener("scroll", fixedNav);
        };
    }, []);

    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    return (
        <div className="nav__wrapper" id="navbar">
            {router.locale === "en" && isOpenAviso && (
                <div className="w-full p-2 bg-red-400">
                    <Container classes="px-3">
                        <div className="flex items-center justify-between">
                            <p className="text-white">
                                <span className="font-bold">NOTICE: </span>The
                                translations are a work in progress, soon the
                                whole website will be in English
                            </p>
                            <FaTimes
                                size={20}
                                color="#fff"
                                className="cursor-pointer transform hover:scale-105"
                                onClick={() => setIsOpenAviso(false)}
                            />
                        </div>
                    </Container>
                </div>
            )}
            <header
                className={`border-b-2 border-gray-200 dark:border-darkSecondaryBg px-3 z-30 bg-white transform transition-all dark:bg-darkSecondaryBg animatedFixedNav ${
                    isFixed
                        ? "fixed top-0 left-0 right-0 shadow-lg isFixed animate-fade-in-down"
                        : "relative"
                }`}
            >
                <Container classes="p-0">
                    <div className="flex justify-betweeen items-center">
                        <div className="flex-none border-r-2 border-gray-200 dark:border-darkSecondaryBg pt-3">
                            <Link href="/">
                                <a>
                                    <h1>
                                        <Image
                                            src={`/${
                                                theme === "dark"
                                                    ? "logoWhite"
                                                    : "logo"
                                            }.svg`}
                                            width={170}
                                            height={50}
                                            alt="Nivelo"
                                        />
                                    </h1>
                                </a>
                            </Link>
                        </div>
                        <div className="flex-1 flex items-center justify-between">
                            <div className="flex ml-5 md:hidden">
                                <Toggle />
                            </div>
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
        </div>
    );
};

export default Navbar;
