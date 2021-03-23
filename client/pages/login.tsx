import Meta from "@components/Meta";
import LoginForm from "@components/UI/Forms/LoginFom";
import Title from "@components/UI/Title";
import { createUrqlClient } from "@utils/createUrqlClient";
import { withUrqlClient } from "next-urql";
import Image from "next/image";

interface LoginProps {}

const Login: React.FC<LoginProps> = ({}) => {
    return (
        <>
            <Meta
                title="Login"
                description="Encontre os melhores tutores para te ajudar nessa jornada"
                keywords="home, tutor, javascript, nivelamento, aprender, algoritimos, comprar"
            />
            <div className="flex  h-screen w-full flex-row">
                <div className="flex-1 hidden md:grid grid-cols-3 grid-rows-3 gap-4 justify-center pr-12 overflow-hidden max-h-screen">
                    <div className="col-span-1 h-96">
                        <img
                            src="/images/hero-1.jpg"
                            className="w-full rounded-3xl object-cover"
                        />
                    </div>
                    <div className="row-start-3 row-span-1  h-400 col-start-1">
                        <img
                            src="/images/hero-4.jpg"
                            className="w-full rounded-3xl h-full object-cover"
                        />
                    </div>
                    <div className="col-start-2 row-start-1 h-60">
                        <img
                            src="/images/hero-2.jpg"
                            className="w-full rounded-3xl h-full object-cover"
                        />
                    </div>
                    <div className="col-start-2 row-start-2 h-80">
                        <img
                            src="/images/hero-3.jpg"
                            className="w-full rounded-3xl h-full object-cover"
                        />
                    </div>
                    <div className="col-start-2 row-start-3 h-60 mt-20">
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
                    <div className="col-start-3 row-start-3 h-80">
                        <img
                            src="/images/hero-3.jpg"
                            className="w-full rounded-3xl h-full object-cover w-"
                        />
                    </div>
                </div>
                <div className="flex-1 flex flex-col items-center justify-center px-12 max-h-screen pt-4">
                    <div className="md:hidden flex flex-col">
                        <Title classes="text-center">
                            Seja bem vindo de volta
                        </Title>
                        <p className="text-sm text-gray-400 mt-4 text-center">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Dolore repudiandae nemo iure perferendis fugit
                            laudantium. Totam minus nostrum laudantium culpa.
                        </p>
                    </div>

                    <div className="mt-5 md:w-7/12">
                        <LoginForm />
                    </div>
                </div>
            </div>
        </>
    );
};
export default withUrqlClient(createUrqlClient)(Login);
