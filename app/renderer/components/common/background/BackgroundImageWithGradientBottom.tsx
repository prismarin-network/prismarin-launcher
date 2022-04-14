import React from "react";

interface BackgroundImageWithGradientBottomProps {
    imageSRC: string,
    classes: string,
    children?: React.ReactNode
}

const BackgroundImageWithGradientBottom = ({imageSRC, classes = "h-[500px]", children}: BackgroundImageWithGradientBottomProps) => {
    return (
        <div className={`relative z-0 w-full bg-cover ${classes}`} style={{backgroundImage: `url(${imageSRC})`}}>
            <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t to-transparent from-midnight" />
            <div className="relative z-10 h-full">
                {children}
            </div>
        </div>
    )
}

export default BackgroundImageWithGradientBottom
