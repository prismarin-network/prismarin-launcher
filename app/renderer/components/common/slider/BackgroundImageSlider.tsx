import dynamic from "next/dynamic";

const SliderWrapper = dynamic(() => import('./SliderWrapper'))
const SliderPage = dynamic(() => import('./SliderPage'))

const BackgroundImageSlider = () => {
    return (
        <div>
            <SliderWrapper>
                <SliderPage>
                    <img src="/images/environment.jpeg" alt="Test" />
                </SliderPage>
                <SliderPage>
                    <img src="/images/frostbite.jpeg" alt="Test" />
                </SliderPage>
            </SliderWrapper>
        </div>
    )
}

export default BackgroundImageSlider
