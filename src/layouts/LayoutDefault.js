/* j'importe le composant 'Outlet' de la bibliothèque 'React Router DOM'. 'Outlet' est utilisé pour rendre les enfants de l'itinéraire actuel.*/
import {Outlet} from 'react-router-dom';
import Header from '../components/Header/header';
import Footer from '../components/Footer/footer';


const LayoutDefault = () => {

    return (
        <>
            <Header/>
            <main className={'mainAboutContainer'}>
                <Outlet/>
            </main>
            <Footer/>
        </>
    )
}

export default LayoutDefault;


