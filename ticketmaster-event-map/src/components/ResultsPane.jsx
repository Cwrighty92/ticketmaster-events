import React, { Component } from "react";
import "../App.css";

class ResultsPane extends Component {
  render() {
    console.log(this.props.eventsList);
    return (
      <div className="events-container">
        {this.props.eventsList.map(event => {
          console.log(event.images[0].url);
          return (
            <div className="event-box">
              <img className="event-image" src={event.images[5].url} />
              <h3>{event.name}</h3>
              <p>{event.classifications[0].genre.name}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ResultsPane;
