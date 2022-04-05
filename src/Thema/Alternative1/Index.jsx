import React from 'react';
import Body from './Main/Body'
import { useState } from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch, useHistory } from "react-router-dom";
import Header from './Main/Header';

function Index() {
    const [leftNav, setLeftNav] = useState(false);
    const [state, setState] = useState("0")
    function onChange() {
        setLeftNav(!leftNav)
    }

    function UserPart() {
        return <div className="page">
            <div className="page-main">
                <Header leftNav={leftNav} state={state} setState={setState} onChange={onChange} />
                <div className="main-content app-content mt-0" >
                    <div className="side-app" >
                        <div className="main-container container-fluid">
                            <Body />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }

    return <>
        <div className="horizontalMenucontainer">
            <div className={(leftNav ? "app sidebar-mini ltr light-mode sidebar-gone sidenav-toggled" : "app sidebar-mini ltr light-mode")}>
                <Router>
                    <Switch>
                        {/* <Route path="/" exact>
                            {Cactus().loginData === null ?
                                <Redirect to='/login' /> :
                                // Cactus().userType === "admin" ?
                                <Redirect to="/admin" />
                                // <Redirect to="/business" />
                            }
                        </Route>
                        <Route path="/login" ><Login /></Route>
                        <Route path="/register"><Register /></Route> */}
                        <Route path="/">
                            <UserPart />
                        </Route>
                        {/* <Route path="/business">
                            <BusinessProfileContextProvider>
                                <BusinessCargoContextProvider>
                                    <BusinessDriverContextProvider>
                                        <UserPart />
                                    </BusinessDriverContextProvider>
                                </BusinessCargoContextProvider>
                            </BusinessProfileContextProvider>
                        </Route> */}
                    </Switch>
                </Router>
            </div>
        </div>
    </>
}

export default Index;