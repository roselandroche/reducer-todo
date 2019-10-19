import React, { useState, useReducer } from 'react';
import { initialState, reducer } from '../reducers/reducer';

const AddToDo = () => {
    const [toDo, addToDo] = useState();
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleSubmit = e => {
        e.preventDefault();
        addToDo('');
    }

    const handleChange = e => {
        e.preventDefault();
        addToDo(e.target.value);
        dispatch({ type: NEW_TO_DO, payload: toDo || state.item })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type='text'
                    name='toDo'
                    placeholder={state.title}
                    value={toDo}
                    onChange={handleChange}
                />
                <button type='submit'>Save</button>
            </form>
        </div>
    )
}

export default AddToDo;