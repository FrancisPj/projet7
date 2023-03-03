import React from 'react';
import { NavLink} from "react-router-dom"
import Logo from "../../assets/Logo-White.png"
import '../Footer/footer.css'

function Footer () {
    return (
        <footer>
            <div className={'footer'}>
                <NavLink to="/">
                    <img className={"logo-white"} src={Logo} alt="Logo de l'entreprise Kasa" />
                </NavLink>
                <p>© 2020 Kasa. All rights reserved</p>
            </div>
        </footer>
    )
}


export default Footer ;
