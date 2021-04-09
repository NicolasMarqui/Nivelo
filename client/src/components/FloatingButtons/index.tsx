import useWindowSize from "@hooks/useWindowSize";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaQuestion } from "react-icons/fa";
import { MdCall } from "react-icons/md";

interface FloatingButtonsProps {}

const FloatingButtons: React.FC<FloatingButtonsProps> = ({}) => {
    const { width } = useWindowSize();
    const isMobile = width < 992;
    const [isVisible, setIsVisible] = useState(false);

    const showButtons = () => {
        if (window.pageYOffset > 120) {
            setIsVisible(true);
        } else {
            if (!isMobile) {
                setIsVisible(false);
            }
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", showButtons);

        return () => {
            window.removeEventListener("scroll", showButtons);
        };
    }, []);

    return (
        <div
            className={`${
                isVisible || isMobile ? "flex" : "hidden"
            } float__buttons flex-row md:flex-col fixed bottom-0 right-0 left-0 md:left-auto md:bottom-6 md:right-10 z-30 transition duration-500 ease-in-out`}
        >
            <div className="md:rounded-3xl bg-primaryPurple text-center py-4 md:py-2 px-5 flex-1 md:mb-3 flex items-center justify-center cursor-pointer group hover:bg-lightPurple">
                <FaQuestion
                    size={17}
                    color="#fff"
                    className="transform group-hover:scale-105"
                />
                <p className="text-base text-white font-bold ml-2 group-hover:text-primaryPurple">
                    F.A.Q
                </p>
            </div>
            <div className="md:rounded-3xl bg-primaryOrange text-center py-2 px-5 cursor-pointer flex items-center group hover:bg-lightOrange">
                <Link href="/become-tutor">
                    <a className="text-base text-white font-bold group-hover:text-primaryOrange">
                        Se torne um tutor
                    </a>
                </Link>
            </div>
            <div className="md:rounded-3xl bg-primaryGreen text-center py-2 px-5 flex-1 md:mb-3 flex md:hidden items-center justify-center cursor-pointer">
                <MdCall size={17} color="#fff" />
                <p className="text-base text-white font-bold ml-2">Contato</p>
            </div>
        </div>
    );
};
export default FloatingButtons;
