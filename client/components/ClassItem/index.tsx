import { ClassItemWrapper } from "./ClassItem.style";
import { MdSchool } from "react-icons/md";
import { SmallerButton } from "../../styles/helpers";
import { checkIfUndefined } from "../../utils/checkIfUndefined";
import { getLowestValueArray } from "../../utils/getLowestValueArray";
import Link from "next/link";

interface ClassItemProps {
    class:
        | {
              id: number | undefined;
              amountTimeTaught: number | undefined;
              description: string | undefined;
              name: string | undefined;
              price: [{ id: number; price: number; time: number }] | null;
          }
        | undefined;
    smaller?: boolean;
    onClick?: () => any;
    fromInside?: boolean;
}

export default function ClassItem({
    smaller,
    class: { name, id, amountTimeTaught, description, price },
    fromInside = false,
}: ClassItemProps) {
    return (
        <Link
            href={!fromInside ? `?class=${id}` : "/classes/[id]"}
            as={`/classes/${id}`}
            scroll={fromInside}
        >
            <ClassItemWrapper smaller={smaller ? smaller : false}>
                <div className="class__icon">
                    <MdSchool size={24} />
                </div>
                <div className="class__info">
                    <h3>{checkIfUndefined(name)}</h3>
                    <p>{amountTimeTaught} aulas dadas</p>
                </div>
                <div className="class__price">
                    <SmallerButton>
                        R$ {price ? getLowestValueArray(price) : "0.00"}
                        {price && price.length > 1 ? "+" : ""}.00
                    </SmallerButton>
                </div>
            </ClassItemWrapper>
        </Link>
    );
}