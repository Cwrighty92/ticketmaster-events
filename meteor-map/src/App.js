import React, { Component } from "react";
import FilterBox from "./components/FilterBox";
import axios from "axios";
import ResultsPane from "./components/ResultsPane";
import "./App.css";

class App extends Component {
  state = {
    eventsList: []
  };
  componentDidMount() {
    axios
      .get(
        "https://app.ticketmaster.com/discovery/v2/events.json?size=100&apikey=sNNNfxZjbEFQcYYkXLrGJkxviHj0Ec9E"
      )
      .then(({ data }) => {
        const freshData = data._embedded.events;

        this.setState({ eventsList: freshData });
      });
  }

  render() {
    return (
      <div>
        <h1 className="page-heading">Ticketmaster API</h1>
        <div class="map-pane">Map Here Later </div>
        <ResultsPane eventsList={this.state.eventsList} />
        <FilterBox />
      </div>
    );
  }
}

export default App;
