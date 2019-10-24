import React, { useReducer } from 'react';
import { initialState, reducer } from './reducers/reducer';
// import './App.css';
import { NEW_TO_DO } from './reducers/reducer';
import ToDo from './components/ToDo';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addItem = (e, item) => {
    e.preventDefault();
    dispatch({ type: NEW_TO_DO, payload: item})
  }

  return (
    <div className="App">
      <ToDo addItem={addItem} state={state.ToDos}/>
    </div>
  );
}

export default App;
