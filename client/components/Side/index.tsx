import { useRef } from "react";
import { Button } from "../../styles/helpers";
import { SideWrapper } from "./Side.style";
import { MdClose } from "react-icons/md";
import { useRouter } from "next/router";

interface SideProps {
    children: any;
    isOpen: boolean;
    onClickClose?: () => any;
    onClickAplicar?: () => any;
    left?: boolean;
    footer?: boolean;
    header?: { icon?: React.ReactElement; text?: string };
    width?: string;
    ignoreCloseOutside?: boolean;
}

// TODO add close on outside click

export default function Side({
    children,
    isOpen,
    onClickClose,
    onClickAplicar,
    left,
    footer,
    header,
    width,
    ignoreCloseOutside,
}: SideProps) {
    const router = useRouter();
    const sideRef = useRef(null);

    const handleCloseSide = (event: any) => {
        document
            .querySelector(".body__overlay")
            .addEventListener("click", function (e) {
                if (e.target !== sideRef.current) {
                    document.body.className = "";
                    if (ignoreCloseOutside) {
                        router.back();
                    } else {
                        onClickClose();
                    }
                }
            });
    };

    if (isOpen) {
        document.body.className = "";
        document.body.classList.add("overlay", "no-scroll");
    }

    const handleCloseFull = () => {
        document.body.className = "";
        onClickClose();
    };

    return (
        <SideWrapper
            left={left ? left : false}
            open={isOpen}
            size={width}
            onClick={handleCloseSide}
            ref={sideRef}
        >
            {header && (
                <div className="side__header">
                    {header.icon && (
                        <div className="header__icon">{header.icon}</div>
                    )}
                    <h4>{header.text}</h4>
                    <div className="header__close" onClick={handleCloseFull}>
                        <MdClose size={20} color="#fff" />
                    </div>
                </div>
            )}
            <div className="side__content">{children}</div>
            {footer && (
                <div className="side__footer">
                    <Button
                        onClick={onClickAplicar}
                        bgColor="#57CC99"
                        color="#fff"
                    >
                        APLICAR
                    </Button>
                </div>
            )}
        </SideWrapper>
    );
}
