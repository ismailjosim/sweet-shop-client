import React from 'react';
import { FaGlobe } from 'react-icons/fa';

const Profile = () => {
    const frontend = ["HTML5", "CSS3", "BOOTSTRAP5", "TAILWIND CSS", "REACT JS"]
    const backend = [
        "NEXT JS",
        "EXPRESS JS",
        "MongoDB",
    ]
    const tools = ["VS-Code", "DevTools", "Figma", "Netlify", "Vercel", "Git", "Github", "Adobe PS", "Adobe XD"

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
                    <div className="grid lg:grid-cols-3 gap-5">
                        <div className="bg-white card">
                            <div className="">
                                <div className="card">
                                    <div className="card-body">
                                        <h2 className="mb-4 capitalize text-primary text-lg font-semibold">Frontend Development</h2>
                                        {frontend.map((item, idx) => {
                                            return <span key={idx} className='text-base font-semibold'>{item}</span>
                                        })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Profile;
