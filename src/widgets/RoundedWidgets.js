import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function RoundedWidgets({ imageSource = "", widgetName = "", showAddOption= false }) {

  const navigate = useNavigate();
  const category = useSelector(state=>state.category.value)


  return (
    <div className="d-block-center" role="button" onClick={()=>{navigate(`/plp/${category}/${widgetName}`)}}>
      <div
        className="m-2"
        style={{
          width: "18vw",
          height: "18vw",
          borderRadius: "50%",
          overflow: "hidden",
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
      <h6 className="d-flex-center">{widgetName}</h6>
    </div>
  );
}
