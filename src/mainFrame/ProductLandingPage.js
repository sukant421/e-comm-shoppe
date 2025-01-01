import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductTile from "../widgets/ProductTile";
import circleWidget3 from "../staticResources/circleWidget3.webp";
import circlewiz14 from "../staticResources/circlewiz14.webp";
import circlewiz8 from "../staticResources/circlewiz8.jpg";
import circlewizet2 from "../staticResources/circlewizet2.jpg";
import circlewiz15 from "../staticResources/circlewiz15.avif";
import rectWiget1 from "../staticResources/rectWiget1.jpg";
import rectWidget3 from "../staticResources/rectWidget3.jpg";
import rectwidget5 from "../staticResources/rectwidget5.jpg";
import rectwidget4 from "../staticResources/rectwidget4.jpg";
import rectwiz1 from "../staticResources/rectwiz1.webp";
import rectwiz6 from "../staticResources/rectwiz6.avif";
import rectwiz10 from "../staticResources/rectwiz10.webp";
import rectwiz12 from "../staticResources/rectwiz12.jpg";
import rectwiz13 from "../staticResources/rectwiz13.jpg";
import bannerImage from "../staticResources/bannerImage.webp";
import { useSelector } from "react-redux";
import { CaretRightFill } from "react-bootstrap-icons";

export default function ProductLandingPage(props) {
  const params = useParams();

  let category = useSelector((state) => state.category.value);

  useEffect(()=>{
    console.log("category changed to", category)
  },[category])
  
  return (
    <>
      <div >
          <h5 className="m-2" >
            {category.toUpperCase()} <CaretRightFill size={15} /> {params.id.toUpperCase()}
          </h5>
        <div
          className="d-flex-center flex-wrap"
          style={{ boxSizing: "border-box" }}
        >
          <ProductTile imageSource={rectWiget1} showAddOption={false} />
          <ProductTile imageSource={rectWidget3} showAddOption={false} />
          <ProductTile imageSource={rectwidget5} showAddOption={false} />
          <ProductTile imageSource={rectwidget4} showAddOption={false} />
          <ProductTile imageSource={rectwiz1} showAddOption={false} />
          <ProductTile imageSource={rectwidget4} showAddOption={false} />
          <ProductTile imageSource={rectwidget4} showAddOption={false} />
          <ProductTile imageSource={rectWidget3} showAddOption={false} />
          <ProductTile imageSource={rectwidget4} showAddOption={false} />
          <ProductTile imageSource={rectwidget4} showAddOption={false} />
          <ProductTile imageSource={rectwidget4} showAddOption={false} />
          <ProductTile imageSource={rectwidget4} showAddOption={false} />
          <ProductTile imageSource={rectwidget4} showAddOption={false} />
          <ProductTile imageSource={rectwiz1} showAddOption={false} />
          <ProductTile imageSource={rectwidget5} showAddOption={false} />
          <ProductTile imageSource={rectWidget3} showAddOption={false} />
          <ProductTile imageSource={rectWidget3} showAddOption={false} />
          <ProductTile imageSource={rectWidget3} showAddOption={false} />
          <ProductTile imageSource={rectWidget3} showAddOption={false} />
        </div>
      </div>
    </>
  );
}
