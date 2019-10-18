import React, { useState, useReducer } from 'react';
import { initialState, reducer } from '../reducers/reducer';

const ToDo = () => {
    // const [newToDo, setNewToDo] = useState();
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            {!state.completed ? (
                <div>
                    <h1>{state.item}</h1>
                    <button>Done</button>
                </div>
            ) : (
                <div>
                    ...Removing item
                </div>
            )}
        </div>
    )
}

export default ToDo;