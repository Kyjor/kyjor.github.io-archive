import React from 'react';
import SimpleImageSlider from "react-simple-image-slider";

 export default function ImageSlider() {
        const images = [
            { url: "../../assets/images/twitchIcon.svg" },
            { url: "../../assets/images/twitterIcon.svg" },
            { url: "../../assets/images/ytcon.svg" },
            { url: "../../assets/images/linkedInIcon.svg" },
        ];

        return (
            <div>
                <SimpleImageSlider
                    width={'100%'}
                    height={504}
                    images={images}
                />
            </div>
        );
    }
