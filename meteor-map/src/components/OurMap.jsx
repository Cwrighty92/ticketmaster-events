import React, { Component } from "react";
import { Map, TileLayer } from "react-leaflet";
import "../App.css";
const stamenTonerTiles =
  "http://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.png";
const stamenTonerAttr =
  'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';

const mapCenter = [53.486, -2.24];
const zoomLevel = 20;

class OurMap extends Component {
  render() {
    return (
      <div className="map-container">
        <Map center={mapCenter} zoom={zoomLevel}>
          <TileLayer attribution={stamenTonerAttr} url={stamenTonerTiles} />
          <TileLayer
            attribution={stamenTonerAttr}
            url={
              "http://stamen-tiles-{s}.a.ssl.fastly.net/toner-labels/{z}/{x}/{y}.png"
            }
          />
        </Map>
      </div>
    );
  }
}

export default OurMap;
