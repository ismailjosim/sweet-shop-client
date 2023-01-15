import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/sweet-only-text-logo.png';

const Header = () => {



    const menuItems = <>
        <li><Link className='hover:btn-secondary rounded-md hover:text-white' to='/'>Home</Link></li>
        <li><Link className='hover:btn-secondary rounded-md hover:text-white' to='/about'>About US</Link></li>
    </>



    return (
        <header className='border-b-2'>
            <div className="navbar font-semibold lg:w-11/12 mx-auto">
                <div className="navbar-start">
                    <Link className='' to='/'>
                        <img className='w-40' src={logo} alt="" />
                    </Link>
                </div>
                <div className="navbar-end">
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal p-0 gap-3">
                            {menuItems}
                        </ul>
                    </div>
                    <div className="dropdown dropdown-bottom dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </label>
                        <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>

                </div>
            </div>
        </header>
    );
};

export default Header;
