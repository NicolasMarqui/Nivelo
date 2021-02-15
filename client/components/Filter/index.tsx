import { useState, useEffect, useRef } from "react";
import IconButton from "../IconButton";
import { FilterWrapper, FilterSideWrapper } from "./Filter.style";
import { TiFilter } from "react-icons/ti";
import { useRouter } from "next/router";
import Dropdown from "../Dropdown";
import Select from "react-select";
import countries from "../../utils/countries.json";
import makeAnimated from "react-select/animated";
import { Button } from "../../styles/helpers";
import { Sticky } from "react-sticky";
import Side from "../Side";
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

export default function Filter() {
    const router = useRouter();
    const animatedComponents = makeAnimated();
    const filterRef = useRef(null);

    // Filter values
    const [isFixed, setIsFixed] = useState(false);
    const [localizacao, setLocalizacao] = useState([]);
    const [preco, setPreco] = useState(router.query.preco || "");
    const [categoria, setCategoria] = useState(router.query.categoria || "");
    const [disponibilidade, setDisponibilidade] = useState("");
    const [tutor, setTutor] = useState("");
    const [hasAplicadoFilter, setHasAplicadoFilter] = useState(false);
    const [currentPage, setCurrentPage] = useState(router.query.page || 1);

    // Filter open values
    const [isOpenSide, setIsOpenSide] = useState(false);

    const queryValues = {
        localizacao: localizacao ? localizacao.map((t) => t.value) : [],
        preco,
        categoria,
        disponibilidade,
        tutor,
    };

    const handleOpenSide = () => {
        setIsOpenSide(!isOpenSide);
        document.body.className = "";
        document.body.classList.add("overlay", "no-scroll");
    };

    useEffect(() => {
        setIsOpenSide(false);

        router.push(
            {
                pathname: `/tutors`,
                // @ts-ignore
                query: { ...queryValues, page: 1 },
            },
            undefined,
            { shallow: true }
        );
    }, [hasAplicadoFilter]);

    return (
        <>
            <Sticky>
                {({ style, isSticky }) => (
                    <FilterWrapper
                        ref={filterRef}
                        isFixed={isSticky}
                        style={style}
                    >
                        <ul className="filter__list">
                            <li>
                                <IconButton
                                    text="Filtros"
                                    icon={<TiFilter size={17} />}
                                    hasChevron={true}
                                    onClick={handleOpenSide}
                                />
                            </li>
                        </ul>
                    </FilterWrapper>
                )}
            </Sticky>
            <Side isOpen={isOpenSide} footer>
                <FilterSideWrapper>
                    <Accordion allowMultipleExpanded>
                        <div className="side__group">
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Localização
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <Select
                                        closeMenuOnSelect={true}
                                        placeholder="Localização"
                                        defaultValue={countries[31]}
                                        components={animatedComponents}
                                        isMulti
                                        onChange={(e: any) => setLocalizacao(e)}
                                        options={countries.map((c: any) => {
                                            return {
                                                ...c,
                                                value: c.label.toLowerCase(),
                                            };
                                        })}
                                    />
                                </AccordionItemPanel>
                            </AccordionItem>
                        </div>
                        <div className="side__group">
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Preço
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <Select
                                        closeMenuOnSelect={true}
                                        placeholder="Localização"
                                        defaultValue={countries[31]}
                                        components={animatedComponents}
                                        isMulti
                                        onChange={(e: any) => setLocalizacao(e)}
                                        options={countries.map((c: any) => {
                                            return {
                                                ...c,
                                                value: c.label.toLowerCase(),
                                            };
                                        })}
                                    />
                                </AccordionItemPanel>
                            </AccordionItem>
                        </div>
                        <div className="side__group">
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Categoria
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <Select
                                        closeMenuOnSelect={true}
                                        placeholder="Localização"
                                        defaultValue={countries[31]}
                                        components={animatedComponents}
                                        isMulti
                                        onChange={(e: any) => setLocalizacao(e)}
                                        options={countries.map((c: any) => {
                                            return {
                                                ...c,
                                                value: c.label.toLowerCase(),
                                            };
                                        })}
                                    />
                                </AccordionItemPanel>
                            </AccordionItem>
                        </div>
                        <div className="side__group">
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Localização
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <Select
                                        closeMenuOnSelect={true}
                                        placeholder="Disponibilidade"
                                        defaultValue={countries[31]}
                                        components={animatedComponents}
                                        isMulti
                                        onChange={(e: any) => setLocalizacao(e)}
                                        options={countries.map((c: any) => {
                                            return {
                                                ...c,
                                                value: c.label.toLowerCase(),
                                            };
                                        })}
                                    />
                                </AccordionItemPanel>
                            </AccordionItem>
                        </div>
                        <div className="side__group">
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Tipo de Tutor
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <Select
                                        closeMenuOnSelect={true}
                                        placeholder="Localização"
                                        defaultValue={countries[31]}
                                        components={animatedComponents}
                                        isMulti
                                        onChange={(e: any) => setLocalizacao(e)}
                                        options={countries.map((c: any) => {
                                            return {
                                                ...c,
                                                value: c.label.toLowerCase(),
                                            };
                                        })}
                                    />
                                </AccordionItemPanel>
                            </AccordionItem>
                        </div>
                    </Accordion>
                </FilterSideWrapper>
            </Side>
        </>
    );
}
