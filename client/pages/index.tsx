import React from "react";
import Meta from "@components/Meta";
import Hero from "@components/Landing/Hero";
import AnyWhere from "@components/Landing/Anywhere";
import CTA from "@components/Landing/CTA";
import Categories4u from "@components/Landing/Categories4u";
import BestTutors from "@components/Landing/BestTutors";
import Tutorial from "@components/Landing/Tutorial";
import FloatingButtons from "@components/FloatingButtons";

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
            <AnyWhere />
            <CTA />
            <Categories4u />
            <BestTutors />
            <Tutorial />
        </div>
    );
};

export default Home;
