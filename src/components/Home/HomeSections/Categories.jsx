import React, { useEffect, useState } from 'react';
import { BsFillHeartFill } from "react-icons/bs";
import product01 from '../../../assets/images/sweet01.jpg';



const Categories = () => {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setProducts(data))


    }, [])




    return (
        <div className='grid grid-cols-4 gap-5 my-10 w-11/12 mx-auto'>
            {
                products.map((product, idx) => {
                    const { categoryId, cover, details, img01, img02, name } = product;

                    return <a href="/" className="relative block overflow-hidden group">
                        <button className="absolute hover:bg-secondary hover:text-primary right-4 top-4 z-10 rounded-full bg-white p-1.5 transition-all duration-500">
                            <span className="sr-only">Wishlist</span>
                            <BsFillHeartFill />
                        </button>
                        <img src={product01} alt="" className="object-cover w-full h-64 transition duration-500 group-hover:scale-105 sm:h-72" />
                        <div className="relative p-6 bg-white border border-gray-100">
                            <span className="whitespace-nowrap bg-primary text-white px-3 py-1.5 text-xs font-medium">New</span>
                            <h3 className="mt-4 text-lg font-medium text-gray-900">{name}</h3>
                            <p className="mt-1.5 text-sm text-gray-700">$14.99</p>
                            <form className="mt-4">
                                <button className="block w-full p-4 text-sm font-medium transition bg-primary text-white rounded hover:scale-105"> Add to Cart</button>
                            </form>
                        </div>
                    </a>
                })
            }


        </div>
    );
};

export default Categories;
