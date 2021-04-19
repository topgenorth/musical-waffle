import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch, Route} from "react-router-dom";
import ListOldRangeLogs from "./components/ListOldRangeLogs";
import AddOldRangeLog from "./components/AddOldRangeLog";
import EditOldRangeLog from "./components/EditOldRangeLog";

function App() {
    const renderEditOldRangeLog = (props: any) => {
        return <EditOldRangeLog {...props} date="Today"/>
    };

    return (
        <Switch>
            <Route exact={true} path="/" component={ListOldRangeLogs}/>
            <Route exact={true} path="/add" component={AddOldRangeLog}/>
            <Route path="/edit/:id" component={EditOldRangeLog}>
            </Route>
        </Switch>
    );
}

export default App;
