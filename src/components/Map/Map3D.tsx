import React from "react";
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
} from "react-simple-maps";
import { Motion, spring } from "react-motion";

interface MapPosition {
  center: [number, number];
}

interface Geograp {
  geos: string[];
  proj: any;
}

const mapStyles = {
  width: "90%",
  height: "auto",
};
const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const Map3D = ({ center }: MapPosition) => (
  <div>
    <Motion
      defaultStyle={{
        x: center[0],
        y: center[1],
      }}
      style={{
        x: spring(center[0]),
        y: spring(center[1]),
      }}
    >
      {({ x, y }) => (
        <ComposableMap
          width={500}
          height={500}
          projection="orthographic"
          projectionConfig={{ scale: 220 }}
          style={mapStyles}
        >
          <ZoomableGroup center={[x, y]}>
            <circle
              cx={250}
              cy={250}
              r={220}
              fill="transparent"
              stroke="#CFD8DC"
            />
            {/* <Geographies disableOptimization geography={geoUrl}>
              {(geos, proj) =>
                geos.map((geo, i) => {
                  console.log(geo);
                  return (
                    <Geography
                      key={geo.id + i}
                      geography={geo}
                      projection={proj}
                      style={{
                        default: { fill: "#CFD8DC" },
                      }}
                    />
                  );
                })
              }
            </Geographies> */}
          </ZoomableGroup>
        </ComposableMap>
      )}
    </Motion>
  </div>
);

export default Map3D;
