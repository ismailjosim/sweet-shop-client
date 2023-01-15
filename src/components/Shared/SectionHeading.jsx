import React from 'react';

const SectionHeading = ({ heading }) => {
    const { primary, secondary } = heading;
    return (
        <div className='text-center my-10'>
            <h4 className='text-primary font-semibold text-3xl uppercase'>{primary}</h4>
            <h2 className='text-secondary font-normal text-3xl capitalizes'>{secondary}</h2>
        </div>
    );
};

export default SectionHeading;
