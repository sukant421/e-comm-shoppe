import React from "react";

export default function ProductTile({ imageSource = "" }) {
  return (
    <div className="m-2">
      <div style={{ minWidth: "25vw", height: "30vw", backgroundColor: "#cdd0d34a" }}>
        <img
          style={{ objectFit: "contain" }}
          width="100%"
          height="100%"
          alt="somePhoto"
          src={imageSource}
        />
      </div>
      <div style={{width: "25vw", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap"}}>
        <p style={{fontSize: "10px", marginBottom: "2px"}}>Floral Print Contrast Midi dress</p>
        <h6 style={{marginBottom: "2px"}}>₹ 504</h6>
          <div style={{display: "flex", alignItems: "center"}}>
            <div style={{fontSize: "12px"}}>
            ₹<small style={{color: "gray",}}><s> 1007</s></small>
            </div>
            <small style={{color: "red", marginInlineStart: "5px", fontSize: "12px"}}> 50% OFF</small>
          </div>
      </div>
    </div>
  );
}
