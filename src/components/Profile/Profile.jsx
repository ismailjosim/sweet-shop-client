import React from 'react';
import { FaGlobe } from 'react-icons/fa';

const Profile = () => {
    const frontend = ["HTML5", "CSS3", "Javascript", "BOOTSTRAP5", "TAILWIND CSS", "REACT JS", "Redux", "Material UI", "NextJS", "React Bootstrap", "Tanstack Queries", "Firebase", "React Hooks", "React Icon"]
    const backend = ["NodeJS", "ExpressJS", "Context API", "Rest API", "MongoDB", "NodeJS", "JWT"]
    const tools = ["VS-Code", "DevTools", "Figma", "Netlify", "Vercel", "Git", "Github", "Adobe Photoshop", "Adobe XD"

    ]



    return (
        <section className='bg-slate-100'>
            <div className="w-11/12 mx-auto py-5">
                <div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-5 lg:gap-10">
                        <div className="card mb-4 bg-white shadow-md">
                            <div className="card-body justify-center items-center">
                                <img
                                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                                    alt="avatar"
                                    className="rounded-full w-36 bg-slate-100"
                                />
                                <h5 className="my-3">MD JASIM</h5>
                                <p className="text-muted mb-1">MERN Stack Developer</p>
                                <p className="text-muted mb-4">Bhola, Barisal, BD</p>
                                <div className="flex justify-center gap-2 mb-2">
                                    <button type="button" className="btn btn-sm text-white btn-primary rounded-sm">Follow</button>
                                    <button type="button" className="btn btn-sm btn-outline btn-primary rounded-sm">Message</button>
                                </div>
                            </div>
                        </div>
                        <div className="card mb-4 bg-white mt-5 lg:mt-0">
                            <div className="card-body flex gap-3">
                                <div className="grid grid-cols-3">
                                    <div>
                                        <p className="col-span-1 mb-0">Full Name</p>
                                    </div>
                                    <div>
                                        <p className="col-span-2 mb-0">MD JASIM</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="grid grid-cols-3">
                                    <p className="col-span-1 mb-0">Email</p>
                                    <p className="col-span-2 mb-0">ismailjosim@yahoo.com</p>
                                </div>
                                <hr />
                                <div className="grid grid-cols-3">
                                    <div>
                                        <p className="col-span-1 mb-0">Phone</p>
                                    </div>
                                    <div>
                                        <p className="col-span-2 mb-0">+880 1715 052 808</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="grid grid-cols-3">
                                    <div>
                                        <p className="col-span-1 mb-0">Phone</p>
                                    </div>
                                    <div>
                                        <p className="col-span-2 mb-0">+880 1715 052 808</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="grid grid-cols-3">
                                    <div>
                                        <p className="col-span-1 flex items-center gap-1">
                                            <FaGlobe className='text-primary' />
                                            <span className='font-semibold text-primary'>Website</span>
                                        </p>
                                    </div>
                                    <div>
                                        <p className="col-span-2 mb-0">https://ismailjosim.netlify.app</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="grid lg:grid-cols-3 gap-5 lg:mt-10">
                        <div className="bg-white card">
                            <div className='p-5'>
                                <h2 className="mb-4 capitalize text-primary text-lg font-semibold">Frontend Development</h2>
                                {frontend.map((item, idx) => {
                                    return <div key={idx} className="transition-all duration-300 inline-block m-2 px-3 rounded-full border border-secondary text-base font-normal hover:font-semibold hover:bg-primary hover:border-primary hover:text-white cursor-pointer">{item}</div>
                                })
                                }
                            </div>
                        </div>
                        <div className="bg-white card">
                            <div className='p-5'>
                                <h2 className="mb-4 capitalize text-primary text-lg font-semibold">Backend Development</h2>
                                {backend.map((item, idx) => {
                                    return <div key={idx} className="transition-all duration-300 inline-block m-2 px-3 rounded-full border border-secondary text-base font-normal hover:font-semibold hover:bg-primary hover:border-primary hover:text-white cursor-pointer">{item}</div>
                                })
                                }
                            </div>
                        </div>
                        <div className="bg-white card">
                            <div className='p-5'>
                                <h2 className="mb-4 capitalize text-primary text-lg font-semibold">Frontend Development</h2>
                                {tools.map((item, idx) => {
                                    return <div key={idx} className="transition-all duration-300 inline-block m-2 px-3 rounded-full border border-secondary text-base font-normal hover:font-semibold hover:bg-primary hover:border-primary hover:text-white cursor-pointer">{item}</div>
                                })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Profile;
