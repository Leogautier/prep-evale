import React from 'react';

const Card = () => {
    return (
        <>
            <div className="card w-25 container">
                <img src="https://picsum.photos/id/237/200/300" className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">test</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </>
    );
};

export default Card;