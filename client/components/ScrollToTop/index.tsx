import { useRef, useState, useEffect } from "react";
import { ScrollToTopWrapper } from "./ScrollToTop.style";
import { MdExpandLess } from "react-icons/md";
import ReactTooltip from "react-tooltip";
import useSmoothScroll from "react-smooth-scroll-hook";

const ScrollToTop: React.FC = ({}) => {
    const [isVisible, setIsVisible] = useState(false);

    const showBackToTop = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", showBackToTop);
    }, []);

    if (typeof window !== "undefined") {
        const ref = useRef<HTMLElement>(document.documentElement);
        const { scrollTo } = useSmoothScroll({
            ref,
            speed: 50,
            direction: "y",
        });

        const handleScroll = () => scrollTo("#navbar");

        return (
            <ScrollToTopWrapper
                data-tip="Voltar para o topo"
                data-for="back"
                onClick={handleScroll}
                isVisible={isVisible}
            >
                <MdExpandLess size={50} color="#fff" />
                <ReactTooltip id="back" effect="solid" place="top" />
            </ScrollToTopWrapper>
        );
    } else {
        return null;
    }
};
export default ScrollToTop;
