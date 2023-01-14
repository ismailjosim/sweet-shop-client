import React from 'react';

const ConfirmationModal = ({ title, message, deletingDoctor, closeModal, successAction }) => {



    return (
        <div>
            <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box text-center">
                    <h3 className="font-bold text-3xl text-accent underline">{title}</h3>
                    <div className='flex justify-center my-5 gap-5 items-center'>
                        <div className="avatar my-2">
                            <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={deletingDoctor.image} alt={title} />
                            </div>
                        </div>

                        <div className='text-left'>
                            <h3 className="font-bold text-lg">{deletingDoctor.name}</h3>
                            <p className="text-lg">{deletingDoctor.specialty}</p>
                        </div>

                    </div>

                    <p className="py-4">{message}</p>


                    <div className="modal-action">
                        <label onClick={() => successAction(deletingDoctor)} htmlFor="confirmation-modal" className="btn btn-primary text-white">Confirm Delete</label>
                        <button onClick={closeModal} className="btn btn-error text-white">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;
