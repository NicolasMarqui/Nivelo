import React from "react";
import { Container, Flex } from "../../styles/helpers";
import { Header, Menu } from "./Navbar.styles";
import Image from "next/image";
import Link from "next/link";

const Navbar: React.FC = ({}) => {
    return (
        <Header>
            <Container flex>
                <Flex>
                    <Image
                        src="/logo.svg"
                        width="150"
                        height="80"
                        alt="Nivelo"
                    />
                </Flex>
                <Flex>
                    <Menu>
                        <li>
                            <Link href="/">
                                <a>Home</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/categories">
                                <a>Categorias</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/tutors">
                                <a>Tutores</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/how-it-works">
                                <a>Como funciona?</a>
                            </Link>
                        </li>
                        <li className="navbar__dif">
                            <Link href="/login">
                                <a>Login</a>
                            </Link>
                        </li>
                        <li className="navbar__dif dif__sign">
                            <Link href="/signup">
                                <a>Register</a>
                            </Link>
                        </li>
                    </Menu>
                </Flex>
            </Container>
        </Header>
    );
};
export default Navbar;
