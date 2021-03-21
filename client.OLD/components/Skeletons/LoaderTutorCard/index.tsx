import Skeleton from "react-loading-skeleton";
import { TutorCardWrapper } from "../../TutorCard/TutorCard.style";
import { SkeletonMargin } from "./LoaderTutorCard.style";

const LoaderTutorCard = () => (
    <TutorCardWrapper isColumn={false}>
        <div className="tutor__fRow">
            <Skeleton circle={true} height={120} width={120} />
            <SkeletonMargin>
                <Skeleton height={30} width={90} />
            </SkeletonMargin>
            <SkeletonMargin margin="20px 0 10px">
                <Skeleton height={30} width={120} />
            </SkeletonMargin>
        </div>
        <div className="tutor__sRow">
            <SkeletonMargin>
                <Skeleton height={30} width={200} />
            </SkeletonMargin>
            <SkeletonMargin margin="5px 0">
                <Skeleton height={20} width={130} />
            </SkeletonMargin>

            <SkeletonMargin>
                <Skeleton count={4} height={30} width={400} />
            </SkeletonMargin>

            <SkeletonMargin>
                <Skeleton height={30} width={120} />
            </SkeletonMargin>
        </div>
        <div className="tutor__tRow">
            <SkeletonMargin margin="10px 0 10px 40px">
                <Skeleton count={6} height={30} width={450} />
            </SkeletonMargin>
        </div>
    </TutorCardWrapper>
);

export default LoaderTutorCard;
