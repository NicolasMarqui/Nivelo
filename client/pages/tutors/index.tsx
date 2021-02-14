import { useState, useEffect } from "react";
import IconButton from "../../components/IconButton";
import { Container, Flex, PageWrapper, Title } from "../../styles/helpers";
import { TtFlex, TtFilters, AreaTutors } from "./Tutors.styles";
import { MdFilterList, MdList, MdViewWeek } from "react-icons/md";
import Breadcumb from "../../components/Breadcumb";
import { tutorsBreadcumb } from "../../utils/breadcumbs";
import Filter from "../../components/Filter";
import { useRouter } from "next/router";
import Meta from "../../components/Meta";
import { StickyContainer } from "react-sticky";
import TutorCard from "../../components/TutorCard";

export default function Tutors() {
    const router = useRouter();

    const [isLoadingData, setIsLoadingData] = useState(false);
    const [data, setData] = useState([]);

    // Viewing mode
    const [isViewColumn, setIsViewColumn] = useState(false);

    useEffect(() => {
        if (
            router.query.localizacao !== "" ||
            router.query.preco !== "" ||
            router.query.categoria !== "" ||
            router.query !== {}
        ) {
            console.log("yeep");
        }
    }, [router.asPath]);

    return (
        <PageWrapper>
            <Meta
                title="Tutores"
                description="Encontre os melhores tutores para te ajudar nessa jornada"
                keywords="tutor, javascript, nivelamento, aprender, algoritimos, comprar"
            />
            <Container>
                <TtFlex>
                    <Flex col>
                        <Breadcumb data={tutorsBreadcumb} />
                        <Title fontSize="40px" fontWeight="400">
                            Tutores
                        </Title>
                    </Flex>
                    <Flex size={4} justifyEnd>
                        <IconButton
                            icon={
                                isViewColumn ? (
                                    <MdList size={24} />
                                ) : (
                                    <MdViewWeek size={24} />
                                )
                            }
                            onClick={() => setIsViewColumn(!isViewColumn)}
                        />
                        <IconButton
                            text="Ordenar por"
                            icon={<MdFilterList size={24} />}
                            hasChevron={true}
                            onClick={() => alert("Hello")}
                        />
                    </Flex>
                </TtFlex>
                <StickyContainer>
                    <TtFilters>
                        <Filter />
                    </TtFilters>
                    {isLoadingData ? (
                        <h3>Loading this bitch</h3>
                    ) : (
                        <AreaTutors isColumn={isViewColumn}>
                            <TutorCard isColumn={isViewColumn} />
                            <TutorCard isColumn={isViewColumn} />
                            <TutorCard isColumn={isViewColumn} />
                        </AreaTutors>
                    )}
                </StickyContainer>
            </Container>
        </PageWrapper>
    );
}
