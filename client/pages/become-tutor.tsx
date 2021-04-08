import Meta from "@components/Meta";
import Title from "@components/UI/Title";
import { useRouter } from "next/router";
import React from "react";
import toast from "react-hot-toast";
import { useNewTutorMutation } from "src/generated/graphql";
import cookieCutter from "cookie-cutter";
import LoadingAnimation from "@components/UI/LoadingAnimation";
import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "@utils/createUrqlClient";

interface BecomeTutorProps {}

const BecomeTutor: React.FC<BecomeTutorProps> = ({}) => {
    const [{ fetching }, newTutor] = useNewTutorMutation();
    const router = useRouter();

    const userToTutor = async () => {
        const response = await newTutor();

        if (response.data.newTutor.errors) {
            toast.error("Tente novamente!");
            toast.error(response.data.newTutor.errors[0].message);
        } else if (response.data.newTutor.tutor) {
            cookieCutter.set("tid", response.data.newTutor.tutor.id, {
                expires: 1000 * 60 * 60 * 24 * 365 * 10,
            });

            toast.success("Bem vindo ao Nivelo!");
            router.push("/dashboard/tutor?welcome=true");
        }
    };

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

                        {fetching ? (
                            <LoadingAnimation />
                        ) : (
                            <div
                                className="w-full p-3 mt-8 rounded-lg text-white shadow hover:bg-darkerOrange transform hover:scale-105 text-center cursor-pointer z-10 relative bg-primaryOrange"
                                onClick={userToTutor}
                            >
                                Quero ser um tutor
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};
export default withUrqlClient(createUrqlClient)(BecomeTutor as any);
