import React from 'react';
import Button from './Button';
import Characteristic from './Characteristic';

// List element that (1) displays the data with (2) proper data tree on the left,
// uses child component of 'Characteristic' for details 

const Display = ({ items = [], itemName, btnWrapper, showModal, removeItem, version, ...rest }) => {
    // possible versions: main or item
    return (
        <div className={`display display--${version}`}>

            {/* displaying items from the list */}
            {items.map((item) => {
                if (typeof item === 'string') {
                    return (
                        <div className="item" key={item}>
                            <Characteristic
                                item={item}
                                objectName={itemName || null}
                                removeItem={removeItem}
                                layout={version}
                                version="simple"
                            />
                        </div>
                    )
                } else if (typeof item === 'object') {
                    return (
                        <div className="item" key={item.characteristic}>
                            <Characteristic
                                item={item}
                                removeItem={removeItem}
                                layout="bordered"
                                version="compound"
                                showModal={showModal}
                            />
                        </div>
                    )
                }
            })}

            {/* Choosing button version for display */}
            {version === "item" ? <Button
                type="add"
                size="mid"
                standalone={true}
                itemName={itemName}
                handleClick={showModal} />
                : (
                    <div className="display__btn-wrapper btn-wrapper" >
                        <Button type="add"
                            size="big"
                            standalone={false}
                            handleClick={showModal}
                        />
                    </div>
                )}
        </div>
    );
}

export default Display;