import React from 'react';
import { useEffect, useState } from "react";

const ProductPage = () => {

    const [loading, isLoading] = useState();
    const [products, setProducts] = useState([]);

    useEffect(() => {

        fetch("https://my.api.mockaroo.com/products.json?key=f4d18fd0")
            .then((reponse) => reponse.json())
            .then((data) => setProducts(data));

    }, []);

//{key1: value1, key2:value2, ...}

    return (
        <>
            <div>
                <h1>
                    Product Screen
                </h1>
                {!products ?
                    <div className="spinner-border" role="status">
                    </div> : 
                     <ul>
                        { Object.entries(products).map(([key,value]) => ( 
                            <li key={value.name}>
                                {value.name} {value.price}
                            </li>
                            
                        )
                )}</ul>}

            </div>
           
            
        </>
    );
};

export default ProductPage;
