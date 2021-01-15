import React from 'react';

// used for displaying title at the main card and at the modal

const Title = ({ title, ...rest }) => {
    return (
        <h1 className={`title ${rest.className ? ('title--' + rest.className) : ''}`}>{title}</h1>
    );
}

export default Title;