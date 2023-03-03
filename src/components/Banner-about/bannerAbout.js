import React from "react";
import bannerImg from "../../assets/bannerAbout.png"
import "./bannerAbout.css"


function BannerAbout () {

return (
    <div className= { 'bannerAbout' }>
        <img className= {'bannerAbout' } src={bannerImg} alt={"Vue montagnes et forêts"}/>

    </div>
    )
}

export default BannerAbout;
