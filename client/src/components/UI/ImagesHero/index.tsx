import useWindowSize from "@hooks/useWindowSize";
import Image from "next/image";

interface ImagesHeroProps {}

const ImagesHero: React.FC<ImagesHeroProps> = ({}) => {
    const { width } = useWindowSize();
    const isDesktop = width > 1024;

    return (
        <div className="flex flex-row mt-9 md:mt-hr">
            <div className="mr-3 md:mr-5">
                <Image
                    src="/images/hero-1.jpg"
                    width={isDesktop ? 393 : width / 2}
                    height={isDesktop ? 590 : 300}
                    className="rounded-lg object-cover"
                />
            </div>
            <div className="flex flex-row md:flex-col">
                <div className="row-start-1 col-start-2 mr-3 md:mr-0">
                    <Image
                        src="/images/hero-2.jpg"
                        width={isDesktop ? 279 : width / 2}
                        height={isDesktop ? 319 : 300}
                        className="rounded-lg object-cover"
                    />
                </div>
                <div className="md:mt-4">
                    <Image
                        src="/images/hero-3.jpg"
                        width={isDesktop ? 279 : width / 2}
                        height={isDesktop ? 379 : 300}
                        className="rounded-lg object-cover"
                    />
                </div>
            </div>
        </div>
    );
};
export default ImagesHero;
