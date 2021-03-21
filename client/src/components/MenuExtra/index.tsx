import Link from "next/link";

interface MenuExtraProps {}

const MenuExtra: React.FC<MenuExtraProps> = ({}) => {
    return (
        <>
            <li className="my-2 md:my-0 md:mx-4 md:ml-9 hoverMenu">
                <Link href="/login">
                    <a className="text-nav py-4 md:py-5 text-darkerOrange font-bold flex justify-center md:justify-start">
                        Login
                    </a>
                </Link>
            </li>
            <li className="my-2 md:my-0 md:mx-4 flex items-center justify-center md:justify-start">
                <Link href="/register">
                    <a className="transition duration-500 ease-in-out text-nav text-darkerOrange font-bold block border-2 border-orange rounded-3xl px-5 py-1 text-center hover:bg-primaryOrange hover:text-white cursor-pointer">
                        Registrar
                    </a>
                </Link>
            </li>
        </>
    );
};
export default MenuExtra;
