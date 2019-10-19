import React, { useState, useReducer } from 'react';
import { initialState, reducer } from '../reducers/reducer';

const AddToDo = (props) => {
    const [toDo, addToDo] = useState('');
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleSubmit = e => {
        e.preventDefault();
        // console.log(toDo)
        addToDo('');
        props.addItem(e, toDo);
    }

    const handleChange = e => {
        addToDo(e.target.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type='text'
                    name='toDo'
                    placeholder={state.item}
                    value={toDo}
                    onChange={handleChange}
                />
                <button type='submit'>Save</button>
            </form>
        </div>
    )
}

export default AddToDo;