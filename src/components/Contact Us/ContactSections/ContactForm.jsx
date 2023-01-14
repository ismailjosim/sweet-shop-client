import React from 'react';

const ContactForm = () => {
    const handleContactBtn = e => {
        e.preventDefault()
    }



    return (
        <div className='contact-bg py-10 lg:py-16'>
            <div className='lg:w-1/2 w-full mx-auto text-center mb-10'>
                <h4 className='text-primary font-bold text-xl'>Contact Us</h4>
                <h2 className="text-2xl font-bold sm:text-3xl text-white">Stay connected with us</h2>
            </div>
            <div className='lg:w-1/3 md:w-1/2 w-11/12 mx-auto'>
                <form onSubmit={handleContactBtn} className='flex flex-col gap-6'>
                    <div>
                        <input id="email" type="email" placeholder='Email Address' className="w-full p-3 rounded" />
                    </div>
                    <div>
                        <input id="name" type="text" placeholder="Subject" className="w-full p-3 rounded" />
                    </div>
                    <div>
                        <textarea id="message" rows="5" className="w-full p-3 rounded" placeholder='Your Message' spellCheck="false"></textarea>
                    </div>
                    <div className='text-center'>
                        <button type="submit" className="btn btn-primary text-white px-6">submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
