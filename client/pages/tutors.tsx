import { useState } from "react";
import Container from "@components/container";
import FilterContainer from "@components/FilterContainer";
import Meta from "@components/Meta";
import TutorResults from "@components/TutorResults";
import Breadcumb from "@components/UI/Breadcumb";
import Title from "@components/UI/Title";
import { tutorsBreadcumbList } from "@utils/breadumbList";
import Link from "next/link";
import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "@utils/createUrqlClient";
import { useTutorsQuery } from "src/generated/graphql";
import { useRouter } from "next/router";
import LoaderTutorCard from "@components/UI/Skeletons/LoaderTutorCard";
import ReactPaginate from "react-paginate";
import { getTotalPages } from "@utils/getTotalPages";
import EmptyAnimation from "@components/UI/EmptyAnimation";
import FloatingButtons from "@components/FloatingButtons";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Tutors: React.FC = ({}) => {
    const { t } = useTranslation("tutors");
    const router = useRouter();
    const [limit, setLimit] = useState(100);
    // prettier-ignore
    const [page, setPage] = useState(typeof router.query.page === "string" ? parseInt(router.query.page) : 1);
    const [{ data, fetching, error }] = useTutorsQuery({
        variables: {
            limit,
            page,
            type: router.query.tutor || null,
            category: router.query.categoria || null,
            order: (router.query.ordernar as string) || "tutor.id",
            minPrice: (router.query.minPreco as string) || null,
            maxPrice: (router.query.maxPreco as string) || null,
        },
    });

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
        <>
            <Meta
                title="Tutores"
                description="Encontre os melhores tutores para te ajudar nessa jornada"
                keywords="home, tutor, javascript, nivelamento, aprender, algoritimos, comprar"
            />
            <FloatingButtons />
            <div className="relative">
                <div className="w-full h-52 relative bg-banner bg-center bg-cover bg-no-repeat">
                    <div className="absolute inset-0 bg-overlay"></div>
                    <Container classes="h-full">
                        <div className="flex items-end justify-between h-full px-3 md:px-0 py-8">
                            <div className="z-10 relative ">
                                <Breadcumb
                                    list={tutorsBreadcumbList}
                                    classes="md:primaryOrange text-sm md:text-lg"
                                />
                                <Title classes="text-white pl-2">
                                    {t("titleTuto")}
                                </Title>
                            </div>
                            <div className="z-10">
                                <Link href="/become-tutor">
                                    <a className="hidden md:flex justify-center items-center transition duration-500 ease-in-out bg-white text-primaryOrange font-bold border-2 border-orange rounded-3xl px-5 py-1 text-center hover:bg-primaryOrange hover:text-white cursor-pointer">
                                        {t("tutorSeTorne")}
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </Container>
                </div>
                <Container>
                    <FilterContainer
                        amount={data ? data.allTutors.tutor.length : "-"}
                    />
                    {fetching || error ? (
                        Array(6)
                            .fill(0)
                            .map((_, idx) => <LoaderTutorCard key={idx} />)
                    ) : !data ||
                      !data.allTutors.tutor ||
                      data.allTutors.tutor.length === 0 ? (
                        <EmptyAnimation />
                    ) : (
                        <>
                            <TutorResults data={data.allTutors.tutor} />
                            <div className="my-4">
                                <ReactPaginate
                                    previousLabel={"Anterior"}
                                    nextLabel={"Próximo"}
                                    containerClassName={"pagination"}
                                    activeClassName={"active"}
                                    pageCount={getTotalPages(
                                        data.allTutors.amount,
                                        100
                                    )}
                                    marginPagesDisplayed={2}
                                    pageRangeDisplayed={5}
                                    onPageChange={(e) =>
                                        handlePagination(
                                            e.selected === 1 ? 2 : e.selected
                                        )
                                    }
                                />
                            </div>
                        </>
                    )}
                </Container>
            </div>
        </>
    );
};

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale, ["tutors"])),
    },
});

export default withUrqlClient(createUrqlClient, {
    ssr: false,
})(Tutors);
