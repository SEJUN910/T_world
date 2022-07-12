import React, { useState, useEffect } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Marker,
  Annotation,
} from "react-simple-maps";
import {
  grayColor,
  blueColor,
  orangeColor,
  greenColor,
  yellowColor,
} from "../../style/css/ColorLists";
import ReactTooltip from "react-tooltip";
import styled from "styled-components";
import BodyStyle from "../../style/css/body.module.css";
import GeoData from "../../data/feature.json";
import MapModal from "../../items/Modal";

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

const ContinentButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
const ContinentButton = styled.button`
  font-family: "ubuntu";
  font-size: 1.1em;
  background: ${(props) => props.color || "none"};
  border: 1px solid ${grayColor[3]};
  border-radius: 5px;
`;

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
  const [openModal, setOpenModal] = useState(false);

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
  const modalOpen = () => {
    setOpenModal(true);
  };

  const modalClose = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    ReactTooltip.rebuild();
  }, [content]);

  return (
    <React.Fragment>
      <ReactTooltip>{content}</ReactTooltip>
      <ComposableMap
        data-tip=""
        style={{ width: "100%", height: "auto", outline: "none" }}
        projectionConfig={{
          scale: 155,
        }}
      >
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
                    console.log(geo);
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
                    modalOpen();
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
      <div className={BodyStyle.mapBodyHeader}>
        <ContinentButtonGroup>
          <ContinentButton
            type="button"
            color={greenColor[0]}
            onClick={() => {
              setPosition({
                coordinates: [110.34, 18.68],
                zoom: 3,
              });
            }}
          >
            Asia
          </ContinentButton>
          <ContinentButton
            type="button"
            color={greenColor[0]}
            onClick={() => {
              setPosition({
                coordinates: [41.55, 41.54],
                zoom: 3,
              });
            }}
          >
            Europe
          </ContinentButton>
          <ContinentButton
            type="button"
            color={greenColor[0]}
            onClick={() => {
              setPosition({
                coordinates: [-90.006, 40.7128],
                zoom: 3,
              });
            }}
          >
            North America
          </ContinentButton>
          <ContinentButton
            type="button"
            color={greenColor[0]}
            onClick={() => {
              setPosition({
                coordinates: [-69.59, -10.58],
                zoom: 3,
              });
            }}
          >
            South America
          </ContinentButton>
          <ContinentButton
            type="button"
            color={greenColor[0]}
            onClick={() => {
              setPosition({
                coordinates: [33.96, 9.46],
                zoom: 3,
              });
            }}
          >
            Africa
          </ContinentButton>
          <ContinentButton
            type="button"
            color={greenColor[0]}
            onClick={() => {
              setPosition({
                coordinates: [124.97, -8.89],
                zoom: 3,
              });
            }}
          >
            Oceania
          </ContinentButton>
        </ContinentButtonGroup>
      </div>
      {openModal === true && (
        <MapModal close={modalClose} country={selected}>
          Modal
        </MapModal>
      )}
    </React.Fragment>
  );
}

export default Tworld;
