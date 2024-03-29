import EmptyAnimation from "@components/UI/EmptyAnimation";
import LoadingAnimation from "@components/UI/LoadingAnimation";
import { GetServerSideProps } from "next";
//prettier-ignore
import { useAllCategoriesTutorQuery, useGetTutorCookieQuery, useSingleTutorQuery, useTutorOrdersAwaitingApprovalQuery,} from "src/generated/graphql";
import { FaCog } from "react-icons/fa";
import TutorClassList from "@components/DashboardComponents/TutorClassList";
import IconButton from "@components/UI/IconButton";
import { FaChalkboardTeacher } from "react-icons/fa";
import { Reoverlay } from "reoverlay";
import AddClass from "@components/Modals/AddClass";
import EditTutorAccount from "@components/Modals/EditTutorAccount";
import TutorCategoriesList from "@components/DashboardComponents/TutorCategoriesList";
import { useRouter } from "next/router";
import cookies from "next-cookies";
import AddPlatform from "@components/Modals/AddPlatform";
import { useCookies } from "react-cookie";
import { useEffect } from "react";
interface TutorProps {
    tutorID: number;
}

// @ts-ignore
const Tutor: React.FC<TutorProps> = (props) => {
    const router = useRouter();
    const [cookies] = useCookies();
    useEffect(() => {
        if (!cookies.gASDFW2 || cookies.gASDFW2 === "") {
            router.push("/login");
            return;
        }
    }, []);
    if (!cookies.gASDFW2 || cookies.gASDFW2 === "") {
        return <LoadingAnimation />;
    }

    //prettier-ignore
    const [{ data, fetching, error }] = useSingleTutorQuery({ variables: { id: props.tutorID } });
    //prettier-ignore
    const [{ data: tutorsOrderData, fetching: tutorsOrderFetc }] = useTutorOrdersAwaitingApprovalQuery({ variables: { id: props.tutorID },});
    const [{ data: tCat, fetching: tFet }] = useAllCategoriesTutorQuery({
        variables: { id: props.tutorID },
    });

    if (fetching) {
        return <LoadingAnimation />;
    }

    if (error) {
        router.push("/dashboard");
        return false;
    }

    const showSettingsModal = () => {
        if (data && data.singleTutor !== undefined) {
            Reoverlay.showModal(EditTutorAccount, {
                tutor: data.singleTutor.tutor,
            });
        }
    };

    const handlePlatOpen = () => {
        Reoverlay.showModal(AddPlatform, {
            userID: data.singleTutor.tutor.user.id,
            platforms: data.singleTutor.tutor.user.userPlatformAccount,
        });
    };

    return (
        <>
            {(!fetching &&
                data &&
                data.singleTutor !== undefined &&
                data.singleTutor.tutor.chavePix === "") ||
            data.singleTutor.tutor.chavePix === null ? (
                <div className="w-full p-3 bg-yellow-500 flex flex-col md:flex-row items-center justify-between mb-2">
                    <h3 className="text-white text-sm md:text-xl font-semibold">
                        Adicione uma chave PIX para receber pagamentos
                    </h3>
                    <div
                        className="p-1.5 bg-white text-black222 flex items-center justify-center mt-2 md:mt-0 cursor-pointer transform hover:scale-105 hover:bg-gray-50"
                        onClick={showSettingsModal}
                    >
                        Adicionar
                    </div>
                </div>
            ) : (
                ""
            )}
            {!fetching && data && data.singleTutor !== undefined ? (
                <div className="w-full p-3 bg-green-500 flex flex-col md:flex-row items-center justify-between mb-2">
                    <h3 className="text-white text-sm md:text-xl font-semibold">
                        Gerencie as plataformas usadas para ensino
                    </h3>
                    <div
                        className="p-1.5 bg-white text-black222 flex items-center justify-center mt-2 md:mt-0 cursor-pointer transform hover:scale-105 hover:bg-gray-50"
                        onClick={handlePlatOpen}
                    >
                        Gerenciar
                    </div>
                </div>
            ) : (
                ""
            )}
            {!tutorsOrderFetc &&
            tutorsOrderData.ordersTutorAwaitingApproval.length > 0 ? (
                <div className="w-full p-3 bg-red-400 flex flex-col md:flex-row items-center justify-between">
                    <h3 className="text-white text-sm md:text-xl font-semibold">
                        Você possui
                        <span className="mx-2 font-bold text-base md:text-2xl">
                            {tutorsOrderData.ordersTutorAwaitingApproval.length}
                        </span>
                        pedidos sem informaçõs de pagamento!
                    </h3>
                    <div
                        className="p-1.5 bg-white text-black222 flex items-center justify-center mt-2 md:mt-0 cursor-pointer transform hover:scale-105 hover:bg-gray-50"
                        onClick={() => router.push("/dashboard/tutor/orders")}
                    >
                        Visualizar
                    </div>
                </div>
            ) : (
                ""
            )}
            <div className="relative p-8 bg-gray-50 dark:bg-gray-600 rounded-3xl shadow-md">
                {data && data.singleTutor !== undefined ? (
                    <div className="flex flex-col my-1">
                        <div className="flex flex-col md:flex-row items-center justify-between">
                            <h2 className="text-3xl md:text-4xl font-bold text-center md:text-left">
                                Sua área como
                                <span className="text-primaryOrange ml-2">
                                    Tutor
                                </span>
                            </h2>
                            <div className="relative">
                                <FaCog
                                    size={30}
                                    className="mt-5 md:mt-2 cursor-pointer transform hover:scale-105"
                                    onClick={showSettingsModal}
                                />
                            </div>
                        </div>
                        <p className="mt-4 text-base text-desc dark:text-gray-400 md:w-4/5 text-center md:text-left">
                            Bem vindo a sua área de tutor, aqui você pode
                            gerenciar suas aulas, seus alunos, suas datas e
                            muito mais!
                        </p>
                    </div>
                ) : (
                    <EmptyAnimation />
                )}
            </div>
            <div className="relative p-8 bg-gray-50 dark:bg-gray-600 rounded-3xl shadow-md mt-5">
                <h2 className="text-3xl md:text-4xl font-bold text-center md:text-left">
                    Suas
                    <span className="text-primaryOrange ml-2">Categorias</span>
                </h2>
                {tCat && tCat.allCategoriesTutor !== undefined ? (
                    <TutorCategoriesList
                        tutorID={data.singleTutor.tutor.id}
                        categories={tCat.allCategoriesTutor.map((c) => c.id)}
                    />
                ) : (
                    <LoadingAnimation />
                )}
            </div>
            <div
                className="relative p-8 bg-gray-50 dark:bg-gray-600 rounded-3xl shadow-md mt-5"
                id="classes"
            >
                <div className="flex flex-col my-1">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <h2 className="text-3xl md:text-4xl font-bold text-center md:text-left">
                            Suas
                            <span className="text-primaryOrange ml-2">
                                Aulas
                            </span>
                        </h2>
                        <div className="relative mt-3 md:mt-0">
                            <IconButton
                                smaller
                                classes="bg-indigo-500 text-white hover:bg-indigo-200 text-xl font-semibold"
                                text="Adicionar nova aula"
                                icon={
                                    <FaChalkboardTeacher
                                        size={20}
                                        color="#222"
                                    />
                                }
                                onClick={() => Reoverlay.showModal(AddClass)}
                            />
                        </div>
                    </div>
                </div>
                <TutorClassList classes={data.singleTutor.tutor.classes} />
            </div>
        </>
    );
};

export const getServerSideProps: GetServerSideProps = async (ctx: any) => {
    // const cookie = cookies(ctx).qid;
    const tutorCookie = cookies(ctx).tid;

    if (!tutorCookie) {
        return {
            redirect: {
                permanent: false,
                destination: "/dashboard?message=Acesso negado",
            },
        };
    }

    return { props: { tutorID: Number(tutorCookie) } };
};

export default Tutor;
