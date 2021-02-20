// prettier-ignore
import { Container, Description, Flex , Title, Section, PreTitle} from "../../../styles/helpers";
// prettier-ignore
import {ImageInfo, Parte, Box } from "../../../styles/Home.styles";
import { MdRecordVoiceOver } from "react-icons/md";

const Vantagens: React.FC = ({}) => {
    return (
        <Section>
            <Container flex>
                <Flex>
                    <ImageInfo>
                        <div className="info__detail detail_1"></div>
                        <div className="info__detail detail_2"></div>
                    </ImageInfo>
                </Flex>
                <Flex size={2}>
                    <Parte>
                        <PreTitle>O melhor do ensino</PreTitle>
                        <Title fontSize="60px" fontWeight="400">
                            Venha fazer parte desse ensino
                        </Title>

                        <div className="parte__boxes">
                            <Box>
                                <div className="box__icon">
                                    <MdRecordVoiceOver
                                        size={24}
                                        color="#FF4338"
                                    />
                                </div>
                                <div className="box__info">
                                    <h6>Aprenda com os melhores</h6>
                                    <Description color="#646464">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore.
                                    </Description>
                                </div>
                            </Box>
                            <Box>
                                <div className="box__icon">
                                    <MdRecordVoiceOver
                                        size={24}
                                        color="#68E1FD"
                                    />
                                </div>
                                <div className="box__info">
                                    <h6>Aprenda com os melhores</h6>
                                    <Description color="#646464">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore.
                                    </Description>
                                </div>
                            </Box>
                            <Box>
                                <div className="box__icon">
                                    <MdRecordVoiceOver
                                        size={24}
                                        color="#57CC99"
                                    />
                                </div>
                                <div className="box__info">
                                    <h6>Aprenda com os melhores</h6>
                                    <Description color="#646464">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore.
                                    </Description>
                                </div>
                            </Box>
                            <Box>
                                <div className="box__icon">
                                    <MdRecordVoiceOver
                                        size={24}
                                        color="#F4D35E"
                                    />
                                </div>
                                <div className="box__info">
                                    <h6>Aprenda com os melhores</h6>
                                    <Description color="#646464">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore.
                                    </Description>
                                </div>
                            </Box>
                        </div>
                    </Parte>
                </Flex>
            </Container>
        </Section>
    );
};
export default Vantagens;
