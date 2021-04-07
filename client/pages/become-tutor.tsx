import Meta from "@components/Meta";
import Title from "@components/UI/Title";
import React from "react";

interface BecomeTutorProps {}

const BecomeTutor: React.FC<BecomeTutorProps> = ({}) => {
    return (
        <>
            <Meta
                title="Seja um tutor Nivelo"
                description="Encontre os melhores tutores para te ajudar nessa jornada"
                keywords="home, tutor, javascript, nivelamento, aprender, algoritimos, comprar"
            />
            <div className="becomeTutor">
                <div className="w-full bg-banner_bt bg-no-repeat bg-center md:bg-top bg-cover relative h-648 flex justify-center items-center">
                    <div className="absolute inset-0 bg-overlayDarker"></div>

                    <div className="flex flex-col">
                        <Title classes="text-center md:text-heroSize text-white z-10">
                            Se torne um tutor{" "}
                            <span className="text-primaryOrange block">
                                Nivelo
                            </span>
                        </Title>

                        <div className="w-full p-3 mt-8 rounded-lg text-white shadow hover:bg-darkerOrange transform hover:scale-105 text-center cursor-pointer z-10 relative bg-primaryOrange">
                            Quero ser um tutor
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default BecomeTutor;
