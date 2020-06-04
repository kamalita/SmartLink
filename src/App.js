import React from 'react';
import { Route } from 'react-router-dom';
import List from "./components/links";
import School from "./components/School";
import Classes from "./components/Classes";
import Subject from "./components/Subject";
import help from "./components/HelpIcon";

//import './App.css';

const App = () => (
    <div>
        <Route exact path="/" component={List} />
        <Route path="/School" component={School} />
        <Route path="/Class" component={Classes} />
        <Route path="/Subject" component={Subject} />
        <Route path="/help" component={help} />
    </div>
);

export default App;