import React, { useState } from 'react';
import './slider.css'


const ImageSlider = ( {pictures} ) => {
     const [currentIndex, setCurrentIndex] = useState(0);

     /* La variable isSingleImage évalue si le nombre d'images est égal à 1 */
    const isSingleImage = pictures.length === 1;

    /*fonction ternaire pour déterminer quelle index de la photo doit être affichée après avoir cliqué sur les boutons "Suivant" ou "Précédent" dans un carrousel de photos.*/
    const nextSlide = () => {
        setCurrentIndex(currentIndex === pictures.length - 1 ? 0 : currentIndex + 1);
    };

    const prevSlide = () => {
        setCurrentIndex(currentIndex === 0 ? pictures.length - 1 : currentIndex - 1);
    };

//Les boutons et le compteur sont dans (!isSingleImage) qui vérifie si isSingleImage est faux .Les boutons et le compteur seront affichés ou pas.
    return (
        <div className="carousel">
            <div className="slide">
                <img src={pictures[currentIndex]} alt={""} />
            </div>

            {!isSingleImage && (
                <>
                    <div className={`count ${isSingleImage ? 'hidden' : ''}`}>
                        {currentIndex + 1}/{pictures.length}
                    </div>
                    <button className="prev" onClick={prevSlide}>
                        &#10094;
                    </button>
                    <button className="next" onClick={nextSlide}>
                        &#10095;
                    </button>
                </>
            )}
        </div>
    );
};

export default ImageSlider;
