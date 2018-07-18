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
        `https://app.ticketmaster.com/discovery/v2/events.json?size=50&apikey=${apiKey}&geoPoint=gcw2&radius=500`
      )
      .then(({ data }) => {
        const freshData = data._embedded.events;

        this.setState({ eventsList: freshData });
      });
  }
  componentDidUpdate(_, prevState) {
    if (this.state.geoHash !== prevState.geoHash) {
      axios
        .get(
          `https://app.ticketmaster.com/discovery/v2/events.json?size=50&apikey=${apiKey}&geoPoint=${
            this.state.geoHash
          }&radius=10`
        )
        .then(({ data }) => {
          let freshData = data._embedded.events;
          this.setState({ eventsList: freshData });
        })
        .catch(console.log);
      console.log(this.state.eventsList[0]);
    }
  }

  render() {
    return (
      <div>
        <h1 className="page-heading">Ticketmaster API</h1>
        <div className="mapSpace">
          <OurMap
            updateGeoHash={this.updateGeoHash}
            eventsList={this.state.eventsList}
          />
        </div>
        {/* <ResultsPane eventsList={this.state.eventsList} />
        <FilterBox /> */}
      </div>
    );
  }
  updateGeoHash = newGeoHash => {
    this.setState({ geoHash: newGeoHash });
  };
}

export default App;
