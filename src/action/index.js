import * as ActionType from "../action-type/index"

export const getLinks = () =>{
    const links={School:"/school",Classes:"/class",Subject:"/subject",HelpIcon:"/help"}
    return {
        type:ActionType.ADD_LINK,payload:links
    }
}
