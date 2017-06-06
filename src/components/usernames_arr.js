/**
 * Created by ubuntu on 6/6/17.
 */

import {observable, action} from "mobx"
import axios from "axios"

//const thearray=[];
class usernames_arr{
    @observable usernames=[];
    get_usernames() {
        var _this = this;
        this.serverRequest = axios.get("https://api.github.com/search/users?q=tom+repos:%3E30+followers:%3E354").then(function (arr) {
           console.log(arr.data.items[0]);

            //thearray.push(arr);
            console.log("Users: ", arr.map(data => data.items[0].login).join(","))
            _this.usernames.push(String(arr.data.items[0]));
            console.log(_this.usernames.login)

        })
    }
}

var users = new usernames_arr

export default users