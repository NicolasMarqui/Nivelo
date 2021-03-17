import { useRouter } from "next/router";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import { withUrqlClient } from "next-urql";
import { StickyContainer } from "react-sticky";
import Meta from "../../components/Meta";
import { useTutorsQuery } from "../../generated/graphql";
import { Container, PageWrapper } from "../../styles/helpers";

import { createUrqlClient } from "../../utils/createUrqlClient";
import { getTotalPages } from "../../utils/getTotalPages";

import NoRecords from "../../components/NoRecords";
import LoaderTutorCard from "../../components/Skeletons/LoaderTutorCard";
import FilterContainer from "../../components/TutorsComponent/FilterContainer";
import InternalBanner from "../../components/TutorsComponent/InternalBanner";
import TutorsResult from "../../components/TutorsComponent/TutorsResult";
import ScrollToTop from "../../components/ScrollToTop";
import useWindowSize from "../../hooks/useWindowSize";

const Tutors = () => {
    const router = useRouter();
    const [limit, setLimit] = useState(10);
    // prettier-ignore
    const [page, setPage] = useState(typeof router.query.page === "string" ? parseInt(router.query.page) : 1);
    const [isViewColumn, setIsViewColumn] = useState(false);
    const [{ data, fetching }] = useTutorsQuery({
        variables: {
            limit,
            page,
            type: router.query.tutor || null,
            category: router.query.categoria || null,
            order: null,
        },
    });

    const { width } = useWindowSize();
    const handleViewMode = () => setIsViewColumn(!isViewColumn);
    const handlePagination = (newPage: number) => {
        router.push(
            {
                pathname: `/tutors`,
                query: { ...router.query, page: newPage },
            },
            undefined,
            { shallow: true }
        );

        setPage(newPage);
    };

    return (
        <PageWrapper pTop={width > 1024 ? "108px" : "0px"}>
            <Meta
                title="Tutores"
                description="Encontre os melhores tutores para te ajudar nessa jornada"
                keywords="tutor, javascript, nivelamento, aprender, algoritimos, comprar"
            />
            <InternalBanner />
            <ScrollToTop />
            <Container>
                <StickyContainer>
                    <FilterContainer
                        data={data}
                        isColumn={isViewColumn}
                        changeViewMode={handleViewMode}
                    />
                    {fetching ? (
                        <LoaderTutorCard />
                    ) : !data ||
                      !data.allTutors ||
                      data.allTutors.length === 0 ? (
                        <NoRecords />
                    ) : (
                        <>
                            <TutorsResult data={data} isColumn={isViewColumn} />
                            <ReactPaginate
                                previousLabel={"Anterior"}
                                nextLabel={"Próximo"}
                                containerClassName={"pagination"}
                                activeClassName={"active"}
                                pageCount={getTotalPages(
                                    data.allTutors.length,
                                    limit
                                )}
                                marginPagesDisplayed={2}
                                pageRangeDisplayed={5}
                                onPageChange={(e) =>
                                    handlePagination(
                                        e.selected === 1 ? 2 : e.selected
                                    )
                                }
                            />
                        </>
                    )}
                </StickyContainer>
            </Container>
        </PageWrapper>
    );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Tutors);
