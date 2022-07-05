import React, { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Marker,
  Annotation,
} from "react-simple-maps";
import ReactTooltip from "react-tooltip";
import BodyStyle from "../../style/css/body.module.css";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

interface MapPosition {
  coordinates: [number, number];
  zoom: number;
  children?: React.ReactNode | React.ReactNode[];
}

interface MapMarker {
  name: string;
  coordinates: [number, number];
  markerOffset: number;
}

type Content = string;

const markers: Array<MapMarker> = [
  {
    markerOffset: -15,
    name: "Seoul, Korea",
    coordinates: [127.024612, 37.5326],
  },
  {
    markerOffset: -15,
    name: "Sau Paulo",
    coordinates: [-46.330376, -23.944841],
  },
  {
    markerOffset: -15,
    name: "Los Angeles",
    coordinates: [-118.243683, 34.052235],
  },
];

function Tworld() {
  const [content, setContent] = useState<Content>("");
  const [position, setPosition] = useState<MapPosition>({
    coordinates: [0, 0],
    zoom: 1,
  });

  function handleZoomIn() {
    if (position.zoom >= 4) return;
    setPosition((pos) => ({ ...pos, zoom: pos.zoom * 2 }));
  }

  function handleZoomOut() {
    if (position.zoom <= 1) return;
    setPosition((pos) => ({ ...pos, zoom: pos.zoom / 2 }));
  }

  function handleMoveEnd(position: MapPosition) {
    setPosition(position);
  }

  return (
    <React.Fragment>
      <ReactTooltip>{content}</ReactTooltip>
      <div className={BodyStyle.mapBodyHeader}>
        <div className="controls">
          <button type="button" onClick={handleZoomIn} aria-label="plus">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="3"
            >
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </button>
          <button type="button" onClick={handleZoomOut} aria-label="minus">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="3"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </button>
        </div>
      </div>
      <div className={BodyStyle.mapBodyMaps}>
        <ComposableMap data-tip="">
          <ZoomableGroup
            zoom={position.zoom}
            center={position.coordinates}
            onMoveEnd={handleMoveEnd}
            style={{ transition: "1s" }}
          >
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={() => {
                      const { NAME } = geo.properties;
                      setContent(`${NAME}`);
                    }}
                    onMouseLeave={() => {
                      setContent("");
                    }}
                    style={{
                      default: { outline: "none" },
                      hover: {
                        fill: "#F53",
                        outline: "none",
                      },
                      pressed: { outline: "none" },
                    }}
                    onClick={() => {
                      const name = geo.properties.NAME;
                      console.log(name);

                      if (name === "South Korea") {
                        setPosition({
                          coordinates: [127.024612, 37.5326],
                          zoom: 3,
                        });
                      } else if (name === "United States of America") {
                        setPosition({
                          coordinates: [-74.006, 40.7128],
                          zoom: 3,
                        });
                      } else {
                        setPosition((pos) => ({ ...pos, zoom: 3 }));
                      }
                    }}
                  />
                ))
              }
            </Geographies>
            {markers.map((Lists) => {
              return (
                <Marker key={Lists.name} coordinates={Lists.coordinates}>
                  <circle r={5} fill="#f00" stroke="#fff" strokeWidth={2} />
                  <text
                    textAnchor="middle"
                    y={Lists.markerOffset}
                    style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
                  >
                    {Lists.name}
                  </text>
                </Marker>
              );
            })}
            <Annotation
              subject={[2.3522, 48.8566]}
              dx={-90}
              dy={-30}
              connectorProps={{
                stroke: "#FF5933",
                strokeWidth: 3,
                strokeLinecap: "round",
              }}
            >
              <text
                x="-8"
                textAnchor="end"
                alignmentBaseline="middle"
                fill="#F53"
              >
                Paris
              </text>
            </Annotation>
          </ZoomableGroup>
        </ComposableMap>
      </div>
    </React.Fragment>
  );
}

export default Tworld;
