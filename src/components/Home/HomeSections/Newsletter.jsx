import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';

const Newsletter = () => {
    return (
        <div className="flex flex-col items-center gap-4 rounded-lg bg-secondary p-6 shadow-lg sm:flex-row sm:justify-between my-20 w-11/12 mx-auto">
            <strong className="text-xl text-white sm:text-xl">
                Make Your Day Sweet!
            </strong>
            <button className="btn btn-primary rounded-none text-white flex gap-1 font-bold" >
                <span className="text-sm font-medium"> Let's Get Started </span>
                <AiOutlineArrowRight />
            </button>
        </div>
    );
};

export default Newsletter;
