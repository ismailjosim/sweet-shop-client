import React from 'react';
import About from './HomeSections/About';
import Categories from './HomeSections/Categories';
import Hero from './HomeSections/Hero';


const Home = () => {
    return (
        <section>
            <Hero />
            <Categories />
            <About />
        </section>
    );
};

export default Home;


