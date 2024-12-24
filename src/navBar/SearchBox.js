import React from "react";
import { Input, InputGroup, InputGroupText } from "reactstrap";

export default function SearchBox() {
  return (
    <div className="search-box user-tab">
      <InputGroup>
        <Input />
        <InputGroupText>Search</InputGroupText>
      </InputGroup>
    </div>
  );
}
