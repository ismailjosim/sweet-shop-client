import React from 'react';
import About from './HomeSections/About';
import Categories from './HomeSections/Categories';
import Hero from './HomeSections/Hero';
import Newsletter from './HomeSections/Newsletter';


const Home = () => {
    return (
        <section>
            <Hero />
            <Categories />
            <About />
            <Newsletter />
        </section>
    );
};

export default Home;


