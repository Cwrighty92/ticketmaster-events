import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import "../App.css";
import Geohash from "latlon-geohash";
const stamenTonerTiles =
  "http://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.png";
const stamenTonerAttr =
  'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';

class OurMap extends Component {
  state = {
    mapCenter: [53.486, -2.24],
    zoomLevel: 10
  };

  componentDidMount() {
    const leafletMap = this.leafletMap.leafletElement;
    leafletMap.on("zoomend", () => {
      let coords = leafletMap.getCenter();
      let newZoom = leafletMap.getZoom();
      let newMapCentre = [coords.lat, coords.lng];
      console.log(newMapCentre);
      this.setState({
        mapCenter: newMapCentre,
        zoomLevel: newZoom
      });
    });
  }
  render() {
    if (this.props.eventsList.length) console.log(this.props);
    return (
      <div className="map-container">
        <Map
          ref={m => {
            this.leafletMap = m;
          }}
          center={this.state.mapCenter}
          zoom={this.state.zoomLevel}
        >
          <TileLayer attribution={stamenTonerAttr} url={stamenTonerTiles} />
          <TileLayer
            attribution={stamenTonerAttr}
            url={
              "http://stamen-tiles-{s}.a.ssl.fastly.net/terrain-labels/{z}/{x}/{y}.png"
            }
          />
          {this.props.eventsList.map(event => {
            return (
              <Marker
                position={[
                  event._embedded.venues[0].location.latitude,
                  event._embedded.venues[0].location.longitude
                ]}
              />
            );
          })}
        </Map>
      </div>
    );
  }
}

export default OurMap;
