import Lottie from "lottie-react";
import loaderAnimation from "../public/animations/loader.json"

const Loader = () => {
    return (
        <div className="mx-auto h-[400px] w-[400px]">
            <Lottie
                loop={true}
                animationData={loaderAnimation}
            />
        </div>
    )
}

export default Loader
