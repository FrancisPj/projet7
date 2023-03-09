import React from 'react';
import { Link} from "react-router-dom"
import Logo from "../../assets/Logo-White.png"
import '../Footer/footer.css'

function Footer () {
    return (
        <footer>
            <div className={'footer'}>
                <Link to="/">
                    <img className={"logo-white"} src={Logo} alt="Logo de l'entreprise Kasa" />
                </Link>
                <p>© 2020 Kasa. All rights reserved</p>
            </div>
        </footer>
    )
}


export default Footer ;
