import React from 'react';
import './Header.css';
import logo from '../../img/logo/header-logo-1.png';
import { Link, NavLink } from 'react-router-dom';



const Header = () => {

    return (
        <header className="text-gray-600 body-font px-12">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row md:p-0 lg:p-5 items-center">
                <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <img src={logo} alt="" width="200" />
                </Link>
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    <NavLink exact to="/" className="mr-5 font-bold ">Home</NavLink>
                    <NavLink to="/courses" className="mr-5 font-bold ">Our Courses</NavLink>
                    <NavLink to="about" className="mr-5 font-bold ">About Us</NavLink>
                    <NavLink to="/contact" className="mr-5 font-bold ">Contact</NavLink>
                </nav>
                <Link to="/courses">
                    <button className="inline-flex items-center bg-green-500 border-0 rounded-l-lg font-bold rounded-tr-lg py-1 px-5 py-2 focus:outline-none hover:bg-green-600 text-base mt-4 md:mt-0">Join Now
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button></Link>
            </div>
        </header>
    );
};

export default Header;