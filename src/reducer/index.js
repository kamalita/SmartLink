import * as actionTypes from "../action-type/index";

const initialState = {
    todos: []
};
const reducer = (state = initialState, action) => {
    console.log("Add ")
    let todoState = state.todos;
    switch (action.type) {
        case actionTypes.ADD_LINK:
            console.log("Add list item")
            todoState.push(action.payload);
            return {
                ...state,
                todos: todoState
            };

        default:
            return state;
    }
};

export default reducer;
