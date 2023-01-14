import React from 'react';
import { BiMap, BiPhoneCall, BiEnvelope, BiBowlingBall } from "react-icons/bi";

const ContactInfo = () => {
    const info =
        [
            {
                icon: <BiMap />,
                title: "528th Avenue, Boston, BT 58965"
            },
            {
                icon: <BiPhoneCall />,
                title: "1 800 345 67 56"
            },
            {
                icon: <BiEnvelope />,
                title: "info@dental.com"
            },
            {
                icon: <BiBowlingBall />,
                title: "From 8.00AM - To 6.00PM"
            }
        ]


    return (
        <div className="w-11/12 mx-auto grid lg:grid-cols-4 grid-cols-2 gap-5 justify-center items-center my-10">
            {
                info.map((data, idx) => {
                    return <div key={idx} className='flex flex-col justify-center items-center gap-2'>
                        <span className='inline-block bg-accent hover:bg-secondary transition-all duration-500 p-5 rounded-full text-3xl text-white'>
                            {data.icon}
                        </span>
                        <span className='text-center lg:w-9/12 w-full'>{data.title}</span>
                    </div>
                })
            }
        </div>
    );
};

export default ContactInfo;
