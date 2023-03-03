import data from '../../data/logement_data.json';
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import Tags from "../../components/Tags/tags";
import Collapse from "../../components/Collapse/collapse";
import './house.css'

import React from "react";

/*import Slider from "../Slider/slider";*/

// Le composant fonction parent qui appelle les composants fonction enfants
function logement() {
    // On récupere l'id dans la constante "productId"
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {productId} = useParams();
// On mappe "data" pour récup l'appartement (et ses caractéristiques) qui a pour id celui renseigné dans les paramètres d'url
    const logement = data.find((logement) => logement.id === productId);
    // Destructuration :  permet directement de déclarer une variable et de lui assigner la valeur d'une propriété d'un objet
    const {title, location, rating, host: {name, picture}, equipments, description, pictures} =
        logement;

    return (
        <>
            {/*<Slider />*/}
            <section className={'logement'}>
                <div>
                    <div className={'div'}>
                        <img src="" alt=""/>
                    </div>
                </div>

                <div className={'logement_container'}>

                    <div className="logement_infos_loc">
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

                        </div>
                        {/*<div className={'logement_host'}>*/}
                        {/*</div>*/}

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

// 1 Récupérer l'id du produit dans l'url
// 2 Récupérer la data depuis le fichier data en fonction de l'id
// 3 Afficher les informations dans la page ou dans les composants

// const rating = [1, 2, 3, 4, 5]
//  const [logement, setLogement] =[0]


}

export default logement;
