import Meta from "@components/Meta";
import LoginForm from "@components/UI/Forms/LoginFom";
import Title from "@components/UI/Title";
import { createUrqlClient } from "@utils/createUrqlClient";
import { withUrqlClient } from "next-urql";
import Image from "next/image";
import { useRouter } from "next/router";

interface LoginProps {}

const Login: React.FC<LoginProps> = ({}) => {
    const router = useRouter();

    return (
        <>
            <Meta
                title="Login"
                description="Encontre os melhores tutores para te ajudar nessa jornada"
                keywords="home, tutor, javascript, nivelamento, aprender, algoritimos, comprar"
            />
            <div className="flex  h-screen w-full flex-row">
                <div className="flex-1 hidden md:flex md:flex-col lg:grid grid-cols-3 grid-rows-3 gap-4 justify-center pr-12 overflow-hidden max-h-screen">
                    <div className="col-span-1 row-span-2">
                        <img
                            src="/images/hero-1.jpg"
                            className="w-full rounded-3xl object-cover h-full"
                        />
                    </div>
                    <div className="row-start-3 row-span-1  h-400 col-start-1">
                        <img
                            src="/images/hero-4.jpg"
                            className="w-full rounded-3xl h-full object-cover"
                        />
                    </div>
                    <div className="col-start-2 row-start-1">
                        <img
                            src="/images/hero-2.jpg"
                            className="w-full rounded-3xl h-full object-cover"
                        />
                    </div>
                    <div className="col-start-2 row-start-2">
                        <img
                            src="/images/hero-3.jpg"
                            className="w-full rounded-3xl h-full object-cover"
                        />
                    </div>
                    <div className="col-start-2 row-start-3">
                        <img
                            src="/images/hero-2.jpg"
                            className="w-full rounded-3xl h-full object-cover"
                        />
                    </div>
                    <div className="col-start-3 row-start-1 row-span-2">
                        <img
                            src="/images/hero-2.jpg"
                            className="w-full rounded-3xl h-full object-cover"
                        />
                    </div>
                    <div className="col-start-3 row-start-3">
                        <img
                            src="/images/hero-3.jpg"
                            className="w-full rounded-3xl h-full object-cover w-"
                        />
                    </div>
                </div>
                <div className="flex-1 flex flex-col items-center justify-center px-8 max-h-screen pt-4">
                    <div className="md:hidden flex flex-col">
                        <Title classes="text-center">Bem vindo de volta</Title>
                        <p className="text-sm text-gray-400 mt-4 text-center">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Dolore repudiandae nemo iure perferendis fugit
                            laudantium. Totam minus nostrum laudantium culpa.
                        </p>
                    </div>

                    <div className="mt-5 w-580">
                        <LoginForm
                            redirectTo={`${
                                router.query.from ? router.query.from : "/"
                            }`}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};
export default withUrqlClient(createUrqlClient)(Login);
