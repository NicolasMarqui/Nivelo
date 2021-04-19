import MenuExtra from "@components/MenuExtra";
import checkIfActive from "@utils/checkIfActive";
import { createUrqlClient } from "@utils/createUrqlClient";
import { withUrqlClient } from "next-urql";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMeSimplifiedQuery } from "src/generated/graphql";

interface MenuProps {}

const Menu: React.FC<MenuProps> = ({}) => {
    const [{ data, fetching, error }] = useMeSimplifiedQuery();
    const router = useRouter();

    return (
        <ul className="flex flex-col md:flex-row">
            <li
                className={`my-1 md:my-0 md:px-3 lg:px-5 hoverMenu ${checkIfActive(
                    router.pathname,
                    "/"
                )}`}
            >
                <Link href="/">
                    <a className="text-nav md:text-base lg:text-nav py-4 md:py-5 block">
                        Home
                    </a>
                </Link>
            </li>
            <li
                className={`my-1 md:my-0 md:px-3 lg:px-5 hoverMenu ${checkIfActive(
                    router.pathname,
                    "/tutors"
                )}`}
            >
                <Link href="/tutors">
                    <a className="text-nav md:text-base lg:text-nav py-4 md:py-5 block">
                        Tutores
                    </a>
                </Link>
            </li>
            <li
                className={`my-1 md:my-0 md:px-3 lg:px-5 hoverMenu ${checkIfActive(
                    router.pathname,
                    "/faq"
                )}`}
            >
                <Link href="/faq">
                    <a className="text-nav md:text-base lg:text-nav py-4 md:py-5 block">
                        F.A.Q
                    </a>
                </Link>
            </li>
            <li
                className={`my-1 md:my-0 md:px-3 lg:px-5 hoverMenu md:border-r-2 md:border-gray-200`}
            >
                <Link href="/#tutorial">
                    <a className="text-nav md:text-base lg:text-nav py-4 md:py-5 block">
                        Como funciona?
                    </a>
                </Link>
            </li>
            <li
                className={`my-1 md:my-0 md:px-3 lg:px-5 hoverMenu md:border-r-2 md:border-gray-200 ${checkIfActive(
                    router.pathname,
                    "/become-tutor"
                )}`}
            >
                <Link href="/become-tutor">
                    <a className="text-nav md:text-base lg:text-nav py-4 md:py-5 block">
                        Seja um tutor
                    </a>
                </Link>
            </li>
            <MenuExtra fetching={fetching} data={data} error={error} />
        </ul>
    );
};
export default withUrqlClient(createUrqlClient)(Menu);
