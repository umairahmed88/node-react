import React from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import * as actions from "../actions"

import Header from "./Header";
import Landing from "./Landing";

const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>Survey New</h2>;

class App extends React.Component {
    componentDidMount() {
        this.props.fetchUser();
    }

    render () {
    return (
        <div className="container">
            <BrowserRouter>
                <div>
                    <Header />
                    <Route exact path="/" component={Landing} />
                    <Route path="/surveys/new" component={SurveyNew} />
                    <Route exact path="/surveys" component={Dashboard} />
                </div>
            </BrowserRouter>
        </div>
    )};
};

export default connect(null, actions)(App);