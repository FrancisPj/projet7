import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Router from './routes';

/* La méthode 'createRoot' de la bibliothèque 'ReactDOM'.
J'utilise une variable 'root' comme point d'ancrage pour l'application React.
Cette variable peut être utilisée plus tard pour monter l'application React dans le DOM.*/
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <App />
    </Router>
);


