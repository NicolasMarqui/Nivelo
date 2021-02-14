import IconButton from "../../components/IconButton";
import { Container, Flex, PageWrapper, Title } from "../../styles/helpers";
import { TtFlex } from "./Tutors.styles";
import { MdFilterList, MdList } from "react-icons/md";
import Breadcumb from "../../components/Breadcumb";
import { tutorsBreadcumb } from "../../utils/breadcumbs";

export default function Tutors() {
    return (
        <PageWrapper>
            <Container>
                <TtFlex>
                    <Flex col>
                        <Breadcumb data={tutorsBreadcumb} />
                        <Title fontSize="40px" fontWeight="400">
                            Tutores
                        </Title>
                    </Flex>
                    <Flex size={4} justifyEnd>
                        <IconButton icon={<MdList size={24} />} />
                        <IconButton
                            text="Ordenar por"
                            icon={<MdFilterList size={24} />}
                            hasChevron={true}
                            onClick={() => alert("Hello")}
                        />
                    </Flex>
                </TtFlex>
            </Container>
        </PageWrapper>
    );
}
