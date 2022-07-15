import React, { useState, useEffect } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Marker,
  // Annotation,
} from "react-simple-maps";
import { grayColor, greenColor } from "../../style/css/ColorLists";
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
  city: string;
  country: string;
  coordinates: [number, number];
  markerOffset: number;
}

type Content = string;
type Selected = string[];

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

const MapText = styled.text`
  font-family: "ubuntu";
  font-size: 10px;
  fill: ${grayColor[3]};
`;

const markers: Array<MapMarker> = [
  {
    markerOffset: -15,
    city: "Seoul, Korea",
    country: "South Korea",
    coordinates: [127.024612, 37.5326],
  },
  {
    markerOffset: -15,
    city: "Sau Paulo",
    country: "Brazil",
    coordinates: [-46.330376, -23.944841],
  },
  {
    markerOffset: -15,
    city: "Los Angeles",
    country: "United States",
    coordinates: [-118.243683, 34.052235],
  },
];
const countriesArr: string[] = [];
markers.map((Lists) => {
  return countriesArr.push(Lists.country);
});

function Tworld() {
  const [content, setContent] = useState<Content>("");
  const [position, setPosition] = useState<MapPosition>({
    coordinates: [0, 0],
    zoom: 1,
  });
  const [selected, setSelected] = useState<Selected>([]);
  const [openModal, setOpenModal] = useState(false);
  // function handleZoomIn() {
  //   if (position.zoom >= 4) return;
  //   setPosition((pos) => ({ ...pos, zoom: pos.zoom * 2 }));
  // }

  // function handleZoomOut() {
  //   if (position.zoom <= 1) return;
  //   setPosition((pos) => ({ ...pos, zoom: pos.zoom / 2 }));
  // }

  function handleMoveEnd(position: MapPosition) {
    setPosition(position);
  }
  const modalOpen = () => {
    setOpenModal(true);
  };

  const modalClose = () => {
    setOpenModal(false);
  };

  useEffect(() => {}, []);

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
                        (selected.includes(geo.properties.name) && "#F53") ||
                        grayColor[1],
                      outline: "none",
                    },
                    hover: {
                      fill:
                        (countriesArr.includes(geo.properties.name) &&
                          "#F53") ||
                        grayColor[2],
                      outline: "none",
                    },
                    pressed: { outline: "none" },
                  }}
                  onClick={(e) => {
                    const name = geo.properties.name;
                    setSelected(name);
                    Array.from(
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
              <Marker key={Lists.city} coordinates={Lists.coordinates}>
                <circle r={5} fill="#f00" stroke="#fff" strokeWidth={2} />
                <MapText textAnchor="middle" y={Lists.markerOffset}>
                  {Lists.city}
                </MapText>
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

      <div className={BodyStyle.mapBodyHeader}>
        <ContinentButtonGroup>
          <ContinentButton
            type="button"
            color={greenColor[0]}
            onClick={() => {
              setSelected(["South Korea", "Brazil", "United States"]);
              setPosition({
                coordinates: [0, 0],
                zoom: 1,
              });
            }}
          >
            나라들
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
