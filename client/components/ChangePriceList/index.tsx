import { ChangePriceListWrapper } from "./ChangePriceList.style";
import ReactTooltip from "react-tooltip";
import {
    Pill,
    PriceInfo,
    PriceInfoTime,
    PriceInfoWrapper,
} from "../../styles/helpers";

interface PriceItem {
    id: number;
    price: number;
    time: number;
}

interface ChangePriceListProps {
    price: PriceItem[] | null;
}

const ChangePriceList: React.FC<ChangePriceListProps> = ({ price }) => {
    return (
        <ChangePriceListWrapper>
            <PriceInfoWrapper>
                {price.map((p) => (
                    <PriceInfo
                        hasCursor
                        data-tip="Clique para editar"
                        data-for={p.id.toString()}
                    >
                        <PriceInfoTime>
                            Tempo de duração - {p.time}/min
                        </PriceInfoTime>
                        <Pill bgColor="#8390FA">Valor - R${p.price}/hr</Pill>
                        <ReactTooltip id={p.id.toString()} />
                    </PriceInfo>
                ))}
            </PriceInfoWrapper>
        </ChangePriceListWrapper>
    );
};
export default ChangePriceList;
