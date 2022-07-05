import React, { useState } from "react";
import Map3D from "./Map3D";

type Position = [number, number];
interface MapPosition {
  coordinates: Position;
  children?: React.ReactNode | React.ReactNode[];
}
function Map2() {
  const [position, setPosition] = useState<MapPosition>({
    coordinates: [0, 0],
  });

  const changePosition = (p: Position) => {
    setPosition({ coordinates: p });
  };

  return (
    <div>
      <div>
        <button
          type="button"
          className="btn"
          onClick={() => changePosition([-122.4194, 37.7749])}
        >
          {"San Francisco"}
        </button>
        <button
          type="button"
          className="btn"
          onClick={() => changePosition([151.2093, -33.8688])}
        >
          {"Sydney"}
        </button>
      </div>
      <Map3D center={position.coordinates} />
    </div>
  );
}

export default Map2;
