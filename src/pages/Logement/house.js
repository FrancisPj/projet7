import data from '../../data/logement_data.json';
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";


import Tags from "../../components/Tags/tags";
import Collapse from "../../components/Collapse/collapse";
import './house.css'
import Slider from "../../components/Slider/slider";
import {StarRating} from "../../components/StarRating/starRating";
import Error from '../Error/error';

// Le composant fonction parent qui appelle les composants fonction enfants
function Appart() {
    // On récupere l'id dans la constante "productId"
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {productId} = useParams();
// On mappe "data" pour récup l'appartement (et ses caractéristiques) qui a pour id celui renseigné dans les paramètres d'url
   /* const logement = data.find((logement) => logement.id === productId);*/
    // Destructuration :  permet directement de déclarer une variable et de lui assigner la valeur d'une propriété d'un objet
 /*   const {title, location, rating, host: {name, picture}, equipments, description, pictures} =
        logement;*/

    const [logement, setLogement] = useState({
        title: [],
        location: [],
        host:  [],
        equipments: [],
        description: [],
        tags: [],
        pictures: [],
        picture: [],
        rating: "",

         });

    const [error, setError] = useState(false);

    useEffect(() => {
        const logementData = data.find((logement) => logement.id === productId);
        setLogement(logementData);

        fetch("data.json")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Erreur lors du chargement des données !");
                }
                return response.json();
            })

            .then(data => {
                setLogement(data);
            })

            .catch((error) => {
                console.error(error);
                setError(false);
            });

    }, []);

    if (error) {
        return <div>Une erreur est survenue !</div>;
    }

    if (!logement) {
        return <div> Aucun logement trouvé !
        {<Error />}
        </div>;
    }


    /*
        useEffect(() => {
            fetch("logement_data.json")
                .then(response => response.json())
                .then(data => setLogement(data));

        }, []);*/


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
                        </div >


                            {logement && logement.rating && <StarRating rating={logement.rating} />}


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
