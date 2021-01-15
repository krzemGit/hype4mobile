import React, { useState } from 'react'
import Button from '../layout/Button';
import Title from '../layout/Title'

/* Modal component for adding data
*
*  All data-modyfing functions are imported from main component: PeopleView
*/

const Modal = ({ addItem, hideModal, error, setError, item }) => {
    const [dataType, setDataType] = useState('simple')
    const [data, setData] = useState('')

    const handleType = () => {
        if (dataType === 'simple') {
            setDataType('compound')
        } else {
            setDataType('simple')
        }
    }

    const handleHideModal = (e) => {
        if (e.target.id === "modal") {
            hideModal()
        }
    }

    // funcion for form control
    const handleSetData = (e) => {
        setError('')
        setData(e.target.value)
    }

    const handleAddItem = () => {
        if (item) {
            addItem(item, data)
        } else if (dataType === 'simple') {
            addItem('new', data)
        } else {
            addItem('new', { characteristic: data, options: [] })
        }
    }

    // types can be "main" for adding to main array or "item" for adding to a specific object
    return (
        <div className="modal" onClick={handleHideModal} id="modal">
            <div className="characteristic--main modal__display">
                <Title className="modal" title={`Add ${item ? 'option' : 'characteristic'}`} />
                <input
                    type="text"
                    className="input modal__input"
                    value={data}
                    onChange={handleSetData}
                />
                <p className="modal__type-choice" onClick={handleType}>
                    {item ? `Adding option to: ${item}`
                        : (<span>Characteristic type: <span className="modal__link">{dataType}</span></span>)}
                </p>
                <p className="alert modal__alert">{error}</p>
                <div className="modal__btn-wrapper btn-wrapper">
                    <Button type="add" size="big" standalone={false} handleClick={handleAddItem} />
                </div>
            </div>
        </div>
    );
}

export default Modal;