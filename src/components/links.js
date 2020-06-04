import React from "react";
import {connect} from "react-redux";
import {getLinks} from "../action/index";
import {Link} from "react-router-dom";


const mapStateToProps = state => {
    return {
        allLinks: state.allLinks
    };
};
function mapDispatchToProps(dispatch ) {
    debugger
    return {
        getLinks: () => dispatch( getLinks())
    }
}
class List extends React.Component{

    render(){
        debugger;
        return(
            <div>
                <button onClick={()=>this.props.getLinks()}>Click</button>
                {this.props.allLinks && this.props.allLinks.Classes &&
                (<Link to={this.props.allLinks.Classes} target="_blank">Class here!</Link>)
                }

                {this.props.allLinks && this.props.allLinks.School &&
                    (<Link to={this.props.allLinks.School} target="_blank">School here!</Link>)
                }

                {this.props.allLinks && this.props.allLinks.Subject &&
                    (<Link to={this.props.allLinks.Subject} target="_blank">Subjects here!</Link>)
                }
                {this.props.allLinks.Subject && this.props.allLinks.help &&
                (<Link to={this.props.allLinks.help} target="_blank">help here!</Link>)
                }

            </div>
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(List);
