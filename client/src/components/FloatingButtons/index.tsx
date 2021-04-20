import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { MdExpandLess } from "react-icons/md";
import { motion } from "framer-motion";

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
        <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.8 }}
            className={`${
                isVisible ? "flex" : "hidden"
            } float__buttons transition duration-500 ease-in-out h-16 w-16 bg-primaryOrange rounded-full flex items-center justify-center fixed bottom-10 right-7 z-50 cursor-pointer`}
        >
            <MdExpandLess size={40} color="white" />
        </motion.div>
    );
};
export default FloatingButtons;
