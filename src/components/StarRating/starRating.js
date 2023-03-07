import React from "react";
import './starRating.css'

export function StarRating({ rating }) {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        const starClass = i <= rating ? "star selected" : "star";
        stars.push(<span key={i} className={starClass}>★</span>);
    }

    return (
        <div className="starsRating">
            {stars}
        </div>
    );
}
