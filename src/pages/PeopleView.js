import React, { useState } from 'react'
import Badge from '../layout/Badge';
import Card from '../layout/Card';
import Display from '../layout/Display';
import Title from '../layout/Title';
import Modal from './Modal';

/*  Main Component, the source of truth
*   - all functions for data modification come from here
*   - modal display is also controlled here
*   - main styling is in "Card" and "Display" components
*/

const PeopleView = () => {
    const [characteristics, setCharacteristics] = useState(['age 40+',
        { characteristic: 'ethnicity', options: ['black', 'hispanic'] },
        'income yearly 45k USD+']);

    // modal hooks
    const [viewModal, setViewModal] = useState(false);
    const [editedItem, setEditedItem] = useState('')
    const [error, setError] = useState('')

    // modal serving functions
    const handleShowModal = (item, empty) => {
        setEditedItem(item);
        setViewModal(true)
    }

    const handleHideModal = () => {
        setViewModal(false)
        setEditedItem('')
        setError('')
    }

    // validation function for modal data input
    const validateInput = (dataType, item) => {
        if (item.length === 0) {
            return 'Cannot add an empty value'
        } else if (item.length > 50) {
            return 'Letter limit is 50'
        } else if (dataType === 'new') {
            const query = (typeof item === 'object' ? item.characteristic : item)
            const overlap = characteristics.findIndex(trait => {
                return ((typeof trait === "object" &&
                    query.toLowerCase() === trait.characteristic.toLowerCase()) ||
                    (typeof trait === "string" && query.toLowerCase() === trait.toLowerCase()))
            })
            if (overlap > -1) return 'Overlaping characteristic names'
        } else if (dataType) {
            const overlap = characteristics.findIndex(trait => {
                return (typeof trait === "object" &&
                    trait.options.find(opt => opt.toLowerCase() === item.toLowerCase())
                    && trait.characteristic === dataType)
            })
            if (overlap > -1) return 'Overlaping option names'
        } else {
            return null;
        }
    }

    // functions that modify data
    const addItem = (dataType, item) => {

        // validation
        const msg = validateInput(dataType, item)
        if (msg) return setError(msg)

        // adding logic
        if (dataType === "new") {
            setCharacteristics([...characteristics, item])
        } else {
            const newItems = characteristics.map((trait) => {
                if (typeof trait === "object" && trait.characteristic === editedItem) {
                    return { characteristic: trait.characteristic, options: [...trait.options, item] }
                } else return trait;
            });
            setCharacteristics(newItems)
        }
        handleHideModal();
    }

    const removeItem = (item, option = null) => {
        if (option) {
            const newItems = characteristics.map(trait => {
                if (typeof trait === "object" && trait.characteristic === option) {
                    const newOptions = trait.options.filter(opt => item !== opt)
                    return { ...trait, options: newOptions }
                } else {
                    return trait
                }
            });
            setCharacteristics(newItems)
        } else {
            const filteredItems = characteristics.filter(trait => {
                if (typeof item === "object") {
                    if (typeof trait === 'string' || trait.characteristic !== item.characteristic) {
                        return trait
                    }
                } else if (typeof trait === 'object' || trait !== item) {
                    return trait
                }
            });
            setCharacteristics(filteredItems)
        }
    }

    return (
        <main className="people">
            <Title className="main" title="Zadanie rekrutacyjne" />
            <Card className="people">
                <Badge text="People" className="people" />
                <Display
                    items={characteristics}
                    btnWrapper={true}
                    removeItem={removeItem}
                    version="main"
                    showModal={handleShowModal}
                />
            </Card>

            {/* Modal for adding data */}
            {viewModal && <Modal
                addItem={addItem}
                hideModal={handleHideModal}
                error={error}
                setError={setError}
                type="main"
                item={editedItem}
            />}
        </main>
    );
}

export default PeopleView;