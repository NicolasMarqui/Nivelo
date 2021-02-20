import { useState } from "react";
import IconButton from "../../components/IconButton";
import {
    Button,
    Container,
    Description,
    Flex,
    Overlay,
    PageWrapper,
    Title,
} from "../../styles/helpers";
import {
    TtFlex,
    TtFilters,
    AreaTutors,
    BannerTutors,
    BorderedButton,
} from "./Tutors.styles";
import { MdFilterList, MdList, MdViewWeek } from "react-icons/md";
import Breadcumb from "../../components/Breadcumb";
import { tutorsBreadcumb } from "../../utils/breadcumbs";
import Filter from "../../components/Filter";
import { useRouter } from "next/router";
import Meta from "../../components/Meta";
import { StickyContainer } from "react-sticky";
import TutorCard from "../../components/TutorCard";
import { createUrqlClient } from "../../utils/createUrqlClient";
import { withUrqlClient } from "next-urql";
import { useTutorsQuery } from "../../generated/graphql";
import NoRecords from "../../components/NoRecords";
import LoaderTutorCard from "../../components/Skeletons/LoaderTutorCard";

const Tutors = () => {
    const router = useRouter();

    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(
        typeof router.query.page === "string" ? parseInt(router.query.page) : 1
    );

    const [{ data, fetching }] = useTutorsQuery({
        variables: {
            limit,
            page,
            type: router.query.tutor || null,
            category: router.query.categoria || null,
            order: null,
        },
    });

    // Viewing mode
    const [isViewColumn, setIsViewColumn] = useState(false);
    const handlePagination = () => {
        router.push(
            {
                pathname: `/tutors`,
                query: { ...router.query, page: page + 1 },
            },
            undefined,
            { shallow: true }
        );

        setPage(page + 1);
    };

    return (
        <PageWrapper pTop="108px">
            <Meta
                title="Tutores"
                description="Encontre os melhores tutores para te ajudar nessa jornada"
                keywords="tutor, javascript, nivelamento, aprender, algoritimos, comprar"
            />
            <BannerTutors>
                <Overlay border="0" opacity={0.7} />
                <Container flex alignEnd>
                    <TtFlex>
                        <Flex col>
                            <Breadcumb data={tutorsBreadcumb} />
                            <Title
                                fontSize="40px"
                                fontWeight="400"
                                color="#fff"
                            >
                                Tutores
                            </Title>
                        </Flex>
                        <Flex size={4} justifyEnd>
                            <BorderedButton>Se torne um tutor</BorderedButton>
                        </Flex>
                    </TtFlex>
                </Container>
            </BannerTutors>
            <Container>
                <StickyContainer>
                    <TtFilters>
                        <div className="filters__amount">
                            <Description>
                                Mostrando{" "}
                                <span>
                                    {data ? data.allTutors.length : "-"}
                                </span>{" "}
                                tutores
                            </Description>
                        </div>
                        <div className="filters__buttons">
                            <IconButton
                                icon={
                                    isViewColumn ? (
                                        <MdList size={17} />
                                    ) : (
                                        <MdViewWeek size={17} />
                                    )
                                }
                                onClick={() => setIsViewColumn(!isViewColumn)}
                            />
                            <IconButton
                                text="Ordenar por"
                                icon={<MdFilterList size={17} />}
                                hasChevron={true}
                                onClick={() => alert("Hello")}
                            />

                            <Filter />
                        </div>
                    </TtFilters>
                    {fetching ? (
                        Array(10).map(() => <LoaderTutorCard />)
                    ) : !data ||
                      !data.allTutors ||
                      data.allTutors.length === 0 ? (
                        <NoRecords />
                    ) : (
                        <>
                            <AreaTutors isColumn={isViewColumn}>
                                {data.allTutors.map((tut) => (
                                    <TutorCard
                                        key={tut.id}
                                        isColumn={isViewColumn}
                                        tutor={tut}
                                    />
                                ))}
                            </AreaTutors>
                            <Button onClick={handlePagination}>
                                Go to page 2
                            </Button>
                        </>
                    )}
                </StickyContainer>
            </Container>
        </PageWrapper>
    );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Tutors);
