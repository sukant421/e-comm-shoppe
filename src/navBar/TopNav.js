import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import SearchBox from "./SearchBox";
import UserBox from "./UserBox";
import CategoryTabs from "./CategoryTabs";
import CountIcon from "./CountIcon";

export default function TopNav() {
  return (
    <div className="pos-fixed nav-bar">
      <Navbar style={{backgroundColor: "#f1f1f1"}} className="d-flex-center" dark>
        <h4 className="brand-logo" href="/">
          𝓢𝓱𝓸𝓹𝓹𝓮
        </h4>
        <SearchBox />
        <div className="d-flex">
          <CountIcon iconType="bag" />
          <CountIcon iconType="wishList" />
          <UserBox className="user-tab" />
        </div>
      </Navbar>
      <div className="sub-nav pb-0">
        <CategoryTabs />
      </div>
    </div>
  );
}
