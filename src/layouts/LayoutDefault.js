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


