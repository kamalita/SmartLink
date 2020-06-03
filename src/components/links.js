import React from "react";
import {connect} from "react-redux";
import {getLinks} from "../action/index"


const mapStateToProps = state => {
    return {
        allLinks: state.allLinks
    };
};
function mapDispatchToProps(dispatch ) {
    debugger
    return {
        getLinks: x => dispatch( getLinks())
    }
}
class List extends React.Component{
    // ListLinks(){
    //     this.props.getLinks()
    // }
    render(){
    console.log("Hi",this.props.allLinks)
        return(
            <button onClick={()=>this.props.getLinks("")}>Click</button>
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(List);
