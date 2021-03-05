import { ModalWrapper } from "reoverlay";
import EditClassForm from "../../EditClassForm";
import { TutorTitle } from "../../TutorCard/TutorCard.style";
import { ModalContainer } from "../Modals.style";
import { EditClassWrapper } from "./EditClass.style";

export interface EditClassProps {
    singleClass: {
        id: number;
        name: string;
        description: string;
        amountTimeTaught: number;
        level: string;
        active: boolean;
        price: {
            id: number;
            price: number;
            time: number;
        };
        createdAt: string;
        updatedAt: string;
    };
}

const EditClass: React.FC<EditClassProps> = ({ singleClass }) => {
    return (
        <ModalWrapper>
            <ModalContainer>
                <TutorTitle>
                    Editar aula - <span>{singleClass.name}</span>
                </TutorTitle>
                <EditClassWrapper>
                    <EditClassForm singleClass={singleClass} pageProps />
                </EditClassWrapper>
            </ModalContainer>
        </ModalWrapper>
    );
};
export default EditClass;
