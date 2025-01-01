import React from "react";
import { Input, InputGroup, InputGroupText } from "reactstrap";
import { Search } from "react-bootstrap-icons";

export default function SearchBox() {
  return (
    <div className="search-box user-tab">
      <InputGroup>
        <Input className="shadow-none" />
        <InputGroupText>
          <Search size={20} />
        </InputGroupText>
      </InputGroup>
    </div>
  );
}
