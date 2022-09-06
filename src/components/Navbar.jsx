import React from 'react';
import { useState } from 'react';

const Navbar = ({color, handleDarkMode}) => {
    

//   const [text, setText] = useState('Light');

//   const onChange = () => {
//     setText((value) => (value === 'Dark' ? 'Light' : 'Dark'))
//   }
    
    
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
                            <input className="form-check-input" type="checkbox"  onClick={handleDarkMode}/>
                            <label className="form-check-label"></label>
                        </div>
                    </span>
                </div>
            </div>
        </nav>
        </>
    );
};

export default Navbar;


// {text}
// onChange={onChange}