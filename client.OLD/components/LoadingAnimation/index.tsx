import { AnimationWrapper } from "../../styles/helpers";
import Lottie from "react-lottie";

const LoadingAnimation: React.FC = ({}) => {
    const LOADING__ANIMATION = require("../../public/assets/animations/loading.json");

    return (
        <AnimationWrapper>
            <Lottie
                options={{
                    loop: true,
                    animationData: LOADING__ANIMATION,
                }}
                height={150}
                width={150}
            />
        </AnimationWrapper>
    );
};
export default LoadingAnimation;
