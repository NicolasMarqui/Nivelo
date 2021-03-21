import Link from "next/link";
import Container from "@components/container";

interface CTAProps {}

const CTA: React.FC<CTAProps> = ({}) => {
    return (
        <Container classes="z-20 relative">
            <div className="flex rounded-xl bg-primaryOrange p-8 md:w-3/4 md:-mt-28 items-center justify-center md:justify-end">
                <Link href="/login">
                    <a className="mr-3 transition duration-500 ease-in-out text-base text-darkerOrange font-bold block bg-white rounded-3xl px-7 py-1 text-center hover:bg-black hover:text-white cursor-pointer">
                        Login
                    </a>
                </Link>
                <Link href="/register">
                    <a className="transition duration-500 ease-in-out text-base text-darkerOrange font-bold block bg-white rounded-3xl px-7 py-1 text-center hover:bg-black hover:text-white cursor-pointer">
                        Registrar
                    </a>
                </Link>
            </div>
        </Container>
    );
};
export default CTA;
