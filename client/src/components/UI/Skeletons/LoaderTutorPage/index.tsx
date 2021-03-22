import Container from "@components/container";
import Skeleton from "react-loading-skeleton";

const LoaderTutorPage = () => (
    <div className="relative">
        <div className="w-full h-52 relative bg-cover bg-no-repeat z-10">
            <Skeleton className="h-full" />
            <div className="md:hidden absolute inset-topMobBread flex justify-center right-0 left-0">
                <Skeleton height={30} width={40} className="mx-1" />
            </div>
        </div>

        <Container classes="px-3">
            <div className="flex flex-col md:flex-row">
                <div className="flex-none flex flex-col justify-center md:justify-start items-center -mt-20 relative z-10">
                    <Skeleton
                        circle={true}
                        height={120}
                        width={120}
                        className="-mt-20 block relative"
                    />

                    <div className="flex items-center jusify-center my-4 order-3 md:order-2">
                        <Skeleton height={30} width={20} className="mx-1" />
                        <Skeleton height={30} width={20} className="mx-1" />
                        <Skeleton height={30} width={20} className="mx-1" />
                        <Skeleton height={30} width={20} className="mx-1" />
                        <Skeleton height={30} width={20} className="mx-1" />
                    </div>

                    <div className="flex-1 flex items-center justify-center rounded-xl mt-2 md:mt-4 order-1 md:order-3 py-1">
                        <Skeleton height={30} width={90} />
                    </div>
                </div>
                <div className="flex-2 md:flex-2 flex flex-col items-center md:items-start px-4 md:px-14 mt-8">
                    <Skeleton height={30} width={200} />
                    <Skeleton height={30} width={60} className="my-4" />

                    <div className="hidden md:block">
                        <Skeleton
                            count={4}
                            height={30}
                            width={200}
                            className="mt-4"
                        />
                    </div>

                    <div className="mt-5 flex items-center">
                        <Skeleton height={30} width={90} className="mt-8" />
                    </div>

                    <div className="mt-10 items-center flex flex-col w-full">
                        <Skeleton height={50} />
                        <Skeleton height={50} />
                        <Skeleton height={50} />
                        <Skeleton height={50} />
                    </div>

                    <div className="mt-10 items-center flex flex-col w-full">
                        <Skeleton height={50} />
                        <Skeleton height={50} />
                        <Skeleton height={50} />
                        <Skeleton height={50} />
                    </div>
                </div>
                <div className="flex-1 z-20 -mt-28 md:block hidden">
                    <Skeleton height={500} />
                </div>
            </div>
        </Container>
    </div>
);

export default LoaderTutorPage;
