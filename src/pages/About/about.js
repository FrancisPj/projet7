import Banner from "../../components/Banner-about/bannerAbout";
import './about.css'
import Collapse from "../../components/Collapse/collapse";


function About() {

    const fiabilite = {
        'title': 'Fiabilité',
        'description': 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.'
    };
    const respect = {
        'title': "Respect",
        'description': 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
    }
    const service = {
        'title': "Service",
        'description': "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
    }

    const security = {
        'title': "Sécurité",
        'description': "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
    }

    return (
        <>
                <Banner/>
                <div className={'aboutContainer'}>
                    <div className={'collapseAbout'}>
                        <Collapse title={fiabilite.title} content={fiabilite.description}/>
                        <Collapse title={respect.title} content={respect.description}/>
                        <Collapse title={service.title} content={service.description}/>
                        <Collapse title={security.title} content={security.description}/>
                    </div>
                </div>
        </>
    );

}

export default About;
