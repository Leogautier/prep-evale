import React from 'react';
import { useState } from 'react';

const Navbar = ({color, handleDarkMode, texte, changText, HomeScreen, ProductScreen }) => {
    


    
    
    return (
        <>
        <nav className={`${color} navbar navbar-expand-lg `} >
            <div className="container-fluid">
                <span className="navbar-brand" onClick={HomeScreen}>Boutique</span>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <span className="nav-link active" onClick={ProductScreen}>Produits</span>
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