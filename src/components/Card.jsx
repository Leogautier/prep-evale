
import React from 'react';

const Card = ( {title, description, image}) => {
    return (
        <>
        
            <div class="col" >
                <img src={image} className="card-img-top"/>
                    <div class="card-body">
                        <h5 class="card-title">{title}</h5>
                        <p class="card-text">{description}</p>
                    </div>
            </div>
        </>
    );
};

export default Card;