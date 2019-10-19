export const initialState = {
    item: 'Default To Do',
    completed: false,
    id: 3892987589
};

export function reducer(state, action) {
    switch(action.type) {
        case NEW_TO_DO:
            return { 
                ...state,
                toDo: action.payload
            };
        default:
            return state;
    }
}