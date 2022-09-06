import React from 'react';
import { useEffect, useState } from "react";
import axios from 'axios';

const ProductPage = () => {


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

        </div>
    );
};

export default ProductPage;