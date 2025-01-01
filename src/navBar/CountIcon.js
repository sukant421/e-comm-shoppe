import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { BagHeartFill, BagHeart, Heart,Bag } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

export default function CountIcon({iconType = "bag"}) {
  const bagItems = useSelector((state) => state.bag.value);
  const wishListItems = useSelector((state) => state.wishList.value);

  const navigate = useNavigate();

  useEffect(() => {
    console.log(bagItems);
  });

  return (
    <div role="button" className="p-2" style={{ marginRight: "2vw" }}>
      <div style={{ lineHeight: "30px", position: "relative" }}>
        {((iconType === 'bag' && bagItems && bagItems.length > 0) || (iconType === "wishList" && wishListItems && wishListItems.length > 0)) && (
          <div
            style={{
              color: "white",
              height: "20px",
              width: "20px",
              backgroundColor: "#db6360",
              borderRadius: "50%",
              zIndex: 10,
              position: "absolute",
              marginLeft: "15px",
              marginBottom: "25px",
              fontSize: "12px",
              alignItems: "center",
              justifyContent: "center",
              display: "flex  "
            }}
          >
            <strong>{ iconType=== 'bag' ? bagItems.length : wishListItems.length}</strong>
          </div>
        )}
        {iconType === "bag" && 
        <Bag role="button" onClick={()=>navigate('/bag')} size={25} />
        }
        {iconType === "wishList" && 
        <Heart size={25} />
        }
      </div>
    </div>
  );
}
