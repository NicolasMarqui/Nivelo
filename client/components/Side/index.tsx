import { Button } from "../../styles/helpers";
import { SideInside, SideWrapper } from "./Side.style";
import { MdClose } from "react-icons/md";

interface SideProps {
    children: any;
    isOpen: boolean;
    onClickClose?: () => any;
    onClickAplicar?: () => any;
    left?: boolean;
    bottom?: boolean;
    footer?: boolean;
    header?: { icon?: React.ReactElement; text?: string };
    width?: string;
    ignoreCloseOutside?: boolean;
    headerAbsolute?: boolean;
}

// prettier-ignore
const Side = ({ children, isOpen, onClickClose, onClickAplicar, left, footer, header, width, ignoreCloseOutside, bottom, headerAbsolute = false}: SideProps) => {
    const handleCloseSide = (event: any) => {
        if (ignoreCloseOutside) return false;

        if (event.target === event.currentTarget) {
            console.log("outside");
            onClickClose();
        }
    };

    if (isOpen) {
        document.body.className = "";
        document.body.classList.add("no-scroll");
    }

    const handleCloseFull = () => {
        document.body.className = "";
        onClickClose();
    };

    return (
        <SideWrapper open={isOpen} onClick={handleCloseSide} id="id__side">
            <SideInside left={left ? left : false} size={width} bottom={bottom ? bottom : false}>
                {header && (
                    <div className={`side__header ${headerAbsolute ? 'header__absolute' : ''}`}>
                        {header.icon && (
                            <div className="header__icon">{header.icon}</div>
                        )}
                        <h4>{header.text}</h4>
                        <div
                            className="header__close"
                            onClick={handleCloseFull}
                        >
                            <MdClose size={20} color="#fff" />
                        </div>
                    </div>
                )}
                <div className={`side__content ${headerAbsolute ? 'morePdd' : ''}`}>{children}</div>
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
            </SideInside>
        </SideWrapper>
    );
};

export default Side;
