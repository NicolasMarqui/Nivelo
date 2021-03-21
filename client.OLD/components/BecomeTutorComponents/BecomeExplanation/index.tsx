import { Description, Title } from "../../../styles/helpers";
import BecomeForm from "../BecomeForm";
import { BecomeWrapper } from "./BecomeExplanation.style";

interface BecomeExplanationProps {}

const BecomeExplanation: React.FC<BecomeExplanationProps> = ({}) => {
    return (
        <BecomeWrapper>
            <Title fontWeight="400" fontSize="30px">
                Se torne um tutor nivelo!
            </Title>
            <Description marginTop={23}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                est sapiente tempore! Nam, placeat, cupiditate expedita
                recusandae, tempore soluta molestias laboriosam odio quaerat
                neque a! Facere, exercitationem voluptas. Odio, vero.
            </Description>

            <BecomeForm />
        </BecomeWrapper>
    );
};
export default BecomeExplanation;
