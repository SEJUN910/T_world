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
import GeoData from "../../data/feature.json";
import MapModal from "../../items/madal";

const geoUrl: object = GeoData;

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
type Selected = string;

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
  const [selected, setSelected] = useState<Selected>("");

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
            style={{ transition: "0.5s" }}
          >
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    className={geo.properties.name}
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={() => {
                      const { name } = geo.properties;
                      setContent(`${name}`);
                    }}
                    onMouseLeave={() => {
                      setContent("");
                    }}
                    style={{
                      default: {
                        fill:
                          (selected === geo.properties.name && "#F53") ||
                          "#64829c",
                        outline: "none",
                      },
                      hover: {
                        fill: "#F53",
                        outline: "none",
                      },
                      pressed: { outline: "none" },
                    }}
                    onClick={(e) => {
                      const name = geo.properties.name;
                      setSelected(name);
                      let it = Array.from(
                        document.getElementsByClassName(
                          name
                        ) as HTMLCollectionOf<HTMLElement>
                      );

                      if (name === "South Korea") {
                        setPosition({
                          coordinates: [127.024612, 37.5326],
                          zoom: 3,
                        });
                      } else if (name === "United States") {
                        setPosition({
                          coordinates: [-90.006, 40.7128],
                          zoom: 3,
                        });
                      } else if (name === "Brazil") {
                        setPosition({
                          coordinates: [-46.6252, -11.5337],
                          zoom: 3,
                        });
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
            {/* <Annotation
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
            </Annotation> */}
          </ZoomableGroup>
        </ComposableMap>
      </div>
      <MapModal color="red">text</MapModal>
    </React.Fragment>
  );
}

export default Tworld;
