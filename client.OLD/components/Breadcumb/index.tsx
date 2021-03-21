import Link from "next/link";
import { PreTitle } from "../../styles/helpers";
import { BreadcumbWrapper } from "./Breadcumb.styles";
import { MdChevronRight } from "react-icons/md";

interface BreadcumbObjects {
    id: number;
    text: string;
    linkTo?: string;
}

interface BreadcumbProps {
    data: BreadcumbObjects[];
    color?: string;
}

export default function Breadcumb({ data, color }: BreadcumbProps) {
    return (
        <BreadcumbWrapper>
            {data &&
                data.map((br: any) => (
                    <PreTitle key={br.id} color={color ? color : "#FF4338"}>
                        {br.linkTo ? (
                            <Link href={`${br.linkTo}`}>{br.text}</Link>
                        ) : (
                            br.text
                        )}
                        <MdChevronRight size={17} />
                    </PreTitle>
                ))}
        </BreadcumbWrapper>
    );
}
