import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import SearchBox from "./SearchBox";
import UserBox from "./UserBox";
import CategoryTabs from "./CategoryTabs";

export default function TopNav() {
  return (
    <div className="pos-fixed nav-bar">
      <Navbar color="success" className="d-flex-center" dark>
        <h4 className="brand-logo color-white" href="/">
          𝓢𝓱𝓸𝓹𝓹𝓮
        </h4>
        <SearchBox />
        <UserBox className="user-tab" />
      </Navbar>
      <div className="sub-nav pb-0">
        <CategoryTabs />
      </div>
    </div>
  );
}
