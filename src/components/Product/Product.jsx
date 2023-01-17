import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Product = () => {
    const data = useLoaderData();
    const { name, cover, details, img01, img02, price } = data.product;
    return (
        <div>
            {name}
        </div>
    );
};

export default Product;
