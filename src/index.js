
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import {store}  from "../src/store/index"
import App from "./App";
import School from "./components/School";
import {BrowserRouter} from "react-router-dom";


//create a react component he
//take the react component and show it on the screen
//(where I'm redering, based on what)

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
        <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);