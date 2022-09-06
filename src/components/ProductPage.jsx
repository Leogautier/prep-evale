import React from 'react';
import { useEffect, useState } from "react";


const ProductPage = () => {

    const [loading, isLoading] = useState(true);
    const [products, setProducts] = useState([]);

    useEffect(() => {

        fetch("https://my.api.mockaroo.com/products.json?key=f4d18fd0")
            .then((reponse) => reponse.json())
            .then((data) => console.log(data));

    }, []);

    return (
        <div>
            <h1>
                Product Screen
            </h1>
            {loading &&
                <div className="spinner-border" role="status">
                </div>
            }
        </div>
    );
};

export default ProductPage;
