import React from "react";
import Meta from "@components/Meta";
import Hero from "@components/Landing/Hero";
import AnyWhere from "@components/Landing/Anywhere";
import Categories4u from "@components/Landing/Categories4u";
import BestTutors from "@components/Landing/BestTutors";
import Tutorial from "@components/Landing/Tutorial";
import FloatingButtons from "@components/FloatingButtons";
import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "@utils/createUrqlClient";
import Start from "@components/Landing/Start";

const Home: React.FC = () => {
    return (
        <div className="relative">
            <Meta
                title="Home"
                description="Encontre os melhores tutores para te ajudar nessa jornada"
                keywords="home, tutor, javascript, nivelamento, aprender, algoritimos, comprar"
            />
            <FloatingButtons />
            <Hero />
            <Categories4u />
            <AnyWhere />
            <Tutorial />
            <Start />
        </div>
    );
};

export default withUrqlClient(createUrqlClient)(Home);
