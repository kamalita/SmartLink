import React from 'react';
import { Route } from 'react-router-dom';
import List from "./components/links";
import School from "./components/School";

//import './App.css';

const App = () => (
    <div>
        <Route exact path="/" component={List} />
        <Route path="/School" component={School} />
        {/*<Route path="/ForgotPassword" component={ForgotPassword} />*/}
        {/*<Route path="/EnterOTP" component={EnterOTP} />*/}
        {/*<Route path="/ResetPassword" component={ResetPassword} />*/}
    </div>
);

export default App;