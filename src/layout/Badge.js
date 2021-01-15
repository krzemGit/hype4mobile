import React from 'react';

// for displaying title badge at the main card

const Badge = ({ text, ...rest }) => {
    return (
        <div className={`badge ${rest.className ? ('badge--' + rest.className) : ''}`}>
            {text}
        </div>
    );
}

export default Badge;