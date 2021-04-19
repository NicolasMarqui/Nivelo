import Lottie from "react-lottie";
import { motion } from "framer-motion";

const ScrollAnimation: React.FC = ({}) => {
    const Scroll__ANIMATION = require("../../../../public/animations/scroll.json");

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: Scroll__ANIMATION,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    return (
        <motion.div
            className="absolute bottom-3 inset-x-auto"
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ delay: 1 }}
        >
            <Lottie
                options={defaultOptions}
                height={110}
                width={110}
                style={{ cursor: "initial" }}
            />
        </motion.div>
    );
};
export default ScrollAnimation;
