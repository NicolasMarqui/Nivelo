import { useState } from "react";
import Meta from "../components/Meta";
import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "../utils/createUrqlClient";
import { useCategoriesQuery } from "../generated/graphql";
import Categories from "../components/HomeComponents/Categorias";
import Hero from "../components/HomeComponents/Hero/index";
import Vantagens from "../components/HomeComponents/Vantagens";

const Home = () => {
    const [{ data }] = useCategoriesQuery();
    const [searchBoxOpen, setIsSearchBoxOpen] = useState(false);
    const handleOpen = () => setIsSearchBoxOpen(!searchBoxOpen);

    return (
        <>
            <Meta
                title="Home"
                description="Encontre os melhores tutores para te ajudar nessa jornada"
                keywords="home, tutor, javascript, nivelamento, aprender, algoritimos, comprar"
            />
            <Hero
                isCategoryVisible={searchBoxOpen}
                categoryVisible={handleOpen}
            />
            <Vantagens />
            <Categories data={data} />
        </>
    );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Home);
