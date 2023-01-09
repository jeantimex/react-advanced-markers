import React from "react";
import Map from "./map";
import Marker from "./marker";

import data1 from "./testdata1.js";
import data2 from "./testdata2.js";

const App = () => {
  const [zoom, setZoom] = React.useState(3); // initial zoom
  const [center, setCenter] = React.useState({
    lat: 0,
    lng: 0,
  });

  const [mapData, setMapData] = React.useState([]);

  const onIdle = (map) => {
    setMapData(new Date().getTime() % 2 === 0 ? data1 : data2);
  };

  return (
    <div id="app">
      <Map center={center} onIdle={onIdle} zoom={zoom} className="map">
        {mapData?.map((item) => (
          <Marker
            key={`text-${item.diffId}`}
            data={item}
            position={{
              lat: item.location.lat,
              lng: item.location.lon,
            }}
          />
        ))}
      </Map>
    </div>
  );
};

export default App;
