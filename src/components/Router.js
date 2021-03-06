import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Layout from "./Layout";
import Item from "../containers/Item";
import Home from "../containers/Home";
import Signup from "../containers/Signup";
import Error from "./Error";
import AddItem from "../containers/AddItem";
import Profile from "../containers/Profile";
import Category from "../containers/Category";
import UpdateItem from "../containers/UpdateItem";
import About from "./About";

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/item/:id" component={Item} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/updateItem/:id" component={UpdateItem} />
              <Route exact path="/addItem/:id" component={AddItem} />
              <Route exact path="/profile/:id" component={Profile} />
              <Route exact path="/categories/:name" component={Category} />
              <Route exact path="/about" component={About} />
              <Route exact path="/error" component={Error} />
              <Redirect to="/error" />
            </Switch>
          </Layout>
        </Switch>
      </BrowserRouter>
    );
  }
}
