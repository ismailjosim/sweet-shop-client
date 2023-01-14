import React from 'react';
import heroImg from '../../assets/images/chair.png';
import '../../styles/Custom.css'

const Hero = () => {
    return (
        <section className='custom-bg bg-slate-50 lg:py-20 py-5'>
            <div className="container mx-auto flex lg:flex-row flex-col-reverse justify-between">
                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <h1 className="text-3xl font-bold sm:text-6xl">Your New Smile Starts Here</h1>
                    <p className="mt-6 mb-8 text-base sm:mb-12 lg:text-justify leading-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                    </p>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <button className='btn btn-primary text-white bg-gradient-to-r from-primary to-accent'>Get Started</button>
                    </div>
                </div>
                <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <img src={heroImg} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
