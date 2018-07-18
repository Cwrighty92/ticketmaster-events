import React, { Component } from "react";
import FilterBox from "./components/FilterBox";
import axios from "axios";
import ResultsPane from "./components/ResultsPane";
import OurMap from "./components/OurMap";
import "./App.css";
import apiKey from "./config";

class App extends Component {
  state = {
    eventsList: [],
    geoHash: ""
  };
  componentDidMount() {
    axios
      .get(
        `https://app.ticketmaster.com/discovery/v2/events.json?size=10&apikey=${apiKey}&geoPoint=gcw2&radius=25`
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
        <div className="mapSpace">
          <OurMap eventsList={this.state.eventsList} />
        </div>
        {/* <ResultsPane eventsList={this.state.eventsList} />
        <FilterBox /> */}
      </div>
    );
  }
}

export default App;
