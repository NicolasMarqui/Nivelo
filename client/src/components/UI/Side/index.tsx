import useClickOutside from "@hooks/useClickOutside";
import { Router } from "next/router";
import { useRef } from "react";

interface SideProps {
    position?: "bottom" | "left" | "right";
    handleClose: () => any;
    header?: { title: string };
    footer?: React.ReactElement;
    children?: any;
    isOpen: boolean;
}

const Side: React.FC<SideProps> = ({
    position = "right",
    handleClose,
    header,
    footer,
    children,
    isOpen,
}) => {
    const sideRef = useRef();

    useClickOutside(sideRef, () => {
        if (isOpen) handleClose();
    });

    Router.events.on("routeChangeStart", () => {
        handleClose();
    });

    // prettier-ignore
    const positionClasses = position === "right" ? "top-0 bottom-0 right-0 w-72 md:w-80 side__right" : position === "left" ? "top-0 bottom-0 left-0 w-72 md:w-80 side__left" : "bottom-0  left-0 right-0 h-80 side__bottom";

    return (
        <div
            className={`side__full ${
                isOpen ? "sideF__open block" : "sideF__closed hidden"
            } fixed inset-0 bg-overlay z-30`}
        >
            <div
                ref={sideRef}
                className={`side z-40 transform ease-in-out transition-all duration-300 fixed shadow-md ${positionClasses} flex flex-col bg-white h-screen overflow-hidden ${
                    isOpen ? "side__open" : "side__closed"
                }`}
            >
                {header && (
                    <div className="absolute top-0 left-0 right-0 flex items-center justify-center bg-primaryOrange py-3">
                        <h4 className="text-white text-base">{header.title}</h4>
                    </div>
                )}
                <div className={`${header ? "py-16" : "py-7"} px-4`}>
                    {children}
                </div>
                {footer && (
                    <div className="absolute top-0 left-0 right-0 flex items-center justify-center bg-gray-300 py-3">
                        {footer}
                    </div>
                )}
            </div>
        </div>
    );
};
export default Side;
