import { AiOutlinePlusCircle } from "react-icons/ai";
import { BiEditAlt } from "react-icons/bi";
import ReactTooltip from "react-tooltip";
import { Description, FormLabel } from "../../styles/helpers";
import LoadingAnimation from "../LoadingAnimation";
import { MoreInfoThingy, TutorMoreInfoWrapper } from "./TutorMoreInfo.style";
import { Reoverlay } from "reoverlay";
import DescriptionTutor from "../Modals/DescriptionTutor";
import { shortTutorDescription } from "../../utils/shortTutorDescription";

interface TutorMoreInfoProps {
    loading: boolean;
    data: any;
}

const TutorMoreInfo: React.FC<TutorMoreInfoProps> = ({ loading, data }) => {
    if (loading) {
        return <LoadingAnimation />;
    }

    const { description, categories, id } = data.singleTutor.tutor;

    const handleDescriModal = () =>
        Reoverlay.showModal(DescriptionTutor, {
            tutorID: id,
            tutorDescription: description,
        });

    return (
        <TutorMoreInfoWrapper>
            <MoreInfoThingy>
                <div className="thingy__side">
                    <FormLabel>Descrição</FormLabel>
                    <Description>
                        {description
                            ? shortTutorDescription(description, 39)
                            : "Você ainda não possui uma descrição!"}
                    </Description>
                </div>
                <div
                    className="thingy__side thingy__difer"
                    data-tip="Editar"
                    data-for="editT"
                >
                    <BiEditAlt size={24} onClick={handleDescriModal} />
                    <ReactTooltip id="editT" effect="solid" place="left" />
                </div>
            </MoreInfoThingy>
            <MoreInfoThingy>
                <div className="thingy__side">
                    <FormLabel>Categorias</FormLabel>
                    {!categories ||
                    categories.length === 0 ||
                    categories === null ? (
                        <Description>
                            Você ainda não possui nenhuma categoria!
                        </Description>
                    ) : (
                        ""
                    )}
                </div>
                <div
                    className="thingy__side thingy__difer"
                    data-tip="Adicionar"
                    data-for="addT"
                >
                    <AiOutlinePlusCircle size={24} />
                    <ReactTooltip id="addT" effect="solid" place="left" />
                </div>
            </MoreInfoThingy>
        </TutorMoreInfoWrapper>
    );
};
export default TutorMoreInfo;