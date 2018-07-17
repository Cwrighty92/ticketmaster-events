import React, { Component } from "react";
import BasicMap from "./components/BasicMap.jsx";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Meteor Map</h1>
        <BasicMap />
      </div>
    );
  }
}

export default App;
