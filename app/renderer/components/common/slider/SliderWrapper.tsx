import { Splide } from '@splidejs/react-splide';
import React from "react";

const SliderWrapper = ({children}: {children: React.ReactNode}) => {
    return (
        <Splide aria-label="My Favorite Images">
            {children}
        </Splide>
    )
}

export default SliderWrapper
