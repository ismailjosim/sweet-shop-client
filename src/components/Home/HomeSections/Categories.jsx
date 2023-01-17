import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { BsFillHeartFill } from "react-icons/bs";
import { BsCurrencyDollar } from "react-icons/bs";
import { Link } from 'react-router-dom';
import SectionHeading from '../../Shared/SectionHeading';
const Categories = () => {


    const { data: products = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/products");
            const data = await res.json();
            return data?.products;
        }
    })



    const heading = {
        primary: "FEATURED PRODUCTS", secondary: "Best Selling Customized Cake"
    }

    return (
        <div>
            <SectionHeading heading={heading} />
            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 my-10 w-11/12 mx-auto'>
                {
                    products.map((product, idx) => {
                        const { cover, name, price, details, categoryId } = product;

                        return <div key={idx} className="relative block overflow-hidden group">
                            <button className="absolute hover:bg-secondary hover:text-primary right-4 top-4 z-10 rounded-full bg-white p-1.5 transition-all duration-500">
                                <span className="sr-only">Wishlist</span>
                                <BsFillHeartFill />
                            </button>
                            <img src={cover} alt="" className="object-cover w-full h-64 transition duration-500 group-hover:scale-105 sm:h-72" />
                            <div className="relative p-6 bg-white border border-gray-100">
                                <div className="flex justify-between">
                                    <span className="whitespace-nowrap bg-primary text-white px-3 py-1.5 text-xs font-medium">New</span>
                                    <span className="flex items-center justify-center rounded-full  text-base font-semibold bg-secondary text-white px-2" >
                                        <BsCurrencyDollar />
                                        <p className="whitespace-nowrap">{price}</p>
                                    </span>
                                </div>
                                <h3 className="mt-4 text-lg font-medium text-gray-900">{name}</h3>
                                <p className="mt-1.5 text-secondary font-light">{details.slice(0, 100)}...<span className='font-semibold text-primary'>Read More</span></p>
                                <form className="mt-4">
                                    <Link to={`/product/${ categoryId }`} className="btn btn-primary w-full text-sm font-medium transition text-white rounded hover:scale-105"> Add to Cart</Link>
                                </form>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default Categories;
