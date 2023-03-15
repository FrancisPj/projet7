/*BrowserRouter : C'est le composant qui enveloppe tous les autres composants de routing.
Il fournit un contexte pour la navigation dans l'application.*/
//Routes :Ce composant définit les différentes routes dans l'application.
//Route :Ce composant représente une seule route.

import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "../pages/Home/home";
import About from "../pages/About/about";
import LayoutDefault from "../layouts/LayoutDefault"
import LayoutBlank from "../layouts/LayoutBlank";
import Error from "../pages/Error/error";
import Appart from "../pages/Logement/house";

const Router = () => {
    return (

        <BrowserRouter>
            <Routes>

                <Route element={<LayoutDefault/>}>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="logement/:productId" element={<Appart/>}/>
                </Route>

                <Route element={<LayoutBlank/>}>
                    <Route path="*" element={<Error/>}/>
                    <Route path="logement/error" element={<Error/>}/>
                </Route>


            </Routes>

        </BrowserRouter>
    );
}

export default Router;
