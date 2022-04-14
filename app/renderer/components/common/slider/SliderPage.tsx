import { SplideSlide } from '@splidejs/react-splide';
import React from "react";

const SliderPage = ({children}: {children: React.ReactNode}) => {
    return (
        <SplideSlide>
            {children}
        </SplideSlide>
    )
}

export default SliderPage
