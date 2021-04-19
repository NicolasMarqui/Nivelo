import { shuffleArray } from "@utils/shuffleArray";
import { useEffect, useState } from "react";

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
            <div className="absolute inset-0 z-2 bg-overlayEvenDarker"></div>
            {/* 1 */}
            <div className="col-start-1 row-span-2 row-start-1">
                <img
                    src={imageList[3]}
                    alt="Hero Image 1"
                    className="w-full h-full rounded-2xl object-cover"
                />
            </div>

            {/* 2 */}
            <div className="col-start-2 row-start-1">
                <img
                    src={imageList[1]}
                    alt="Hero Image 1"
                    className="w-full h-full rounded-2xl object-cover"
                />
            </div>

            {/* 3 */}
            <div className="col-start-3 row-span-2 row-start-1">
                <img
                    src={imageList[0]}
                    alt="Hero Image 1"
                    className="w-full h-full rounded-2xl object-cover"
                />
            </div>

            {/* 3 */}
            <div className="col-start-2 row-start-2">
                <img
                    src={imageList[2]}
                    alt="Hero Image 1"
                    className="w-full h-full rounded-2xl object-cover"
                />
            </div>

            {/* 4 */}
            <div className="col-start-1 row-start-3">
                <img
                    src={imageList[4]}
                    alt="Hero Image 1"
                    className="w-full h-full rounded-2xl object-cover"
                />
            </div>

            {/* 5 */}
            <div className="col-start-2 row-start-3 col-span-2">
                <img
                    src={imageList[1]}
                    alt="Hero Image 1"
                    className="w-full h-full rounded-2xl object-cover"
                />
            </div>
        </div>
    );
};
export default ImagesHero;
