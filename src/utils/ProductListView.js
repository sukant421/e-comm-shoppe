import React from "react";
import BagController from "./BagController";

export default function ProductListView({ imageSource = "" }) {
  return (
    <div>
      <div className="d-flex-space_btwn">
        <div className="d-flex-center">
          <div
            style={{
              height: "6vw",
              width: "4vw",
              backgroundColor: "#cdd0d34a",
            }}
          >
            <img
              style={{ objectFit: "contain" }}
              width="100%"
              height="100%"
              alt="somePhoto"
              src={imageSource}
            />
          </div>
          <div className="m-4" style={{ lineHeight: 0.1 }}>
            <h6>Poly Midi Polka Red Suit</h6>
            <p>Size: M</p>
          </div>
        </div>
        <div>
          <BagController />
        </div>
        <div>
          <h5>504.00</h5>
        </div>
      </div>
    </div>
  );
}
