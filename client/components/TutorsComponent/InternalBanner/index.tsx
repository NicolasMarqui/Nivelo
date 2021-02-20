// prettier-ignore
import { BannerTutors, BorderedButton, TtFlex } from "../../../pages/tutors/Tutors.styles";
// prettier-ignore
import { Container, Flex, Overlay, Title } from "../../../styles/helpers";
import { tutorsBreadcumb } from "../../../utils/breadcumbs";
import Breadcumb from "../../Breadcumb";

const InternalBanner: React.FC = ({}) => {
    return (
        <BannerTutors>
            <Overlay border="0" opacity={0.7} />
            <Container flex alignEnd>
                <TtFlex>
                    <Flex col>
                        <Breadcumb data={tutorsBreadcumb} />
                        <Title fontSize="40px" fontWeight="400" color="#fff">
                            Tutores
                        </Title>
                    </Flex>
                    <Flex size={4} justifyEnd>
                        <BorderedButton>Se torne um tutor</BorderedButton>
                    </Flex>
                </TtFlex>
            </Container>
        </BannerTutors>
    );
};
export default InternalBanner;
