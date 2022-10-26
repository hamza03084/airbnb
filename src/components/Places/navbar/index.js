import {
  faPersonSwimming,
  faWater,
  faHotel,
  faHouseFloodWaterCircleArrowRight,
  faShip,
} from "@fortawesome/free-solid-svg-icons";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MainHead({ product, setProduct }) {
  return (
    // <Navbar>
    <div className="main-nav">
      <div className="container new-nav">
        <div
          className={`icon ${product === "pro1" && "new-icons"}`}
          onClick={() => setProduct("pro1")}
        >
          <FontAwesomeIcon className="iconsize" icon={faWater} />
        </div>
        <div
          className={`icon ${product === "pro2" && "new-icons"}`}
          onClick={() => setProduct("pro2")}
        >
          <FontAwesomeIcon className="iconsize" icon={faHotel} />
        </div>
        <div
          className={`icon ${product === "pro3" && "new-icons"}`}
          onClick={() => setProduct("pro3")}
        >
          <FontAwesomeIcon
            className="iconsize"
            icon={faHouseFloodWaterCircleArrowRight}
          />
        </div>
        <div
          className={`icon ${product === "pro4" && "new-icons"}`}
          onClick={() => setProduct("pro4")}
        >
          <FontAwesomeIcon className="iconsize" icon={faPersonSwimming} />
        </div>
        <div
          className={`icon ${product === "pro5" && "new-icons"}`}
          onClick={() => setProduct("pro5")}
        >
          <FontAwesomeIcon className="iconsize" icon={faShip} />
        </div>
      </div>
    </div>
    // </Navbar>
  );
}

export default MainHead;
