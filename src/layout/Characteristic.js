import React from 'react';
import Button from './Button';
import Display from './Display';

/* Component used for displaying strings from data, the most basic elements
*   - basic displays a string
*   - compound displays and object and uses "display" component for structure
*   - bordered variant used for displaying objects
*/
const Characteristic = ({ item, objectName, version, layout, showModal, removeItem }) => {

    const simple = <p className={`characteristic characteristic--${layout}`}>
        {item}<Button
            type="remove"
            size="small"
            standalone={true}
            handleClick={removeItem}
            itemName={item}
            objectName={objectName}
        /></p>

    const compound = (
        <div className="characteristic--main compound">
            <p className="characteristic characteristic--item subtitle">
                {item.characteristic}<Button
                    type="remove"
                    size="small"
                    standalone={true}
                    itemName={item}
                    handleClick={removeItem}
                /></p>
            <Display
                version="item"
                items={item.options}
                btnWrapper={false}
                itemName={item.characteristic}
                removeItem={removeItem}
                showModal={showModal} />
        </div>
    )

    return version === 'compound' ? compound : simple;
}

export default Characteristic;