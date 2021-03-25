import Link from "next/link";
import { FiLogOut } from "react-icons/fi";

interface NavDropdownProps {}

const NavDropdown: React.FC<NavDropdownProps> = ({}) => {
    return (
        <div className="flex">
            <ul className="relative">
                <li className="px-2 group hover:bg-white cursor-pointer ">
                    <Link href="/dashboard">
                        <a className="flex justify-start text-white text-sm font-semibold hover:text-black222">
                            Home
                        </a>
                    </Link>
                </li>
                <li className="px-2 mt-2 group hover:bg-white cursor-pointer">
                    <Link href="/dashboard#orders">
                        <a className="flex justify-start text-white text-sm font-semibold hover:text-black222">
                            Seus pedidos
                        </a>
                    </Link>
                </li>
                <li className="px-2 mt-2 group hover:bg-white cursor-pointer">
                    <Link href="/dashboard/classes">
                        <a className="flex justify-start text-white text-sm font-semibold hover:text-black222">
                            Suas Aulas
                        </a>
                    </Link>
                </li>
                <li className="px-2 mt-4 group bg-red-700 text-white hover:bg-red-200 cursor-pointer font-bold text-center flex text-base item-center">
                    <FiLogOut size={20} className="mt-0.5 mr-1" color="#fff" />
                    <p>Deslogar</p>
                </li>
            </ul>
        </div>
    );
};
export default NavDropdown;
