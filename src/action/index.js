import * as ActionType from "../action-type/index"

export function getLinks(){
    return dispatch =>{
        // const links={Student:"/student",Class:"/class",Subject:"/subject"}
        const links=["Student"]
        dispatch({type:ActionType.ADD_LINK,payload:links})
    }
}
