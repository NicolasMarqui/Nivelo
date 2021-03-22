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

const Tutors: React.FC = ({}) => {
    const router = useRouter();
    const [limit, setLimit] = useState(10);
    // prettier-ignore
    const [page, setPage] = useState(typeof router.query.page === "string" ? parseInt(router.query.page) : 1);
    const [{ data, fetching, error }] = useTutorsQuery({
        variables: {
            limit,
            page,
            type: router.query.tutor || null,
            category: router.query.categoria || null,
            order: null,
        },
    });

    // if (error) {
    //     router.push("/");
    // }

    return (
        <>
            <Meta
                title="Tutores"
                description="Encontre os melhores tutores para te ajudar nessa jornada"
                keywords="home, tutor, javascript, nivelamento, aprender, algoritimos, comprar"
            />
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
                                <Title classes="text-white pl-2">Tutores</Title>
                            </div>
                            <div className="z-10">
                                <Link href="/become-tutor">
                                    <a className="hidden md:flex justify-center items-center transition duration-500 ease-in-out bg-white text-primaryOrange font-bold border-2 border-orange rounded-3xl px-5 py-1 text-center hover:bg-primaryOrange hover:text-white cursor-pointer">
                                        Se torne um tutor
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </Container>
                </div>
                <Container>
                    <FilterContainer />
                    {fetching || error ? <LoaderTutorCard /> : <TutorResults />}
                </Container>
            </div>
        </>
    );
};
export default withUrqlClient(createUrqlClient, { ssr: true })(Tutors);