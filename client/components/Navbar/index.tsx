import React, { useState } from "react";
import { Container, Flex } from "../../styles/helpers";
import { Header, Menu } from "./Navbar.styles";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { BsBell } from "react-icons/bs";
import { FaUserGraduate } from "react-icons/fa";
import { useMeQuery } from "../../generated/graphql";
import { isServer } from "../../utils/isServer";
import Dropdown from "../Dropdown";
import UserDropdown from "../UserDropdown";

// TODO Fix problem where mouse from underneath bugs

const Navbar: React.FC = ({}) => {
    const [{ data, fetching }] = useMeQuery({
        pause: isServer(),
    });
    const router = useRouter();

    // Navbar states
    const [hoverUser, setHoverUser] = useState(false);

    return (
        <Header>
            <Container flex>
                <Flex>
                    <h1 style={{ cursor: "pointer" }}>
                        <Link href="/">
                            <Image
                                src="/logo.svg"
                                width="150"
                                height="80"
                                alt="Nivelo"
                                className="nivelo__logo"
                            />
                        </Link>
                    </h1>
                </Flex>
                <Flex size={2}>
                    <Menu>
                        <li>
                            <Link href="/">
                                <a>Home</a>
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
                        <li>
                            <Link href="/become-tutor">
                                <a>Seja um tutor!</a>
                            </Link>
                        </li>
                        {fetching ? (
                            <li>
                                <p>Carregando</p>
                            </li>
                        ) : data && data.me ? (
                            <>
                                <li
                                    className="hover__2 no__hover bg__icon has__dropdown"
                                    onMouseEnter={() =>
                                        setTimeout(() => setHoverUser(true), 50)
                                    }
                                    onMouseLeave={() => setHoverUser(false)}
                                >
                                    <Link href="/dashboard">
                                        <FaUserGraduate size={24} color="red" />
                                    </Link>

                                    <Dropdown
                                        isVisible={hoverUser}
                                        mouseOut={() =>
                                            setHoverUser(!hoverUser)
                                        }
                                    >
                                        {/* @ts-ignore */}
                                        <UserDropdown user={data.me} />
                                    </Dropdown>
                                </li>
                            </>
                        ) : (
                            <>
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
                            </>
                        )}
                    </Menu>
                </Flex>
            </Container>
        </Header>
    );
};
export default Navbar;
