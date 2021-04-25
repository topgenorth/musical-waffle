import React from 'react';
import './App.css';
import {Switch, Route, BrowserRouter, Redirect} from "react-router-dom";
import ListOldRangeLogsView from "./components/ListOldRangeLogsView";
import AddOldRangeLogForm from "./components/AddOldRangeLogForm";
import EditOldRangeLogForm from "./components/EditOldRangeLogForm";

function App() {
    const renderAddOldRangeLogForm = (props: any) => {
        return <AddOldRangeLogForm {...props} />
    }


    return (
        <BrowserRouter>
            <div className="App">
                <Switch>
                    <Route exact={true} path="/" render={() => (
                        <React.Fragment>
                            <ListOldRangeLogsView/>
                        </React.Fragment>
                    )}/>
                    <Route exact={true} path="/add" render={renderAddOldRangeLogForm}/>
                    <Route path="/edit/:id" component={EditOldRangeLogForm}/>
                    d <Redirect to="/"/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
