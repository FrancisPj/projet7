import {Outlet} from 'react-router-dom';
import Header from '../components/Header/header';

const LayoutBlank = () => {

    return (
        <>
            <Header/>
            <main>
                <Outlet/>
            </main>

        </>
    )
}

export default LayoutBlank;
