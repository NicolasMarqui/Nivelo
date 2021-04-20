import { motion } from "framer-motion";
import { heroImagesVariant } from "@utils/variants";

interface ImagesLoginProps {
    classes?: string;
}

const ImagesLogin: React.FC<ImagesLoginProps> = ({ classes }) => {
    return (
        <div
            className={`flex-1 hidden md:flex md:flex-col lg:grid grid-cols-3 grid-rows-3 gap-4 justify-center pr-12 overflow-hidden max-h-screen ${classes}`}
        >
            <motion.div
                className="col-span-1 row-span-2"
                initial={{ y: -300 }}
                variants={heroImagesVariant}
                animate="slideTop"
            >
                <img
                    src="/images/hero-1.jpg"
                    className="w-full rounded-3xl object-cover h-full"
                />
            </motion.div>
            <motion.div
                className="row-start-3 row-span-1  h-400 col-start-1"
                initial={{ y: 300 }}
                variants={heroImagesVariant}
                animate="slideTop"
            >
                <img
                    src="/images/hero-4.jpg"
                    className="w-full rounded-3xl h-full object-cover"
                />
            </motion.div>
            <motion.div
                className="col-start-2 row-start-1"
                initial={{ y: -300 }}
                variants={heroImagesVariant}
                animate="slideTop"
            >
                <img
                    src="/images/hero-2.jpg"
                    className="w-full rounded-3xl h-full object-cover"
                />
            </motion.div>
            <motion.div
                className="col-start-2 row-start-2"
                initial={{ x: -300 }}
                variants={heroImagesVariant}
                animate="slideSides"
            >
                <img
                    src="/images/hero-3.jpg"
                    className="w-full rounded-3xl h-full object-cover"
                />
            </motion.div>
            <motion.div
                className="col-start-2 row-start-3"
                initial={{ y: 300 }}
                variants={heroImagesVariant}
                animate="slideTop"
            >
                <img
                    src="/images/hero-2.jpg"
                    className="w-full rounded-3xl h-full object-cover"
                />
            </motion.div>
            <motion.div
                className="col-start-3 row-start-1 row-span-2"
                initial={{ y: -300 }}
                variants={heroImagesVariant}
                animate="slideTop"
            >
                <img
                    src="/images/hero-2.jpg"
                    className="w-full rounded-3xl h-full object-cover"
                />
            </motion.div>
            <motion.div
                className="col-start-3 row-start-3"
                initial={{ y: 300 }}
                variants={heroImagesVariant}
                animate="slideTop"
            >
                <img
                    src="/images/hero-3.jpg"
                    className="w-full rounded-3xl h-full object-cover w-"
                />
            </motion.div>
        </div>
    );
};
export default ImagesLogin;
