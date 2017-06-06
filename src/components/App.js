import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import { inject, observer } from "mobx-react";
import LazyRoute from "lazy-route";
import DevTools from "mobx-react-devtools";
import axios from "axios"
import TopBar from "./TopBar";
import {observable, autorun} from "mobx";
//import users from "./usernames_arr"
//import thearray from "./usernames_arr"


@inject("store")
@observer
export default class App extends Component {

    constructor(props) {
        super();
        super(props);
        this.store = this.props.store;
        // this.state = {usernames: [], public_repos: [], arr: []}
    }
    state = {
     username:[]
    }

    componentWillMount() {
        // var _this = this;

    }

    componentDidMount() {
        this.authenticate();
        var usernames = [];
        var _this = this;
        axios.get("https://api.github.com/search/users?q=tom+repos:%3E30+followers:%3E354").then(function (arr) {


            usernames.push(arr.data.items[0].login);
            usernames.push(arr.data.items[1].login);
            usernames.push(arr.data.items[2].login);
            usernames.push(arr.data.items[3].login);
            usernames.push(arr.data.items[4].login);
            usernames.push(arr.data.items[5].login);
            usernames.push(arr.data.items[6].login);
            usernames.push(arr.data.items[7].login);
            usernames.push(arr.data.items[8].login);
            // console.log(usernames);
            _this.setState({username:usernames});
        })
    }

    authenticate(e) {
        if (e) e.preventDefault();
        this.store.appState.authenticate();
    }
    handleclick(username){
        console.log(username)
       //this.serverRequest = axios.get("https://api.github.com/users/"+username+"/repos").then(function (arr) {

       }




    render(){
        // var userlist =
        return (
			<div>
				<h1>Top GitHub users</h1>
                <ul>{this.state.username?this.state.username.map(username => {
                    <a href="#" onClick={this.handleclick.bind(this)}>{username}</a>
                }):<noscript/>}</ul>
			</div>
        );
    }
}