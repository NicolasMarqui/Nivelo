import Menu from "@components/Menu";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import languages from "@utils/JSON/languages.json";

interface MobileNavSideProps {}

const MobileNavSide: React.FC<MobileNavSideProps> = ({}) => {
    const router = useRouter();

    return (
        <div className="flex flex-col dark:bg-gray-700">
            <Image src="/logo.svg" width={170} height={50} />

            <div className="mt-3">
                <Menu pageProps />
            </div>

            <div className="mt-14">
                {languages
                    .filter((cl) => cl.locale !== router.locale)
                    .map((l) => (
                        <div
                            className="hover:scale-105 transform hover:bg-gray-50"
                            key={l.locale}
                        >
                            <Link href={router.asPath} locale={l.locale}>
                                <img
                                    src={`/icons/${l.locale}.png`}
                                    className="w-16"
                                    alt="language"
                                />
                            </Link>
                        </div>
                    ))}
            </div>
        </div>
    );
};
export default MobileNavSide;
