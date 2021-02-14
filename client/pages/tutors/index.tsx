import { useState, useEffect } from "react";
import IconButton from "../../components/IconButton";
import { Container, Flex, PageWrapper, Title } from "../../styles/helpers";
import { TtFlex, TtFilters } from "./Tutors.styles";
import { MdFilterList, MdList } from "react-icons/md";
import Breadcumb from "../../components/Breadcumb";
import { tutorsBreadcumb } from "../../utils/breadcumbs";
import Filter from "../../components/Filter";
import { useRouter } from "next/router";
import Meta from "../../components/Meta";
import { StickyContainer } from "react-sticky";

export default function Tutors() {
    const router = useRouter();

    const [isLoadingData, setIsLoadingData] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        if (
            router.query.localizacao !== "" ||
            router.query.preco !== "" ||
            router.query.categoria !== "" ||
            router.query !== {}
        ) {
            getPosts();
        }
    }, [router.asPath]);

    const getPosts = async () => {
        setIsLoadingData(true);
        await fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((json) => {
                setData(json);
                setIsLoadingData(false);
            });
    };

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
                        <IconButton icon={<MdList size={24} />} />
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
                        data.map((el) => (
                            <div className="p__wrapper" style={{ margin: 40 }}>
                                <h6>{el.title}</h6>
                                <p>{el.body}</p>
                            </div>
                        ))
                    )}
                </StickyContainer>
            </Container>
        </PageWrapper>
    );
}
