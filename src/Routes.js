import React, { Component } from 'react';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import App from './App'
import {AboutUs} from "./Presentational/AboutUs";
import {Blog} from "./Presentational/Blog";
import {Contacts} from "./Presentational/Contacts";
import {Training} from "./Presentational/Training";
import {Services} from "./Presentational/Services";
import {NavMenu} from "./Presentational/NavMenu";
import {LandingPage} from "./Presentational/LandingPage";
import {Row,Col} from 'antd';

class RouterMain extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
        <div>

            <NavMenu />
            <Route
                exact
                path="/"
                component={LandingPage}
            />
            <Route
                exact
                path="/AboutUs"
                component={AboutUs}
            />

            <Route
                exact
                path="/Services"
                component={Services}
            />
            <Route
                exact
                path="/Training"
                component={Training}
            />
            <Route
                exact
                path="/Blog"
                component={Blog}
            />
            <Route
                exact
                path="/Contacts"
                component={Contacts}
            />
        </div>
        )
    }
}
export const Routes = RouterMain;