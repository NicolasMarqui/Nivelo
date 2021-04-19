import Section from "@components/UI/Section";
import Title from "@components/UI/Title";
import Link from "next/link";

interface StartProps {}

const Start: React.FC<StartProps> = ({}) => {
    return (
        <Section classes="bg-start">
            <div className="w-full flex flex-col items-center justify-center px-5">
                <Title classes="text-center md:text-left md:text-6xl text-white">
                    Pronto para começar?
                </Title>

                <p className="mt-4 text-white text-center md:w-1/2 2xl:w-1/4 md:text-xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam
                </p>

                <div className="mt-8 flex flex-col md:flex-row items-center w-full md:w-auto group">
                    <div className="flex-1 px-14 py-2 bg-white cursor-pointer text-center rounded-2xl transform hover:scale-105 w-2/3 md:w-auto">
                        <Link href="/login">
                            <a className="text-primaryOrange font-bold text-lg block w-full h-full">
                                Login
                            </a>
                        </Link>
                    </div>
                    <div className="flex-1 px-14 py-2 bg-white cursor-pointer text-center md:ml-3 mt-4 md:mt-0  rounded-2xl transform hover:scale-105 w-2/3 md:w-auto">
                        <Link href="/signup">
                            <a className="text-primaryOrange font-bold text-lg  w-full h-full">
                                Register
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </Section>
    );
};
export default Start;
