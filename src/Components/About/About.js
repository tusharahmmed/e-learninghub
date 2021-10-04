import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                <img className="lg:w-3/6 md:w-2/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://elearning.company/img/about-elearning-company-team.png" />
                <div className="text-center lg:w-2/3 w-full">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-700">About Us</h1>
                    <p className="mb-8 leading-relaxed">Looking for a reliable eLearning production company? We are a full-service learning design and development vendor based in New York and serving customers nationwide throughout the USA. We stand out from other eLearning development companies as a leader that offers cutting-edge learning solutions to businesses, government agencies, educational institutions, and non-profits.</p>
                    <div className="flex justify-center">
                        <Link to="/contact">
                            <button className="inline-flex text-white bg-green-400 border-0 py-2 px-6 focus:outline-none hover:bg-green-500 rounded text-lg">Contact Us</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;