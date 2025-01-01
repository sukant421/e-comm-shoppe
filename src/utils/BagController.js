import React, { useState } from "react";
import { Plus, Dash, X } from "react-bootstrap-icons";

export default function BagController() {
  const [count, setCount] = useState(0);

  return (
    <div className="d-flex-center">
      <Dash size={25} className="m-2" role="button" onClick={() => setCount(count - 1)} />{" "}
      {count}{" "}
      <Plus size={25} className="m-2" role="button" onClick={() => setCount(count + 1)} />
        <X size={25} className="m-4" />
    </div>
  );
}
