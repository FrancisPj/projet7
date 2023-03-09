/* Importation des données du fichier JSON "logement_data.json". */
import data from '../../data/logement_data.json';

/* Importation des modules React nécessaires pour le composant, à savoir le module React, le hook useEffect et le hook useState. */
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import './house.css'

/* Importation des composants  */
import Tags from "../../components/Tags/tags";
import Collapse from "../../components/Collapse/collapse";
import Slider from "../../components/Slider/slider";
import {StarRating} from "../../components/StarRating/starRating";
import Error from '../Error/error';


function Appart() {

    /*je récupère un identifiant de produit à partir de l'URL à l'aide du hook "useParams" de React Router" */
    const {productId} = useParams();

    /* J'utilise également le hook "useState" pour initialiser l'état du composant, pour stocker les données */
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

    /* Si une erreur se produit lors de la récupération des données, elle est gérée à l'aide du hook "useState"  et un composant d'erreur est affiché. */
    const [error, setError] = useState(false);

    /* J'utilise le hook "useEffect" pour déclencher la récupération des données et leur stockage dans l'état du composant. */
    useEffect(() => {

        /* La méthode "find" pour rechercher dans le fichier JSON le logement correspondant à l'identifiant de produit extrait.*/
        const logementData = data.find((logement) => logement.id === productId);
        setLogement(logementData);

        fetch("data.json")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Erreur lors du chargement des données !");
                }
                return response.json()
            })

            .then(data => {
                setLogement(data);
            })
            .catch((error) => {
                setError(false);
            });

    }, [productId]);

    if (error) {
        return <div>Une erreur est survenue !</div>;
    }

    if (!logement) {
        return <div> Aucun logement trouvé !
        {<Error />}
        </div>;
    }

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
