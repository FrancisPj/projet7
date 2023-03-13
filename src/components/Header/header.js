import {Link, NavLink} from "react-router-dom"
import Logo from '../../assets/logo.png'

import "../Header/header.css"

export default function Header() {
    return (
        <header className="nav-container">
            <Link to="/">
                <img className={'logo'} src={Logo} alt="Kasa. Entreprise immobilière de locations"/>
            </Link>

            <nav>
                <ul>
                    <li>
                        <NavLink
                            className={({isActive}) => (isActive ? "activated" : "link")}
                            to="/">
                            Accueil
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            className={({isActive}) => (isActive ? "activated" : "link")}
                            to="/about">
                            A Propos
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
