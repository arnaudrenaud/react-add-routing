import React, { Component } from "react";
import { Route } from "react-router-dom";
import {
  Button,
  Dimmer,
  Header,
  Icon,
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import LandingView from "./components/LandingView";
import RestaurantList from "./components/RestaurantList";

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={LandingView} />
        <Route path="/restaurants" component={RestaurantList} />
      </div>
    );
  }
}

export default App;
