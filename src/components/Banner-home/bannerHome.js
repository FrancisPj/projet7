import React from "react";
import bannerImg from "../../assets/bannerHome.png"
import "./bannerHome.css"


function Banner () {

return (
    <div className= { 'banner' }>
        <img className= {'bannerHome' } src={bannerImg} alt={"Vue mer et falaises"}/>
        <div className={'bannerTxt'}>
            <p> Chez vous, partout et ailleurs</p>
        </div>
    </div>
    )
}

export default Banner;
