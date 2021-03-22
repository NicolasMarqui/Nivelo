import Skeleton from "react-loading-skeleton";

const LoaderTutorCard = () => (
    <div className="flex flex-col md:flex-row rounded-3xl items-center md:items-start  mt-4 px-4 py-3 md:py-7">
        <div className="flex-none flex flex-col justify-center items-center">
            <Skeleton circle={true} height={120} width={120} />

            <div className="flex-1 flex items-center jusify-center my-4 order-3 md:order-2">
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
        <div className="flex-2 px-4 md:px-14 md:mr-4 md:border-r-2 md:border-gray-300 cursor-pointer">
            <div className="flex flex-col items-center md:items-start">
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
            </div>
        </div>
        <div className="flex-1.5 w-full">
            <Skeleton height={200} />
        </div>
    </div>
);

export default LoaderTutorCard;
