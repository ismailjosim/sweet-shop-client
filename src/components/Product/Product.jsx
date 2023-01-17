import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Product = () => {
    const data = useLoaderData();
    const { name, cover, details, price } = data?.product;

    return (
        <section className="">
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                        <h2 className="text-sm title-font text-gray-500 tracking-widest">PRODUCT NAME</h2>
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">{name}</h1>
                        <p className="leading-relaxed mb-4">{details}</p>
                        <div className="flex border-t border-gray-200 py-2">
                            <span className="text-gray-500">Color</span>
                            <span className="ml-auto text-gray-900">Blue</span>
                        </div>
                        <div className="flex border-t border-gray-200 py-2">
                            <span className="text-gray-500">Size</span>
                            <span className="ml-auto text-gray-900">Medium</span>
                        </div>
                        <div className="flex border-t border-b mb-6 border-gray-200 py-2">
                            <span className="text-gray-500">Condition</span>
                            <span className="ml-auto text-gray-900">Fresh</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="title-font font-medium text-2xl text-gray-900">${price}.00</span>
                            <button className="btn btn-primary rounded-sm text-white transition-all duration-300 hover:bg-secondary hover:border-secondary">Buy Now</button>
                        </div>
                    </div>
                    <img className='lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded' src={cover} alt="" />
                </div>
            </div>
        </section>
    );
};


export default Product;
