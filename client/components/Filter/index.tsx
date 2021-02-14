import { useState, useEffect, useRef, CSSProperties } from "react";
import IconButton from "../IconButton";
import { FilterWrapper } from "./Filter.style";
import { MdPlace, MdEuroSymbol, MdEvent, MdFace } from "react-icons/md";
import { TiFilter } from "react-icons/ti";
import { useRouter } from "next/router";
import Dropdown from "../Dropdown";
import Select from "react-select";
import countries from "../../utils/countries.json";
import makeAnimated from "react-select/animated";
import { Button } from "../../styles/helpers";
import { Sticky } from "react-sticky";

export default function Filter() {
    const router = useRouter();
    const animatedComponents = makeAnimated();
    const filterRef = useRef(null);

    // Filter values
    const [isFixed, setIsFixed] = useState(false);
    const [localizacao, setLocalizacao] = useState([]);
    const [preco, setPreco] = useState("");
    const [categoria, setCategoria] = useState("");
    const [disponibilidade, setDisponibilidade] = useState("");
    const [tutor, setTutor] = useState("");
    const [hasAplicadoFilter, setHasAplicadoFilter] = useState(false);

    const queryValues = {
        localizacao: localizacao ? localizacao.map((t) => t.value) : [],
        preco,
        categoria,
        disponibilidade,
        tutor,
    };

    useEffect(() => {
        console.log(localizacao);
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
        <Sticky>
            {({ style, isSticky }) => (
                <FilterWrapper ref={filterRef} isFixed={isSticky} style={style}>
                    <ul className="filter__list">
                        <li>
                            <h5>Filtros: </h5>
                        </li>
                        <li>
                            <IconButton
                                text="Localização"
                                icon={<MdPlace size={24} />}
                                hasChevron={true}
                            />

                            <Dropdown>
                                <Select
                                    closeMenuOnSelect={true}
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
                                <div className="drop__footer">
                                    <Button
                                        bgColor="#57CC99"
                                        color="#fff"
                                        bold
                                        onClick={() =>
                                            setHasAplicadoFilter(true)
                                        }
                                    >
                                        Aplicar
                                    </Button>
                                </div>
                            </Dropdown>
                        </li>
                        <li>
                            <IconButton
                                text="Preço"
                                icon={<MdEuroSymbol size={24} />}
                                hasChevron={true}
                            />
                        </li>
                        <li>
                            <IconButton
                                text="Categoria"
                                icon={<TiFilter size={24} />}
                                hasChevron={true}
                            />
                        </li>
                        <li>
                            <IconButton
                                text="Disponibilidade"
                                icon={<MdEvent size={24} />}
                                hasChevron={true}
                            />
                        </li>
                        <li>
                            <IconButton
                                text="Tipo de tutor"
                                icon={<MdFace size={24} />}
                                hasChevron={true}
                            />
                        </li>
                    </ul>
                </FilterWrapper>
            )}
        </Sticky>
    );
}
