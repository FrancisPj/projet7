import data from '../../data/logement_data.json';

import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import './house.css'

import Tags from "../../components/Tags/tags";
import Collapse from "../../components/Collapse/collapse";
import Slider from "../../components/Slider/slider";
import {StarRating} from "../../components/StarRating/starRating";
import Error from "../Error/error";


function Appart() {

    const {productId} = useParams();

    const [logement, setLogement] = useState({
        tags: [],
        equipments: [],
        pictures: [],
        rating: "",
        host: { name: "", picture: "" },
    });

    const [error, setError] = useState(false);

    useEffect(() => {
        // Vérifier si productId est valide
        const isProductIdValid = data.some((logement) => logement.id === productId);
        if (!isProductIdValid) {
            setError(true);
        } else {
            data.map((logement) => {
                if (logement.id === productId) {
                    setLogement(logement);
                }
                return null;
            });
        }
    }, [productId]);

    if (error) {
        return <Error/>;
    }

    if (logement.id === undefined) {
        return <Error />;

    }
    console.log('Error')
    return (
        <>
            <section className={'logement'}>
                <div>
                    <Slider pictures={logement.pictures}/>
                </div>

                <div className={'logement_container'}>

                    <div className={'logement_infos_loc'}>
                        <h1 className={'logement_title'}>{logement.title}</h1>
                        <p className={'logement_location'}>{logement.location}</p>

                        <div className={'logement_tags'}>
                            <Tags logement={logement}/>
                        </div>
                    </div>

                    <div className="user_stars">
                        <div className="logement_users">
                            <h3>{logement.host.name}</h3>
                            <img src={logement.host.picture} alt={'Propriétaire du logement'}/>
                        </div>
                        {logement && logement.rating && <StarRating rating={logement.rating}/>}
                    </div>

                </div>

                <div className={'logement_dropdowns'}>
                    <Collapse title={'Description'} content={logement.description}/>
                    <Collapse title={'Equipments'} content={logement.equipments.map((equipment, index) => (
                        <li className={'logement_list'} key={index}>{equipment}</li>
                    ))}/>
                </div>

            </section>
        </>
    )
}

export default Appart;
