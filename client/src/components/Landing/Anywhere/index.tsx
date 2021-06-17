import Container from "@components/container";
import PreTitle from "@components/UI/PreTitle";
import Section from "@components/UI/Section";
import Title from "@components/UI/Title";
import Image from "next/image";
import { useTranslation } from "next-i18next";

const AnyWhere: React.FC = ({}) => {
    const { t } = useTranslation("home");

    return (
        <div className="dark:bg-gray-800">
            <Section
                classes="border-b-2 border-gray-200 dark:border-gray-700"
                hasBgDetail
            >
                <Container classes="px-4 z-20">
                    <div className="flex flex-col md:flex-row justify-between">
                        <div className="flex-1 order-2 md:pl-20 z-20">
                            <PreTitle classes="text-center md:text-left">
                                {t("preAny")}
                            </PreTitle>
                            <Title classes="text-center md:text-left md:text-6xl md:w-3/4">
                                {t("titleAny")}
                            </Title>

                            <div className="flex mt-9 flex-col md:flex-row items-center justify-between">
                                <div className="flex-1">
                                    <h3 className="font-bold text-lg text-center md:text-left">
                                        {t("any1")}
                                    </h3>
                                    <p className="text-desc dark:text-gray-200 text-center md:text-left mt-1 md:w-3/4">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore.
                                    </p>
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-bold text-lg text-center md:text-left">
                                        {t("any2")}
                                    </h3>
                                    <p className="text-desc dark:text-gray-200 text-center md:text-left mt-1 md:w-3/4">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore.
                                    </p>
                                </div>
                            </div>
                            <div className="flex mt-9 flex-col md:flex-row items-center justify-between">
                                <div className="flex-1">
                                    <h3 className="font-bold text-lg text-center md:text-left">
                                        Lorem ipsum dolor sit amet.
                                    </h3>
                                    <p className="text-desc dark:text-gray-200 text-center md:text-left mt-1 md:w-3/4">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore.
                                    </p>
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-bold text-lg text-center md:text-left">
                                        Lorem ipsum dolor sit amet.
                                    </h3>
                                    <p className="text-desc dark:text-gray-200 text-center md:text-left mt-1 md:w-3/4">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 order-1 -mt-32">
                            <Image
                                src="/icons/detailNivelo.svg"
                                width={634}
                                height={779}
                                className="rounded-lg object-cover"
                                alt="ImageDetail"
                            />
                        </div>
                    </div>
                </Container>
            </Section>
        </div>
    );
};
export default AnyWhere;
