import React from "react";
import {BrowserRouter as Router, Routes, Route, Link, NavLink} from 'react-router-dom'
import Cats from "../Cat/Page-main/Cats";
import LoveCats from "../Cat/Page-width-like-cats/LoveCats";

const Headers = () => {
    return (
        <Router>
            <div className="header__wrapper">
                <ul className="wrapper__list">
                    <NavLink to="/">Все котики</NavLink>
                    <NavLink to="/LoveCats">Любимые котики</NavLink>
                </ul>
                <Routes>
                    <Route path="/" element={<Cats/>}/>
                    <Route path="/LoveCats" element={<LoveCats/>}/>
                </Routes>
            </div>
        </Router>
    )
}



export default Headers;