import AddPriceForm from "@components/AddPriceForm";
import { createUrqlClient } from "@utils/createUrqlClient";
import { withUrqlClient } from "next-urql";
import ModalContainer from "../ModalContainer";

interface AddHorarioProps {
    classID: number;
}

const AddHorario: React.FC<AddHorarioProps> = ({ classID }) => {
    return (
        <ModalContainer>
            <AddPriceForm classID={classID} />
        </ModalContainer>
    );
};
export default withUrqlClient(createUrqlClient)(AddHorario as any);
