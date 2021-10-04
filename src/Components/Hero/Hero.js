import './Hero.css';

import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="text-gray-600 body-font px-12">
            <div className="container mx-auto flex px-5 py-6 md:flex-row flex-col items-center md:p-0 lg:px-5">
                <div className=" md:w-3/6  md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font text-md md:text-xl lg:text-2xl xl:text-7xl font-bold  mb-4 text-gray-600">Join & Learn  anytime <br />
                        <span className="title-green">anywhere<span className="doted"></span></span>

                    </h1>
                    <p className="mb-8 leading-relaxed text-sm md:text-sm lg:text-lg font-medium text-gray-400">Online learning is education that takes place over the Internet. It is often referred to as e-learning.</p>
                    <div className="flex justify-center">
                        <Link to="/courses"><button className="hero-btn inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded-r-lg rounded-tl-lg text-lg">Get Started</button></Link>

                    </div>
                </div>
                <div className="lg:flex-grow">
                    <img className="object-cover object-center rounded w-full" alt="hero" src="https://image.freepik.com/free-vector/online-tutorials-concept_52683-37480.jpg" />
                </div>
            </div>
        </section>
    );
};

export default Hero;