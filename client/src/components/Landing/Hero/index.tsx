import Container from "@components/container";
import Search from "@components/Search";
import ImagesHero from "@components/UI/ImagesHero";
import ScrollAnimation from "@components/UI/ScrollAnimation";
import Title from "@components/UI/Title";
import { useTranslation } from "next-i18next";
import { motion } from "framer-motion";

const Hero: React.FC = ({}) => {
    const { t } = useTranslation("home");

    return (
        <div className="relative border-b-2 border-gray-200 dark:border-darkPrimaryBorder heroHeight">
            <Container classes="h-full px-4 z-2">
                <div className="flex flex-col md:flex-row items-center justify-center h-full">
                    <motion.div
                        className="flex items-center flex-col justify-center z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                    >
                        <Title classes="text-center md:text-heroSize md:w-2/3 text-white mx-auto">
                            {t("hero")}
                        </Title>
                        <p className="text-center mx-auto text-white md:w-2/4 mt-4 md:mt-3">
                            {t("heroDesc")}
                        </p>

                        <Search />
                        <ScrollAnimation />
                    </motion.div>
                    <div className="absolute inset-0 flex-2 overflow-hidden">
                        <ImagesHero />
                    </div>
                </div>
            </Container>
        </div>
    );
};
export default Hero;
