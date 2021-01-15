import React from 'react';

/* re-usable element for all buttons:
*   - two options: add and remove
*   - three sizes: small, mid and big
*   - design depands on type and size props, handleClick is the action function
*/

const Button = ({ handleClick, type, itemName, size, standalone, objectName }) => {
    return (
        <button className={`btn btn--${type} btn--${size} ${standalone && 'standalone'}`} onClick={() => handleClick(itemName || '', objectName || null)}>
            {type === 'add' ? '+' : <div className="minus"></div>}
        </button>
    );
}

export default Button;