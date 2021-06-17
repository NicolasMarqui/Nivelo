import Container from "@components/container";
import PreTitle from "@components/UI/PreTitle";
import Section from "@components/UI/Section";
import Title from "@components/UI/Title";
import Link from "next/link";
import List4u from "../List4u";
import { useTranslation } from "next-i18next";

const Categories4u: React.FC = ({}) => {
    const { t } = useTranslation("home");

    return (
        <Section classes="z-0 dark:bg-gray-800">
            <Container classes="z-0 relative ">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="flex flex-col flex-2">
                        <PreTitle classes="text-center md:text-left">
                            {t("pre4u")}
                        </PreTitle>
                        <Title
                            classes="text-center md:text-left md:text-6xl md:w-3/4"
                            smaller
                        >
                            {t("title4u")}
                        </Title>
                    </div>
                    <div className="hidden sm:flex flex-1 justify-end">
                        <Link href="/faq">
                            <a className="w-full md:w-1/3 text-center cursor-pointer  p-3 mt-4 bg-primaryOrange text-white rounded shadow hover:bg-lightOrange">
                                {t("cta4u")}
                            </a>
                        </Link>
                    </div>
                </div>

                <List4u />
            </Container>
        </Section>
    );
};
export default Categories4u;
