import React, {Component} from "react";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import "./index.css";
import "./App.css";
import Home from "./Component/Home";
import Champion from "./Component/Champion";
import Story from "./Component/Story";

const url = process.env.REACT_APP_API_URL;
localStorage.setItem("url", url);

class App extends Component {
    state = {
        url: localStorage.getItem("url"),
    };

    componentDidMount() {
        localStorage.setItem("url", url);
    }

    render() {
        return (
            <div className={"h-screen dark:bg-gray-900 bg-gray-100"}>
                <div className={"dark:bg-gray-900 h-auto bg-gray-100"}>
                    <Router>
                        <div className={"min-h-screen"}>
                            <Switch>
                                <Route exact path={"/champion/:slug/story/:text_id"} component={Story}/>
                                <Route exact path={"/champion/:slug"} component={Champion}/>
                                <Route exact path={"/home"} component={Home}/>
                                <Route>
                                    <Redirect to="/home"/>
                                    <Home/>
                                </Route>
                            </Switch>
                        </div>
                    </Router>
                </div>
            </div>
        );
    }
}

export default App;