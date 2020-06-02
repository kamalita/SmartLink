import React from "react";
import {connect} from "react-redux";


const mapStateToProps = state => {
    return {
        todos: state.todos
    };
};

class List extends React.Component{
    render(){
    console.log("Hi",this.props.todos)
        return(
            <button onClick={()=>alert("ghhg")}>Click</button>
        );
    }
}

export default connect(null,null)(List);
