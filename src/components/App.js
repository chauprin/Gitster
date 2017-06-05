import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import { inject, observer } from "mobx-react";
import LazyRoute from "lazy-route";
import DevTools from "mobx-react-devtools";
import axios from "axios"
import TopBar from "./TopBar";
import {observable, autorun} from "mobx";

@inject("store")
@observer
export default class App extends Component {
    constructor(props) {
        super();
        super(props);
        this.store = this.props.store;
        this.state = {name: [], public_repos: [], arr: []}
    }

    componentWillMount() {
        var _this = this;
        var username = "prince-chauhan";
        this.serverRequest = axios.get("https://api.github.com/search/users?q=tom+repos:%3E30+followers:%3E354").then(function (arr) {
            _this.setState({
				name : "the name",
				public_repos : "1234",
			});
            console.log(arr.data.items[0])
        })
    }
	


    componentDidMount() {
        this.authenticate();
    }

    authenticate(e) {
        if (e) e.preventDefault();
        this.store.appState.authenticate();
    }

    render() {
        return (

			<div>
				<h1>repos!</h1>
				Name = {this.state.name}
				Public repos = {this.state.public_repos}

			</div>
        );
    }
}


