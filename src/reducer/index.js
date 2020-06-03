import * as actionTypes from "../action-type/index";

const initialState = {
    allLinks: []
};
const reducer = (state = initialState, action) => {
    console.log("Add ")
    switch (action.type) {
        case actionTypes.ADD_LINK:
            console.log("inside action");
            return  {
                ...state,
                allLinks: action.payload
            }
        default:
            return state;
    }
};

export default reducer;
