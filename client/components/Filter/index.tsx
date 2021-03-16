import { useState, useEffect } from "react";
import IconButton from "../IconButton";
import { FilterWrapper, FilterSideWrapper } from "./Filter.style";
import { TiFilter } from "react-icons/ti";
import { useRouter } from "next/router";
import Select from "react-select";
import countries from "../../utils/countries.json";
import categories from "../../utils/categories.json";
import tutorType from "../../utils/tutorType.json";
import makeAnimated from "react-select/animated";
import { Sticky } from "react-sticky";
import Side from "../Side";
// prettier-ignore
import {Accordion,AccordionItem,AccordionItemButton,AccordionItemHeading,AccordionItemPanel,} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdClose } from "react-icons/md";
import { useLazyEffect } from "../../utils/useLazyEffect";
import ReactTooltip from "react-tooltip";
import { useCategoriesQuery } from "../../generated/graphql";

export default function Filter() {
    // Initial Value
    const router = useRouter();
    const animatedComponents = makeAnimated();
    // const [{ data, fetching, error }] = useCategoriesQuery();

    // Filter values
    const [localizacao, setLocalizacao] = useState([]);
    const [preco, setPreco] = useState([]);
    const [categoria, setCategoria] = useState([]);
    const [disponibilidade, setDisponibilidade] = useState([]);
    const [tutor, setTutor] = useState([]);
    const [hasAplicadoFilter, setHasAplicadoFilter] = useState(false);

    // Filter open values
    const [isOpenSide, setIsOpenSide] = useState(false);

    const queryValues = {
        localizacao: localizacao ? localizacao.map((t) => t.value) : [],
        preco: preco ? preco.map((t) => t.value) : [],
        categoria: categoria ? categoria.map((t) => t.value) : [],
        disponibilidade: disponibilidade
            ? disponibilidade.map((t) => t.value)
            : [],
        tutor: tutor ? tutor.map((t) => t.value) : [],
    };

    const handleOpenSide = () => {
        setIsOpenSide(!isOpenSide);
    };

    const handleCloseSide = () => {
        setIsOpenSide(!isOpenSide);
        document.body.className = "";
    };

    const handleFilterClean = () => {
        setLocalizacao([]);
        setPreco([]);
        setCategoria([]);
        setDisponibilidade([]);
        setTutor([]);

        router.query = {};
        router.push(
            {
                pathname: `/tutors`,
            },
            undefined,
            { shallow: true }
        );
    };

    useLazyEffect(() => {
        setIsOpenSide(false);
        document.body.className = "";

        router.push(
            {
                pathname: `/tutors`,
                query: { ...queryValues },
            },
            undefined,
            { shallow: true }
        );
    }, [hasAplicadoFilter]);

    return (
        <>
            <FilterWrapper>
                <ul className="filter__list">
                    <li data-tip="Filtros">
                        <IconButton
                            text="Filtros"
                            icon={<TiFilter size={17} />}
                            hasChevron={true}
                            onClick={handleOpenSide}
                        />
                        <ReactTooltip effect="solid" place="bottom" />
                    </li>
                    {(router.query.localizacao ||
                        router.query.preco ||
                        router.query.categoria ||
                        router.query.disponibilidade ||
                        router.query.tutor) &&
                        Object.keys(router.query).length > 0 && (
                            <li className="filter__clear">
                                <IconButton
                                    text={`Limpar filtros (${
                                        Object.keys(router.query).length
                                    })`}
                                    bColor="#FB475E"
                                    color="#fff"
                                    icon={<MdClose size={17} />}
                                    onClick={handleFilterClean}
                                />
                            </li>
                        )}
                </ul>
            </FilterWrapper>
            <Side
                isOpen={isOpenSide}
                footer
                header={{}}
                onClickClose={handleCloseSide}
                onClickAplicar={() => setHasAplicadoFilter(!hasAplicadoFilter)}
            >
                <FilterSideWrapper>
                    <Accordion allowMultipleExpanded>
                        <div className="side__group">
                            <AccordionItem id="1">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Localização
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <Select
                                        closeMenuOnSelect={true}
                                        placeholder="Localização"
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
                            <AccordionItem id="2">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Preço
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <Select
                                        closeMenuOnSelect={true}
                                        placeholder="Preço"
                                        isMulti
                                        components={animatedComponents}
                                        onChange={(e: any) => setPreco(e)}
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
                            <AccordionItem id="3">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Categoria
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <Select
                                        closeMenuOnSelect={true}
                                        placeholder="Categoria"
                                        components={animatedComponents}
                                        isMulti
                                        onChange={(e: any) => setCategoria(e)}
                                        options={categories}
                                    />
                                </AccordionItemPanel>
                            </AccordionItem>
                        </div>
                        <div className="side__group">
                            <AccordionItem id="4">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Disponibilidade
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <Select
                                        closeMenuOnSelect={true}
                                        placeholder="Disponibilidade"
                                        components={animatedComponents}
                                        isMulti
                                        onChange={(e: any) =>
                                            setDisponibilidade(e)
                                        }
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
                            <AccordionItem id="5">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Tipo de Tutor
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <Select
                                        closeMenuOnSelect={true}
                                        placeholder="Tipo de Tutor"
                                        components={animatedComponents}
                                        isMulti
                                        onChange={(e: any) => setTutor(e)}
                                        options={tutorType}
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
