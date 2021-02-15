import { DropdownWrapper } from "./Dropdown.style";

interface DropdownProps {
    children: any;
    isVisible: boolean;
}

export default function Dropdown({ children, isVisible }: DropdownProps) {
    return <DropdownWrapper isVisible={isVisible}>{children}</DropdownWrapper>;
}
