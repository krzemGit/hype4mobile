import React from 'react';

// used only once in the main component

const Card = ({ children, ...rest }) => {
    return (
        <div className={`card ${rest.className ? ('card--' + rest.className) : ''}`}>
            {children}
        </div>
    );
}

export default Card;