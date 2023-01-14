import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

import slide01 from '../../assets/images/sweet01.jpg';
import slide02 from '../../assets/images/sweet02.jpg';
import slide03 from '../../assets/images/sweet03.jpg';
import slide04 from '../../assets/images/sweet04.jpg';
import slide05 from '../../assets/images/sweet06.jpg';
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

const Hero = () => {
    const slides = [
        { title: "Sweet To Sweeten", sub: "Your Moments.", pic: slide01 },
        { title: "Choose From exceptional", sub: "Range of sweet.", pic: slide02 },
        { title: "We Bring Out", sub: "The Best In Sweets.", pic: slide03 },
        { title: "The Sweet Treat", sub: "That Smiles Back.", pic: slide04 },
        { title: "You Deserve", sub: "A Sweet Treat Today.", pic: slide05 },
    ]



    const properties = {
        prevArrow: <button className='btn btn-primary text-white text-lg ml-5'><AiOutlineArrowLeft /></button>,
        nextArrow: <button className='btn btn-primary text-white text-lg mr-5'><AiOutlineArrowRight /></button>
    }

    return (
        <Fade {...properties}>
            {slides.map((slide, idx) => {
                const { title, sub, pic } = slide
                return <section key={idx} style={{ backgroundImage: `url(${ pic })` }} class="relative bg-cover bg-center bg-no-repeat">
                    <div class="absolute inset-0 bg-secondary/25 sm:bg-transparent sm:bg-gradient-to-r sm:from-secondary/95 sm:to-secondary/25"></div>
                    <div class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
                        <div class="max-w-xl text-center sm:text-left text-white">
                            <h1 class="text-3xl font-extrabold sm:text-5xl flex flex-col gap-3">
                                <span>{title}</span>
                                <strong class="block font-extrabold text-rose-700">
                                    {sub}
                                </strong>
                            </h1>
                            <p class="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
                                Gets your taste buds a jolt of sweetness. Taste our candy and fall in love. The candy store that will make you want more. Serving all the candies in town since 2020.
                            </p>
                            <div class="mt-8 flex flex-wrap gap-4 text-center">
                                <button className='btn btn-secondary text-white hover:btn-primary active:btn-primary hover:text-white'>Get Started</button>
                                <button className='btn btn-primary text-white flex gap-1'><span>Shop Now</span> <FaShoppingCart className='text-xl' /></button>
                            </div>
                        </div>
                    </div>
                </section>

            })
            }
        </Fade>

    );
};

export default Hero;

