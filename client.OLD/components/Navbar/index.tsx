import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useMeQuery } from "../../generated/graphql";
import { Container, Flex } from "../../styles/helpers";
import { isServer } from "../../utils/isServer";
import NavBarMenu from "../NavbarMenu";
import { Header } from "./Navbar.styles";
import Hamburger from "hamburger-react";
import useWindowSize from "../../hooks/useWindowSize";
import Side from "../Side";

const Navbar: React.FC = ({}) => {
    const [{ data, fetching }] = useMeQuery({
        pause: isServer(),
    });

    const { width } = useWindowSize();
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <Header id="navbar">
                <Container flex f_center>
                    <Flex>
                        <h1 style={{ cursor: "pointer" }}>
                            <Link href="/">
                                <a>
                                    <Image
                                        src="/logo.svg"
                                        width="150"
                                        height="80"
                                        alt="Nivelo"
                                        className="nivelo__logo"
                                    />
                                </a>
                            </Link>
                        </h1>
                    </Flex>
                    <Flex size={2} justifyEnd align="flex-end">
                        {width < 1024 ? (
                            <Hamburger toggled={isOpen} toggle={setOpen} />
                        ) : (
                            <NavBarMenu data={data} fetching={fetching} />
                        )}
                    </Flex>
                </Container>
            </Header>
            {isOpen && (
                <Side
                    isOpen={isOpen}
                    width="80%"
                    header={{}}
                    onClickClose={() => setOpen(!isOpen)}
                >
                    <NavBarMenu data={data} fetching={fetching} />
                </Side>
            )}
        </>
    );
};
export default Navbar;
