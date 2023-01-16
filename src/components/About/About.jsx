import React from 'react';
import { Link } from 'react-router-dom';
import { TfiHandPointRight } from "react-icons/tfi";
const About = () => {
    const documentationData = [
        {
            phaseNo: "01",
            phase: "Project Research",
            items:
                [
                    "Research the project and select the project type.",
                    "Write down all technologies for this project.",
                    "Collect all assets and select color, font.",
                    "Review all assets and ready to go.",
                ]
        },
        {
            phaseNo: "02",
            phase: "Installation",
            items:
                [
                    "Create basic React Apps using npx create-react-app",
                    "Install React Router Dom v6.6.2",
                    "install Tailwind CSS & DaisyUI and add config file.",
                    "Install TanStack Query",
                    "Add google font: Poppins",
                    "install react-slideshow-image v.4.1.1"
                ]
        },
        {
            phaseNo: "03",
            phase: "Implementation",
            items:
                [

                    "Create router, component and Basic pages.",
                    "Add navigation: nav items, logo also make fully responsive",
                    "add footer section.",
                    "Add home slider and other sections",
                    "Add product and its dynamic route",
                    "create JSON file for all products",
                    "Fetching data to show dynamic data for all cards",
                ]
        }
    ]


    return (
        <div className='lg:w-8/12 w-11/12 mx-auto my-5'>
            <h2 className='lg:text-5xl md:text-3xl text-2xl font-black capitalize mt-10'>Project Documentation</h2>
            <div className="border-l-4 border-primary bg-gray-100 p-6 my-5">
                <p className=''>
                    Welcome to <Link className='font-semibold hover:text-primary hover:underline transition-all duration-300' to='https://sweetshopp.netlify.app/'>Cake Shop</Link>. Take the time to read the complete documentation to get a comprehensive overview of the project. It helps you to understand all the technologies used for project creation and this website.
                </p>
            </div>
            <div className='my-10 flex lg:flex-row md:flex-row flex-col gap-2 justify-between items-center'>
                <p>
                    <strong>Project Title:</strong>
                    <Link
                        className='font-semibold hover:text-primary hover:underline transition-all duration-300' to='https://sweetshopp.netlify.app'>
                        Cake Shop
                    </Link>
                </p>
                <p>
                    <strong>Date: </strong>
                    From 14 Jan 2023 - To 16 Jan 2023
                </p>
                <p>
                    <strong>Project Creator: </strong>
                    MD Jasim
                </p>
            </div>
            {
                documentationData.map((data, idx) => {
                    const { phaseNo, phase, items } = data;
                    return <div key={idx}>
                        <h3 className='text-2xl font-semibold mb-5'>Phase {phaseNo} : {phase}</h3>
                        <div className='flex flex-col gap-3 mb-5'>
                            {items.map((item, idx) => {
                                return <p key={idx} className="flex items-center gap-3"><TfiHandPointRight className='text-xl text-secondary' /> <span className='bg-slate-100'>{item}</span></p>

                            })
                            }
                        </div>
                    </div>
                })
            }

        </div>
    );
};

export default About;
