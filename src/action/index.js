import * as ActionType from "../action-type/index"

export const getLinks = () =>{
    const links={School:"/school",Class:"/class",Subject:"/subject"}
    return {
        type:ActionType.ADD_LINK,payload:links
    }
}
