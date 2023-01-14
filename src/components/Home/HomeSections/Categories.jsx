import React from 'react';
import { BsFillHeartFill } from "react-icons/bs";
import product01 from '../../../assets/images/sweet01.jpg'
const Categories = () => {
    return (
        <div className='grid grid-cols-4 gap-5 my-10 w-11/12 mx-auto'>
            <a href="/" class="relative block overflow-hidden group">
                <button class="absolute hover:bg-secondary hover:text-primary right-4 top-4 z-10 rounded-full bg-white p-1.5 transition-all duration-500">
                    <span class="sr-only">Wishlist</span>
                    <BsFillHeartFill />
                </button>
                <img src={product01} alt="" class="object-cover w-full h-64 transition duration-500 group-hover:scale-105 sm:h-72" />
                <div class="relative p-6 bg-white border border-gray-100">
                    <span class="whitespace-nowrap bg-primary text-white px-3 py-1.5 text-xs font-medium">New</span>
                    <h3 class="mt-4 text-lg font-medium text-gray-900">Robot Toy</h3>
                    <p class="mt-1.5 text-sm text-gray-700">$14.99</p>
                    <form class="mt-4">
                        <button class="block w-full p-4 text-sm font-medium transition bg-primary text-white rounded hover:scale-105"> Add to Cart</button>
                    </form>
                </div>
            </a>

        </div>
    );
};

export default Categories;
