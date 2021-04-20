import { shuffleArray } from "@utils/shuffleArray";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { heroImagesVariant } from "@utils/variants";

interface ImagesHeroProps {}

const ImagesHero: React.FC<ImagesHeroProps> = ({}) => {
    const [imageList, setImageList] = useState([
        "/images/hero-1.jpg",
        "/images/hero-2.jpg",
        "/images/hero-3.jpg",
        "/images/hero-4.jpg",
        "/images/categories.jpg",
    ]);

    useEffect(() => {
        const arrShuf = shuffleArray(imageList);
        setImageList(arrShuf);
    }, []);

    return (
        <div className="grid grid-cols-3 grid-rows-3 gap-2 h-full relative bg-black222">
            <motion.div
                className="absolute inset-0 z-2 bg-overlayEvenDarker"
                initial={{ opacity: 0 }}
                animate="showOverlay"
                variants={heroImagesVariant}
            ></motion.div>
            {/* 1 */}
            <motion.div
                className="col-start-1 row-span-2 row-start-1"
                initial={{ y: -300 }}
                variants={heroImagesVariant}
                animate="slideTop"
            >
                <img
                    src={imageList[3]}
                    alt="Hero Image 1"
                    className="w-full h-full rounded-2xl object-cover"
                    width="100%"
                />
            </motion.div>

            {/* 2 */}
            <motion.div
                className="col-start-2 row-start-1"
                initial={{ y: -300 }}
                variants={heroImagesVariant}
                animate="slideTop"
            >
                <img
                    src={imageList[1]}
                    alt="Hero Image 1"
                    className="w-full h-full rounded-2xl object-cover"
                    width="100%"
                />
            </motion.div>

            {/* 3 */}
            <motion.div
                className="col-start-3 row-span-2 row-start-1"
                initial={{ x: 300 }}
                variants={heroImagesVariant}
                animate="slideSides"
            >
                <img
                    src={imageList[0]}
                    alt="Hero Image 1"
                    width="100%"
                    className="w-full h-full rounded-2xl object-cover"
                />
            </motion.div>

            {/* 3 */}
            <motion.div
                className="col-start-2 row-start-2"
                initial={{ x: -300 }}
                variants={heroImagesVariant}
                animate="slideSides"
            >
                <img
                    src={imageList[2]}
                    alt="Hero Image 1"
                    width="100%"
                    className="w-full h-full rounded-2xl object-cover"
                />
            </motion.div>

            {/* 4 */}
            <motion.div
                className="col-start-1 row-start-3"
                initial={{ y: 300 }}
                variants={heroImagesVariant}
                animate="slideBottom"
            >
                <img
                    src={imageList[4]}
                    width="100%"
                    alt="Hero Image 1"
                    className="w-full h-full rounded-2xl object-cover"
                />
            </motion.div>

            {/* 5 */}
            <motion.div
                className="col-start-2 row-start-3 col-span-2"
                initial={{ y: 300 }}
                variants={heroImagesVariant}
                animate="slideBottom"
            >
                <img
                    src={imageList[1]}
                    width="100%"
                    alt="Hero Image 1"
                    className="w-full h-full rounded-2xl object-cover"
                />
            </motion.div>
        </div>
    );
};
export default ImagesHero;
