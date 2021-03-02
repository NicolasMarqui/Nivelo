import { Container } from "../../styles/helpers";
import {
    FooterWrapper,
    LogoCurrencyWrapper,
    FooterColumn,
    FooterBottom,
    ColumnList,
} from "./Footer.style";
import Image from "next/image";
import Select from "react-select";
import currencies from "../../utils/currencies.json";
import languages from "../../utils/languages.json";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import { useRouter } from "next/router";

export default function Footer() {
    const router = useRouter();

    return (
        <FooterWrapper
            notMargin={
                router.pathname === "/login" ||
                router.pathname === "/become-tutor"
                    ? true
                    : false
            }
        >
            <Container flex>
                <FooterColumn>
                    <div className="column__name">
                        <h5>Categorias</h5>
                    </div>
                    <ColumnList>
                        <li>
                            <Link href="/tutors">
                                <a>Javascript</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/tutors/algoritimos">
                                <a>Algoritimos</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/tutors/ingles">
                                <a>Inglês</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/tutors/ingles">
                                <a>Cálculo</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/tutors/ingles">
                                <a>Lingua Portuguesa</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/tutors/ingles">
                                <a>Jogos</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/tutors/ingles">
                                <a>Python</a>
                            </Link>
                        </li>
                    </ColumnList>
                </FooterColumn>
                <FooterColumn>
                    <div className="column__name">
                        <h5>F.A.Q</h5>
                    </div>
                    <ColumnList>
                        <li>
                            <Link href="/tutors">
                                <a>Javascript</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/tutors/algoritimos">
                                <a>Algoritimos</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/tutors/ingles">
                                <a>Inglês</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/tutors/ingles">
                                <a>Cálculo</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/tutors/ingles">
                                <a>Lingua Portuguesa</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/tutors/ingles">
                                <a>Jogos</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/tutors/ingles">
                                <a>Python</a>
                            </Link>
                        </li>
                    </ColumnList>
                </FooterColumn>
                <FooterColumn>
                    <div className="column__name">
                        <h5>Tutores</h5>
                    </div>
                    <ColumnList>
                        <li>
                            <Link href="/tutors">
                                <a>Se torne um tutor!</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/tutors/algoritimos">
                                <a>Algoritimos</a>
                            </Link>
                        </li>
                    </ColumnList>
                    <div className="column__name">
                        <h5>More</h5>
                    </div>
                    <ColumnList>
                        <li>
                            <Link href="/tutors">
                                <a>Javascript</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/tutors/algoritimos">
                                <a>Algoritimos</a>
                            </Link>
                        </li>
                    </ColumnList>
                </FooterColumn>
                <FooterColumn>
                    <LogoCurrencyWrapper>
                        <div className="lc__logo">
                            <Image
                                src="/logo.svg"
                                width="150"
                                height="80"
                                alt="Nivelo"
                            />
                        </div>
                        <div className="lc__selects">
                            <Select
                                closeMenuOnSelect={true}
                                defaultValue={currencies[0]}
                                options={currencies}
                            />

                            <Select
                                closeMenuOnSelect={true}
                                defaultValue={languages[0]}
                                options={languages}
                                label="Idioma"
                            />

                            <ul className="lc__languages"></ul>
                        </div>
                    </LogoCurrencyWrapper>
                </FooterColumn>
            </Container>
            <FooterBottom>
                <Container flex>
                    <div className="bottom__info">
                        <ul>
                            <li>
                                <Link href="/about/cookie">
                                    <a>Cookie settings</a>
                                </Link>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/NicolasMarqui"
                                    target="_blank"
                                >
                                    <FaGithub size={24} />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/jjr17"
                                    target="_blank"
                                >
                                    <FaGithub size={24} />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="bottom__copyright">
                        <p>
                            Made with <AiFillHeart size={24} color="red" /> by
                            Nicolas Marqui and Juarez Junior
                        </p>
                    </div>
                </Container>
            </FooterBottom>
        </FooterWrapper>
    );
}
