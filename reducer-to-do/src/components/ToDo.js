import React, { useState, useReducer } from 'react';
import { initialState, reducer } from '../reducers/reducer';
import AddToDo from '../components/AddToDo';

const ToDo = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <AddToDo />
            {!state.completed ? (
                <div>
                    <h1>{state.item}</h1>
                    <button>X</button>
                </div>
            ) : (
                <div>
                    ...Removed item
                </div>
            )}
        </div>
    )
}

export default ToDo;