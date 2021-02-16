import { Button } from "../../styles/helpers";
import { SideWrapper } from "./Side.style";
import { MdClose } from "react-icons/md";

interface SideProps {
    children: any;
    isOpen: boolean;
    onClickClose?: () => any;
    onClickAplicar?: () => any;
    left?: boolean;
    footer?: boolean;
    header?: { icon?: React.ReactElement; text: string };
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
}: SideProps) {
    return (
        <SideWrapper left={left ? left : false} open={isOpen}>
            {header && (
                <div className="side__header">
                    {header.icon && (
                        <div className="header__icon">{header.icon}</div>
                    )}
                    <h4>{header.text}</h4>
                    <div className="header__close" onClick={onClickClose}>
                        <MdClose size={20} color="#fff" />
                    </div>
                </div>
            )}
            <div className="side__content">{children}</div>
            {footer && (
                <div className="side__footer">
                    <Button onClick={onClickAplicar}>APLICAR</Button>
                </div>
            )}
        </SideWrapper>
    );
}
