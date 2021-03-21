import MenuExtra from "@components/MenuExtra";
import checkIfActive from "@utils/checkIfActive";
import Link from "next/link";
import { useRouter } from "next/router";

interface MenuProps {}

const Menu: React.FC<MenuProps> = ({}) => {
    const router = useRouter();

    return (
        <ul className="flex flex-col md:flex-row">
            <li
                className={`my-1 md:my-0 md:px-5 hoverMenu ${checkIfActive(
                    router.pathname,
                    "/"
                )}`}
            >
                <Link href="/">
                    <a className="text-nav py-4 md:py-5 block">Home</a>
                </Link>
            </li>
            <li
                className={`my-1 md:my-0 md:px-5 hoverMenu ${checkIfActive(
                    router.pathname,
                    "/categories"
                )}`}
            >
                <Link href="/categories">
                    <a className="text-nav py-4 md:py-5 block">Categorias</a>
                </Link>
            </li>
            <li
                className={`my-1 md:my-0 md:px-5 hoverMenu ${checkIfActive(
                    router.pathname,
                    "/tutors"
                )}`}
            >
                <Link href="/tutors">
                    <a className="text-nav py-4 md:py-5 block">Tutores</a>
                </Link>
            </li>
            <li
                className={`my-1 md:my-0 md:px-5 hoverMenu md:border-r-2 md:border-gray-200`}
            >
                <Link href="/#tutorial">
                    <a className="text-nav py-4 md:py-5 block">
                        Como funciona?
                    </a>
                </Link>
            </li>
            <li
                className={`my-1 md:my-0 md:px-5 hoverMenu md:border-r-2 md:border-gray-200 ${checkIfActive(
                    router.pathname,
                    "/become-tutor"
                )}`}
            >
                <Link href="/become-tutor">
                    <a className="text-nav py-4 md:py-5 block">Seja um tutor</a>
                </Link>
            </li>
            <MenuExtra />
        </ul>
    );
};
export default Menu;
