import React from "react";
import { Button } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { addToBag } from "../Bag/bagSlice";
import { addToWishList } from "../wishList/WishListSlice";
import { Heart, HeartFill } from "react-bootstrap-icons";
import { showToast } from "../utils/ToastUtil";

export default function ProductTile({
  imageSource = "",
  showAddOption = false,
}) {
  const dispatch = useDispatch();

  return (
    <div className="pos-relative m-2">
      <div className="adj-desktop-width adj-small-width">
        <div
          className="mt-2"
          style={{
            display: "flex",
            position: "absolute",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <strong
            className="user-tab"
            style={{
              maxHeight: "2vw",
              backgroundColor: "black",
              color: "white",
              paddingInline: "5px",
              overflow: "auto",
            }}
          >
            New Arrival
          </strong>
          <div
            role="button"
            onClick={() => dispatch(addToWishList("wishListItem"))}
            className="user-tab"
          >
            <Heart
              color="black"
              size={20}
              border="2px solid red"
              className="m-2"
            />
          </div>
        </div>
        <div
          style={{
            height: "100%",
            backgroundColor: "#cdd0d34a",
          }}
          className="adj-width"
        >
          <img
            style={{ objectFit: "contain" }}
            width="100%"
            height="100%"
            alt="somePhoto"
            src={imageSource}
          />
        </div>
      </div>
      <div className="h-5 h-10">
        <div
          style={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          <div className="d-flex-space_btwn mt-2">
            <div style={{ lineHeight: 0.8 }}>
              <p style={{ fontSize: "10px", marginBottom: "2px" }}>
                Floral Print Contrast Midi dress
              </p>
              <div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <h6 className="mr-2" style={{ marginBottom: "2px" }}>
                    ₹ 504
                  </h6>
                  <small style={{ color: "gray" }}>
                    <s> 1007</s>
                  </small>
                </div>

                <small
                  style={{
                    color: "red",
                    fontSize: "12px",
                  }}
                >
                  {" "}
                  50% OFF
                </small>
              </div>
            </div>
            <div className="user-tab">
              <Button
                onClick={() => {
                  dispatch(addToBag("poly midi polka dress"));
                  // showToast("Added to Cart", "success");
                }}
                outline
                color="success"
                className="mr-2 shadow-none"
                size="sm"
              >
                Add To Bag
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
