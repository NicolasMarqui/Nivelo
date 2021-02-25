import { useEffect } from "react";
import { DropdownWrapper } from "./Dropdown.style";

interface DropdownProps {
    children: any;
    isVisible: boolean;
    mouseOut?: () => any;
}

export default function Dropdown({
    children,
    isVisible,
    mouseOut,
}: DropdownProps) {
    useEffect(() => {
        if (isVisible) {
            document.body.className = "";
            document.body.classList.add("overlay", "ov__less");
        } else {
            document.body.className = "";
        }
    }, [isVisible]);

    return (
        <DropdownWrapper isVisible={isVisible} onMouseLeave={mouseOut}>
            {children}
        </DropdownWrapper>
    );
}
