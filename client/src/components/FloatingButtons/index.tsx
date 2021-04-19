import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FaQuestion } from "react-icons/fa";
import { MdCall, MdExpandLess } from "react-icons/md";

interface FloatingButtonsProps {}

const FloatingButtons: React.FC<FloatingButtonsProps> = ({}) => {
    const router = useRouter();
    const [isVisible, setIsVisible] = useState(false);

    const showButtons = () => {
        if (window.pageYOffset > 120) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
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
                isVisible ? "flex" : "hidden"
            } float__buttons transition duration-500 ease-in-out h-20 w-20 bg-primaryOrange rounded-full flex items-center justify-center`}
        >
            <MdExpandLess size={20} />
        </div>
    );
};
export default FloatingButtons;
