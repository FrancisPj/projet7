import data from '../../data/logement_data.json';
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";


import Tags from "../../components/Tags/tags";
import Collapse from "../../components/Collapse/collapse";
import './house.css'
import Slider from "../../components/Slider/slider";
import {StarRating} from "../../components/StarRating/starRating";



/*import Slider from "../Slider/slider";*/

// Le composant fonction parent qui appelle les composants fonction enfants
function Appart() {
    // On récupere l'id dans la constante "productId"
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {productId} = useParams();
// On mappe "data" pour récup l'appartement (et ses caractéristiques) qui a pour id celui renseigné dans les paramètres d'url
    const logement = data.find((logement) => logement.id === productId);
    // Destructuration :  permet directement de déclarer une variable et de lui assigner la valeur d'une propriété d'un objet
    const {title, location, rating, host: {name, picture}, equipments, description, pictures} =
        logement;

    const [ setLogement] = useState(null);

    useEffect(() => {
        fetch("logement_data.json")
            .then(response => response.json())
            .then(data => setLogement(data));
    }, []);


    // const [logement, setLogement] = useState({
    //     tags: [],
    //     pictures: [],
    //     rating: "",
    //        })
    //
    //
    //
    // useEffect(() => {
    //     data.map((house) => {
    //         if(house.id === productId){
    //             setLogement(house)
    //         }
    //         return null
    //     });
    // }, [productId])


    return (
        <>

            <section className={'logement'}>
                <div>

                        <Slider pictures={ logement.pictures } />

                </div>

                <div className={'logement_container'}>

                    <div className={'logement_infos_loc'}>
                        <h1 className={'logement_title'}>{title}</h1>
                        <p className={'logement_location'}>{location}</p>

                        <div className={'logement_tags'}>
                            <Tags logement={logement}/>
                        </div>
                    </div>

                    <div className="user_stars">
                        <div className="logement_users">
                            <h3>{name}</h3>
                            <img src={picture} alt={'Propriétaire du logement'}/>
                        </div >


                            {logement && logement.rating && <StarRating rating={logement.rating} />}


                    </div>
                </div>

                <div className={'logement_dropdowns'}>
                    <Collapse title={'Description'} content={description}/>
                    <Collapse title={'Equipments'} content={equipments.map((equipment, index) => (
                        <li className={'logement_list'} key={index}>{equipment}</li>
                    ))}/>
                </div>
            </section>
        </>
    )
}

export default Appart;