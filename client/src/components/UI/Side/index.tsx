import useClickOutside from "@hooks/useClickOutside";
import { Router } from "next/router";
import { useRef, useEffect } from "react";
import { FaTimes } from "react-icons/fa";

interface SideProps {
    position?: "bottom" | "left" | "right";
    handleClose: () => any;
    header?: { title?: string };
    footer?: React.ReactElement;
    children?: any;
    isOpen: boolean;
    filterAplicar?: () => any;
}

const Side: React.FC<SideProps> = ({
    position = "right",
    handleClose,
    header,
    footer,
    children,
    isOpen,
    filterAplicar,
}) => {
    const sideRef = useRef();

    useClickOutside(sideRef, () => {
        if (isOpen) {
            handleClose();
            document.querySelector("body").classList.remove("overflow-hidden");
        }
    });

    Router.events.on("routeChangeStart", () => {
        handleClose();
        document.querySelector("body").classList.remove("overflow-hidden");
    });

    useEffect(() => {
        if (isOpen) {
            document.querySelector("body").classList.add("overflow-hidden");
        }
    }, []);

    // prettier-ignore
    const positionClasses = position === "right" ? "top-0 bottom-0 right-0 w-72 md:w-80 side__right h-screen" : position === "left" ? "top-0 bottom-0 left-0 w-72 md:w-80 side__left h-screen" : "bottom-0 left-0 right-0 h-5/6 side__bottom";

    return (
        <div
            className={`side__full ${
                isOpen ? "sideF__open block" : "sideF__closed hidden"
            } fixed inset-0 bg-overlay z-30`}
        >
            <div
                ref={sideRef}
                className={`side z-40 transform ease-in-out transition-all duration-300 fixed shadow-md ${positionClasses} flex flex-col bg-white overflow-hidden ${
                    isOpen ? "side__open" : "side__closed"
                }`}
            >
                {header && (
                    <div className="absolute top-0 left-0 right-0 flex items-center justify-center bg-primaryOrange py-3">
                        <h4 className="text-white text-base">{header.title}</h4>
                        <div
                            className="absolute right-2 flex items-center justify-center bg-white shadow-md inset-top p-2 rounded-full hover:bg-gray-300 cursor-pointer"
                            onClick={() => {
                                handleClose();
                                document
                                    .querySelector("body")
                                    .classList.remove("overflow-hidden");
                            }}
                        >
                            <FaTimes size={18} color="#222" />
                        </div>
                    </div>
                )}
                <div
                    className={`${header ? "pt-16 pb-2 h-full" : "py-7"} px-4`}
                >
                    {children}
                </div>
                {footer && (
                    <div className="absolute top-0 left-0 right-0 flex items-center justify-center bg-gray-300 py-3">
                        {footer}
                    </div>
                )}
                {filterAplicar && (
                    <div
                        className="bg-primaryGreen p-2 text-center cursor-pointer text-lg text-white font-bold hover:bg-lightGreen"
                        onClick={filterAplicar}
                    >
                        APLICAR
                    </div>
                )}
            </div>
        </div>
    );
};
export default Side;
