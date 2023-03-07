import React from 'react';
import { useState } from "react";
import './slider.css'


const ImageSlider = ( {pictures} ) => {
  /*  const chevron = <i className="fa-solid fa-chevron-left"/>;*/
    const [currentIndex, setCurrentIndex] = useState(0);

   /* const goToPrevSlide = () => {
        const lastIndex = pictures.length - 1;
        const shouldResetIndex = currentIndex === 0;
        const index = shouldResetIndex ? lastIndex : currentIndex - 1;

        setCurrentIndex(index);
    };

    const goToNextSlide = () => {
        const lastIndex = pictures.length - 1;
        const shouldResetIndex = currentIndex === lastIndex;
        const index = shouldResetIndex ? 0 : currentIndex + 1;

        setCurrentIndex(index);
    };*/


    return (
        <div className="carousel">
            <div className="slide">
                <img style={{ backgroundImage: `url(${pictures[currentIndex]})` }} alt={''}/>

             {/*   <button className="prev" onClick={goToPrevSlide}>{chevron}</button>
                <button className="next" onClick={goToNextSlide}>{chevron}</button>*/}
            </div>
            <div className="count">{currentIndex + 1}/{pictures.length}</div>
            <button className="prev" onClick={() => setCurrentIndex((currentIndex - 1 + pictures.length) % pictures.length)}>
                &#10094; {/*entité HTML pour le caractère « moins que » ou « inférieur à » (<).*/}
            </button>
            <button className="next" onClick={() => setCurrentIndex((currentIndex + 1) % pictures.length)}>
                &#10095;
            </button>
        </div>
    );
}


export default ImageSlider;
