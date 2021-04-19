import { useState } from "react";
import { useRouter } from "next/router";
import { MdExpandMore, MdSearch } from "react-icons/md";
import Dropdown from "@components/UI/Dropdown";
import categories from "@utils/JSON/categories.json";
import Link from "next/link";
import { useTranslation } from "next-i18next";

interface SearchProps {}

const Search: React.FC<SearchProps> = ({}) => {
    const { t } = useTranslation("home");
    const router = useRouter();
    const [isOpenDrop, setIsOpenDrop] = useState(false);

    return (
        <div
            className="mt-6 flex items-center rounded-lg shadow-md bg-lightGray w-full md:w-2/4 p-3 cursor-pointer relative"
            onClick={() => setIsOpenDrop(!isOpenDrop)}
        >
            <p className="relative flex-1 flex items-center text-sm md:text-base text-gray-400">
                {t("search")}
                <MdExpandMore size={17} />
            </p>
            <div
                className="flex-none bg-primaryOrange p-2 rounded-lg ml-1 hover:bg-lightOrange"
                onClick={() => router.push("/tutors")}
            >
                <MdSearch size={20} color="#fff" />
            </div>

            <Dropdown
                isOpen={isOpenDrop}
                handleChange={() => setIsOpenDrop(!isOpenDrop)}
                classes="top-full w-full shadow-xl bg-primaryOrange z-20"
            >
                <ul className="flex flex-wrap">
                    {categories.map((cat, idx) => (
                        <Link href={`/tutors?categoria=${cat.value}`} key={idx}>
                            <li className="w-full md:w-2/5 p-2 cursor-pointer m-2 bg-white rounded-sm transform hover:scale-105">
                                <p className="text-black222">{cat.value}</p>
                            </li>
                        </Link>
                    ))}
                </ul>
            </Dropdown>
        </div>
    );
};
export default Search;
