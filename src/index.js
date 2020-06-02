import React from 'react';
import ReactDOM from 'react-dom';
import Provider from "react-redux/lib/components/Provider";
import store from "../src/store/index"
import List from "./components/links";


//create a react component he
//take the react component and show it on the screen
//(where I'm redering, based on what)

ReactDOM.render(
    <Provider store={store}>
    <List />
    </Provider>,document.getElementById("root")
)
