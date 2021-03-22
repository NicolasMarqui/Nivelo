import Skeleton from "react-loading-skeleton";
import {
    Banner,
    SingleTutorWrapper,
} from "../../../pages/tutor/[id]/TutorID.style";
import { Container, Overlay, PageWrapper } from "../../../styles/helpers";
import { SkeletonMargin } from "../LoaderTutorCard/LoaderTutorCard.style";

const LoaderTutorPage = () => (
    <PageWrapper pTop="110px">
        <Banner>
            <Overlay border="37px" />
        </Banner>
        <Container>
            <SingleTutorWrapper>
                <div className="st__first">
                    <Skeleton circle={true} height={120} width={120} />
                    <SkeletonMargin margin="20px 0 10px">
                        <Skeleton height={30} width={90} />
                    </SkeletonMargin>
                    <SkeletonMargin margin="20px 0 10px">
                        <Skeleton height={30} width={120} />
                    </SkeletonMargin>
                </div>
                <div className="st__second">
                    <SkeletonMargin>
                        <Skeleton height={30} width={200} />
                    </SkeletonMargin>
                    <SkeletonMargin>
                        <Skeleton height={200} width={450} />
                    </SkeletonMargin>
                    <SkeletonMargin>
                        <Skeleton height={30} width={200} />
                    </SkeletonMargin>
                    <SkeletonMargin>
                        <Skeleton height={200} width={450} />
                    </SkeletonMargin>
                    <SkeletonMargin>
                        <Skeleton height={30} width={200} />
                    </SkeletonMargin>
                    <SkeletonMargin>
                        <Skeleton height={200} width={450} />
                    </SkeletonMargin>
                </div>
                <div className="st__third">
                    <SkeletonMargin>
                        <Skeleton height={430} width={370} />
                    </SkeletonMargin>
                </div>
            </SingleTutorWrapper>
        </Container>
    </PageWrapper>
);

export default LoaderTutorPage;
