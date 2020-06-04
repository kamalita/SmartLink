import React from "react";

export default class HelpIcon extends React.Component{
    render() {
        return(
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTzGV6qSLJJ1l4Go91NUmAOEjHd38aAFNlSbSL6mZsM1xxivZ7k&usqp=CAU"
                                onClick={window.alert("in here")
                                }/>
                                //conflict
                                //creating conflict here

            </div>
        )
    }
}