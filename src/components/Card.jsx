
import React from 'react';

const Card = ({title, description, image}) => {
    return (
        <>
            <div className="d-flex card m-5" >
                <img src={image} className="card-img-top"/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                    </div>
            </div>
        </>
    );
};

export default Card;