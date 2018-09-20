import React, { Component } from "react";
import {
  Button,
  Dimmer,
  Header,
  Icon,
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import LandingView from "./components/LandingView";

class App extends Component {
  render() {
    return (
      <LandingView />
    );
  }
}

export default App;
