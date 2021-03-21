import { MdExpandMore, MdSearch } from "react-icons/md";

interface SearchProps {}

const Search: React.FC<SearchProps> = ({}) => {
    return (
        <div className="mt-4 flex items-center rounded-lg shadow-md bg-lightGray md:w-3/4 p-3 cursor-pointer">
            <p className="relative flex-1 flex items-center text-sm md:text-base text-gray-400">
                Escolha a categoria que deseja aprender
                <MdExpandMore size={17} />
            </p>
            <div className="flex-none bg-primaryOrange p-2 rounded-lg ml-1">
                <MdSearch size={20} color="#fff" />
            </div>
        </div>
    );
};
export default Search;
