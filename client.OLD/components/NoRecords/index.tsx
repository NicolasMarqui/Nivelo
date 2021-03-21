import { Title } from "../../styles/helpers";
import { NoRecordWrapper } from "./NoRecords.style";

export default function NoRecords() {
    return (
        <NoRecordWrapper>
            <Title fontWeight="400">Nenhum resultado encontrado...</Title>
        </NoRecordWrapper>
    );
}
