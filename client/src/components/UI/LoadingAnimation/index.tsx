import Lottie from "react-lottie";

const LoadingAnimation: React.FC = ({}) => {
    const LOADING__ANIMATION = require("../../../../public/animations/loading.json");

    return (
        <div className="my-5">
            <Lottie
                options={{
                    loop: true,
                    animationData: LOADING__ANIMATION,
                }}
                height={150}
                width={150}
            />
        </div>
    );
};
export default LoadingAnimation;
