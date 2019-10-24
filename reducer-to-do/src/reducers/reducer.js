export const NEW_TO_DO = 'NEW_TO_DO';

export const initialState = {
    ToDos: 
        [{item: 'Default To Do',
        completed: false,
        id: 3892987589}]
};

export function reducer(state, action) {
    switch(action.type) {
        case NEW_TO_DO:
            const newToDo = {id: state.ToDos[state.ToDos.length - 1].id+1, 
                            completed: false,
                            item: action.payload}
            console.log(action.payload)
            return { 
                ...state,
                ToDos: [...state.ToDos, newToDo]
            };
        default:
            return state;
    }
}