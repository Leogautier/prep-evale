import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="acceuil">Boutique</a>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="produits">Produits</a>
                        </li>
                    </ul>
                    <span className="navbar-text">
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" />
                            <label className="form-check-label">light</label>
                        </div>
                    </span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;