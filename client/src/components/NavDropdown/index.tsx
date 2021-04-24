import Link from "next/link";
import { useRouter } from "next/router";
import { FiLogOut } from "react-icons/fi";
import { useCookies } from "react-cookie";

interface NavDropdownProps {
    isTutor?: boolean;
}

const NavDropdown: React.FC<NavDropdownProps> = () => {
    const router = useRouter();
    const [cookies, setCookie] = useCookies();

    const isTutor = cookies.tid !== undefined && cookies.tid !== "";

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
                    <Link href="/dashboard#userOrders">
                        <a className="flex justify-start text-white text-sm font-semibold hover:text-black222">
                            Seus pedidos
                        </a>
                    </Link>
                </li>
                {isTutor && (
                    <li className="px-2 mt-2 group hover:bg-white cursor-pointer">
                        <Link href="/dashboard/tutor">
                            <a className="flex justify-start text-white text-sm font-semibold hover:text-black222">
                                Suas Área
                            </a>
                        </Link>
                    </li>
                )}
                {isTutor && (
                    <li className="px-2 mt-2 group hover:bg-white cursor-pointer">
                        <Link href="/dashboard/tutor/calendar">
                            <a className="flex justify-start text-white text-sm font-semibold hover:text-black222">
                                Seu Calendário
                            </a>
                        </Link>
                    </li>
                )}
                <li
                    className="px-2 mt-4 group bg-red-700 text-white hover:bg-red-200 cursor-pointer font-bold text-center flex text-base item-center"
                    onClick={() => router.push("/out")}
                >
                    <FiLogOut size={20} className="mt-0.5 mr-1" color="#fff" />
                    <p>Deslogar</p>
                </li>
            </ul>
        </div>
    );
};
export default NavDropdown;
