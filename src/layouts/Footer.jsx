import React from 'react';
import { FaDiscord, FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import footerLogo from '../assets/images/sweet-only-text-logo.png'
const Footer = () => {
    return (
        <footer className="bg-white">
            <div className="mx-auto w-11/12 pt-10 pb-5">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="text-center sm:text-left">
                        <p className="text-lg font-medium text-gray-900">USEFUL LINKS</p>

                        <nav className="mt-8">
                            <ul className="space-y-4 text-sm">
                                <li>
                                    <button className="text-gray-700 transition hover:text-primary/75">TRACK ORDER</button>
                                </li>
                                <li>
                                    <button className="text-gray-700 transition hover:text-primary/75">PRIVACY POLICY</button>
                                </li>
                                <li>
                                    <button className="text-gray-700 transition hover:text-primary/75">SWEETS</button>
                                </li>
                                <li>
                                    <button className="text-gray-700 transition hover:text-primary/75">PRODUCTS</button>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className="text-center sm:text-left">
                        <p className="text-lg font-medium text-gray-900">Our Services</p>
                        <nav className="mt-8">
                            <ul className="space-y-4 text-sm">
                                <li>
                                    <button className="text-gray-700 transition hover:text-primary/75">TRACK ORDER</button>
                                </li>
                                <li>
                                    <button className="text-gray-700 transition hover:text-primary/75">PRIVACY POLICY</button>
                                </li>
                                <li>
                                    <button className="text-gray-700 transition hover:text-primary/75">SWEETS</button>
                                </li>
                                <li>
                                    <button className="text-gray-700 transition hover:text-primary/75">PRODUCTS</button>
                                </li>
                            </ul>
                        </nav>

                    </div>

                    <div className="text-center sm:text-left">
                        <p className="text-lg font-medium text-gray-900">Resources</p>

                        <nav className="mt-8">

                            <ul className="space-y-4 text-sm">
                                <li>
                                    <button className="text-gray-700 transition hover:text-primary/75">TRACK ORDER</button>
                                </li>
                                <li>
                                    <button className="text-gray-700 transition hover:text-primary/75">PRIVACY POLICY</button>
                                </li>
                                <li>
                                    <button className="text-gray-700 transition hover:text-primary/75">SWEETS</button>
                                </li>
                                <li>
                                    <button className="text-gray-700 transition hover:text-primary/75">PRODUCTS</button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="text-center sm:text-left">
                        <p className="text-lg font-medium text-gray-900">Helpful Links</p>
                        <div className="grid grid-cols-5 my-5">
                            <p className='w-8 h-8 bg-primary flex justify-center items-center rounded-full hover:bg-secondary transition-all duration-200'>
                                <FaFacebookF className='text-white' />
                            </p>
                            <p className='w-8 h-8 bg-primary flex justify-center items-center rounded-full hover:bg-secondary transition-all duration-200'>
                                <FaTwitter className='text-white' />
                            </p>
                            <p className='w-8 h-8 bg-primary flex justify-center items-center rounded-full hover:bg-secondary transition-all duration-200'>
                                <FaInstagram className='text-white' />
                            </p>
                            <p className='w-8 h-8 bg-primary flex justify-center items-center rounded-full hover:bg-secondary transition-all duration-200'>
                                <FaDiscord className='text-white' />
                            </p>
                            <p className='w-8 h-8 bg-primary flex justify-center items-center rounded-full hover:bg-secondary transition-all duration-200'>
                                <FaYoutube className='text-white' />
                            </p>
                        </div>
                    </div>
                </div>
                <div className="divider"></div>
                <div className='flex flex-col lg:flex-row md:flex-row justify-between items-center'>
                    <div class="flex justify-center text-teal-600 sm:justify-start">
                        <img src={footerLogo} alt="" className='w-32' />
                    </div>
                    <p class="mt-4 text-center text-sm text-gray-500 sm:mt-0 sm:text-right">
                        Copyright &copy; 2022. All rights reserved.
                    </p>
                </div>
            </div>

        </footer>
    );
};

export default Footer;
