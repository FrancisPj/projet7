// useState pour gérer l'état isCollapsed qui détermine si le Collapse est ouvert ou fermé.

import {useState} from 'react';

// J'importe les icônes de chevron de la bibliothèque React-icons.

import '../Collapse/collapse.css';
const chevron = <i className="fa-solid fa-chevron-up"/>;

// A l'ouverture le Collapse est fermé (valeur par défaut de 'isCollapsed' à 'true').

function Collapse({title, content}) {
    const [active, setActive] = useState(false);

    const handleToggle = (e) => {
        setActive(!active);
    }

    return (
        <div className={`accordion ${active && "active"}`}>
            <div className="accordionTitle" onClick={handleToggle}>
                {title}
                <div>{chevron}</div>
            </div>
            <div className="accordionContent"> {content}</div>
        </div>
    );
}

export default Collapse;
