import { useState } from "react";
import { Button } from "../../styles/helpers";
import { SideWrapper } from "./Side.style";

interface SideProps {
    children: any;
    isOpen: boolean;
    onClick?: () => any;
    left?: boolean;
    footer?: boolean;
    header?: { icon?: React.ReactElement; text: string };
}

// TODO add close on outside click

export default function Side({
    children,
    isOpen,
    onClick,
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
                </div>
            )}
            <div className="side__content">{children}</div>
            {footer && (
                <div className="side__footer">
                    <Button>APLICAR</Button>
                </div>
            )}
        </SideWrapper>
    );
}
