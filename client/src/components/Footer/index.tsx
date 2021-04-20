import Container from "@components/container";
import Link from "next/link";
import Categories from "@utils/JSON/categories.json";
import { useRouter } from "next/router";
import languages from "@utils/JSON/languages.json";

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
    const router = useRouter();

    const marginClass =
        router.pathname === "/become-tutor" ||
        router.pathname === "/login" ||
        router.pathname === "/signup" ||
        router.pathname === "/"
            ? "mt-0"
            : "mt-10";

    return (
        <footer className={`border-t-4 border-orange ${marginClass}`}>
            <Container classes="px-3">
                <div className="flex flex-col md:flex-row py-8">
                    <div className="flex-1.5 flex flex-col items-center md:items-start">
                        <img
                            src="/logo.svg"
                            width={170}
                            height={50}
                            className="block"
                            alt="Nivelo"
                        />
                        <p className="mt-2 text-base text-gray-400 md:w-4/5 text-center md:text-left">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut.
                        </p>

                        <div className="my-6 flex flex-col items-start">
                            <img
                                src="/icons/soonApple.svg"
                                width={180}
                                height={60}
                                alt="Em breve na Apple Store"
                            />
                            <img
                                src="/icons/soonAndroid.svg"
                                width={180}
                                height={60}
                                className="mt-1"
                                alt="Em breve na Play Store"
                            />
                        </div>
                    </div>
                    <div className="flex-1 my-5 md:my-0">
                        <h5 className="mt-3 text-lg text-center md:text-left mb-3 underline">
                            Categorias
                        </h5>
                        <ul className="p-0 m-0 flex flex-col text-center md:text-left">
                            {Categories.map((cat, idx) => (
                                <li className="mt-1 group" key={idx}>
                                    <Link
                                        href={`/tutors?categoria=${cat.value}`}
                                    >
                                        <a className="text-base text-desc group-hover:underline">
                                            {cat.value}
                                        </a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex-1.5 my-5 md:my-0">
                        <h5 className="mt-3 text-lg text-center md:text-left mb-3 underline">
                            F.A.Q
                        </h5>
                        <ul className="p-0 m-0 flex flex-col text-center md:text-left">
                            <li className="mt-1 group">
                                <Link href="/faq">
                                    <a className="text-base text-desc group-hover:underline">
                                        Como funciona?
                                    </a>
                                </Link>
                            </li>
                            <li className="mt-1 group">
                                <Link href="/faq">
                                    <a className="text-base text-desc group-hover:underline">
                                        Como me torno um tutor?
                                    </a>
                                </Link>
                            </li>
                            <li className="mt-1 group">
                                <Link href="/faq">
                                    <a className="text-base text-desc group-hover:underline">
                                        Como funciona o pagamento?
                                    </a>
                                </Link>
                            </li>
                            <li className="mt-1 group">
                                <Link href="/faq">
                                    <a className="text-base text-desc group-hover:underline">
                                        Como criar uma conta?
                                    </a>
                                </Link>
                            </li>
                            <li className="mt-1 group">
                                <Link href="/faq">
                                    <a className="text-base text-desc group-hover:underline">
                                        Qual a porcentagem?
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex-1 justify-center my-5 md:my-0">
                        <h5 className="mt-3 text-lg mb-3 underline text-center md:text-left">
                            Configurações
                        </h5>
                        <div className="mt-4">
                            <p className="text-xs text-gray-400 text-center md:text-left">
                                Idioma
                            </p>
                            <div className="flex items-center justify-center md:justify-start">
                                {languages.map((l) => (
                                    <div
                                        className="hover:scale-105 transform hover:bg-gray-50 cursor-pointer mr-2"
                                        key={l.locale}
                                    >
                                        <Link
                                            href={router.asPath}
                                            locale={l.locale}
                                        >
                                            <img
                                                src={`https://www.countryflags.io/${l.code}/flat/64.png`}
                                                className="w-16"
                                                alt="Language"
                                            />
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <div className="flex flex-col md:flex-row bg-black222 justify-center items-center">
                <p className="text-base text-white md:mx-3 mb-2 md:mb-0 py-2">
                    Feito com ❤ por Juarez Junior e Nicolas Marqui
                </p>
            </div>
        </footer>
    );
};
export default Footer;
