import Meta from "@components/Meta";
import Title from "@components/UI/Title";
import { useRouter } from "next/router";
import React from "react";
import toast from "react-hot-toast";
import { useMeQuery, useNewTutorMutation } from "src/generated/graphql";
import cookieCutter from "cookie-cutter";
import LoadingAnimation from "@components/UI/LoadingAnimation";
import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "@utils/createUrqlClient";
import Link from "next/link";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

interface BecomeTutorProps {}

const BecomeTutor: React.FC<BecomeTutorProps> = ({}) => {
    const { t } = useTranslation("become");
    const [{ fetching }, newTutor] = useNewTutorMutation();
    const [{ fetching: fetMe, data }] = useMeQuery();
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

                    <div className="flex flex-col px-4">
                        <Title classes="text-center md:text-heroSize text-white z-10">
                            {t("becomeTut")}{" "}
                            <span className="text-primaryOrange block">
                                Nivelo
                            </span>
                        </Title>

                        {fetching || fetMe ? (
                            <LoadingAnimation />
                        ) : data && data.me ? (
                            <div
                                className="w-full p-3 mt-8 rounded-lg text-white shadow hover:bg-darkerOrange transform hover:scale-105 text-center cursor-pointer z-10 relative bg-primaryOrange"
                                onClick={userToTutor}
                            >
                                {t("wantTut")}
                            </div>
                        ) : (
                            <Link href="/login?from=become-tutor">
                                <a className="w-full p-3 mt-8 rounded-lg text-white shadow hover:bg-darkerOrange transform hover:scale-105 text-center cursor-pointer z-10 relative bg-primaryOrange">
                                    {t("loginTut")}
                                </a>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale, ["become"])),
    },
});

export default withUrqlClient(createUrqlClient)(BecomeTutor as any);
