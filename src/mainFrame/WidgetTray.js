import React from "react";
import RoundedWidgets from "../widgets/RoundedWidgets";
import ProductTile from "../widgets/ProductTile";
import LargeTile from "../widgets/LargeTile";
import ImageCarousel from "../widgets/ImageCarousel";
import circleWiz1 from "../staticResources/circleWiz1.jpg"
import circleWidget3 from "../staticResources/circleWidget3.webp"
import circlewiz14 from "../staticResources/circlewiz14.webp"
import circlewiz8 from "../staticResources/circlewiz8.jpg"
import circlewizet2 from "../staticResources/circlewizet2.jpg"
import circlewiz15 from "../staticResources/circlewiz15.avif"
import rectWiget1 from "../staticResources/rectWiget1.jpg"
import rectWidget3 from "../staticResources/rectWidget3.jpg"
import rectwidget5 from "../staticResources/rectwidget5.jpg"
import rectwidget4 from "../staticResources/rectwidget4.jpg"
import rectwiz1 from "../staticResources/rectwiz1.webp"
import rectwiz6 from "../staticResources/rectwiz6.avif"
import rectwiz10 from "../staticResources/rectwiz10.webp"
import rectwiz12 from "../staticResources/rectwiz12.jpg"
import rectwiz13 from "../staticResources/rectwiz13.jpg"
import bannerImage from "../staticResources/bannerImage.webp"
import Banner from "../widgets/Banner";


export default function WidgetTray({widgetType = "rectangle"}) {
  return (
    <div
    //   className="p-2 d-flex of-y-hidden of-x-scroll"
    //   className={widgetType === "largeTile" ? "p-2 d-flex of-hidden" : "p-2 d-flex of-y-hidden of-x-scroll"}
      style={{ height: 'max-content' }}
    >{widgetType === "rounded" &&
        <div className="p-2 d-flex of-y-hidden of-x-scroll">
      <RoundedWidgets imageSource={circleWiz1} widgetName="Trending"/>
      <RoundedWidgets imageSource={circleWidget3} widgetName="Grab It"/>
      <RoundedWidgets imageSource={circlewiz14} widgetName="Winterwear"/>
      <RoundedWidgets imageSource={circlewiz8} widgetName="Bestsellers"/>
      <RoundedWidgets imageSource={circlewizet2} widgetName="Tops"/>
      <RoundedWidgets imageSource={circlewiz15} widgetName="Hoodies"/>
      <RoundedWidgets imageSource={circleWiz1} widgetName="Bottons"/>
      <RoundedWidgets imageSource={circleWiz1} widgetName="Plus Size"/>
      <RoundedWidgets imageSource={circleWiz1} widgetName="T-shirts"/>
      </div> 
    }
    {widgetType === "rectangle" &&
    <div className="p-2 d-flex of-y-hidden of-x-scroll">
    <ProductTile imageSource={rectWiget1}/>
    <ProductTile imageSource={rectWidget3}/>
    <ProductTile imageSource={rectwidget5}/>
    <ProductTile imageSource={rectwidget4}/>
    <ProductTile imageSource={rectwiz1}/>
    <ProductTile imageSource={rectWidget3}/>
    <ProductTile imageSource={rectWidget3}/>
  
  </div>}
  {widgetType === "largeTile" &&
    <div className="flex-wrap p-2 d-flex of-hidden of-y-hidden of-x-scroll" style={{justifyContent: "center", display: "flex"}}>
    <LargeTile imageSource={rectwiz6}/>
    <LargeTile imageSource={rectwiz10}/>
    <LargeTile imageSource={rectwiz12}/>
    <LargeTile imageSource={rectwiz13}/>
  
  </div>}

  {widgetType === "carousel" &&
  <div className="d-flex-center">
    <ImageCarousel />
    </div>
  }
  {widgetType === "banner" &&
  <div className="d-flex-center hide-div">
    <Banner imageSource={bannerImage}/>
    </div>
  }
    </div>
  );
}
