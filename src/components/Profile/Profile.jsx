import React from 'react';
import { Link } from 'react-router-dom';
import person from '../../assets/images/person.png'

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
                                    src={person}
                                    alt="avatar"
                                    className="rounded-full w-36 h-36 bg-slate-100"
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
                                        <p className="col-span-1 mb-0">Github</p>
                                    </div>
                                    <div>
                                        <a target='_blank' href="https://github.com/ismailjosim" className="col-span-2 mb-0 hover:text-primary hover:underline transition-all duration-200" rel="noreferrer">github.com/ismailjosim</a>
                                    </div>
                                </div>
                                <hr />
                                <div className="grid grid-cols-3">
                                    <div>
                                        <p className="col-span-1 flex items-center gap-1">Website</p>
                                    </div>
                                    <div>
                                        <a target='_blank' href="https://ismailjosim.netlify.app" className="col-span-2 mb-0 hover:text-primary hover:underline transition-all duration-200" rel="noreferrer">Portfolio</a>
                                    </div>
                                </div>
                                <hr />
                                <div className="grid grid-cols-3">
                                    <div>
                                        <p className="col-span-1 flex items-center gap-1">Linkedin</p>
                                    </div>
                                    <div>
                                        <a target='_blank' href="https://www.linkedin.com/in/ismailjosim/" className="col-span-2 mb-0 hover:text-primary hover:underline transition-all duration-200" rel="noreferrer">linkedin.com/in/ismailjosim</a>
                                    </div>
                                </div>
                                <hr />
                                <div className="grid grid-cols-3">
                                    <div>
                                        <p className="col-span-1 flex items-center gap-1">Resume</p>
                                    </div>
                                    <div>
                                        <a target='_blank' href="https://drive.google.com/file/d/1outMVkz4ZmF902o7SotvWdR5n_h2iDEb/view?usp=share_link" className="col-span-2 mb-0 hover:text-primary hover:underline transition-all duration-200" rel="noreferrer">My Resume</a>
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
                                <h2 className="mb-4 capitalize text-primary text-lg font-semibold">Tools</h2>
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
