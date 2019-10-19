import React, { useState, useReducer } from 'react';
import { initialState, reducer } from '../reducers/reducer';
import AddToDo from '../components/AddToDo';

const ToDo = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    console.log(props)
    return (
        <div>
            <AddToDo addItem={props.addItem} />
            {!state.completed ? (
                <div>
                    {props.state.map((task, i) => {
                        return <h1 key={i}>{task.item}</h1>
                    })}
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