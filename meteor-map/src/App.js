import React, { Component } from "react";
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography
} from "react-simple-maps";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Meteor Map</h1>
        <ComposableMap>
          <ZoomableGroup>
            <Geographies geography={"./ne_50m.json"}>
              {(geographies, projection) =>
                geographies.map(geography => (
                  <Geography
                    key={geography.id}
                    geography={geography}
                    projection={projection}
                  />
                ))
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
      </div>
    );
  }
}

export default App;
