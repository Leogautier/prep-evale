import React from 'react';
import { useState } from 'react';

const Navbar = ({color, handleDarkMode, texte, changText}) => {
    


    
    
    return (
        <>
        <nav className={`${color} navbar navbar-expand-lg `} >
            <div className="container-fluid">
                <a className="navbar-brand" href="acceuil">Boutique</a>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" href="produits">Produits</a>
                        </li>
                    </ul>
                    <span className="navbar-text">
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" onChange={changText} onClick={handleDarkMode}/>
                            <label className="form-check-label">{texte}</label>
                        </div>
                    </span>
                </div>
            </div>
        </nav>
        </>
    );
};

export default Navbar;


// 
// 