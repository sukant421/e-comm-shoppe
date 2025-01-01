import React, { useEffect, useState } from "react";
import ProductListView from "../utils/ProductListView";
import { Bag as BagIcon, CaretRight } from "react-bootstrap-icons";
import {
  ListGroup,
  ListGroupItem,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
} from "reactstrap";
import rectwidget4 from "../staticResources/rectwidget4.jpg";
import rectwiz1 from "../staticResources/rectwiz1.webp";
import rectwiz6 from "../staticResources/rectwiz6.avif";
import rectwiz10 from "../staticResources/rectwiz10.webp";
import rectwiz12 from "../staticResources/rectwiz12.jpg";
import rectwiz13 from "../staticResources/rectwiz13.jpg";
import { useSelector } from "react-redux";
import AddressForm from "./AddressForm";

export default function Bag() {
  // const [items, setItems] = useState([]);
  const totalItems = useSelector((state) => state.bag.value);

  return (
    <div>
      <div className="d-flex m-2">
        <BagIcon size={20} />
        <h5> BAG </h5>
      </div>
      <div>
        {totalItems && totalItems.length > 0 && (
          <div style={{justifyContent: "center"}} className="d-flex">
            <div className="p-4" style={{ width: "45%" }}>
              <Card className="m-2">
                <CardBody>
                  <CardTitle tag="h5">Items({totalItems.length})</CardTitle>
                  <div
                    className="p-2"
                    style={{ maxHeight: "30vw", width: "100%", overflow: "scroll" }}
                  >
                    <ListGroup flush>
                      {totalItems &&
                        totalItems.length > 0 &&
                        totalItems.map((item) => (
                          <ListGroupItem href="#" tag="a">
                            <ProductListView
                              item={item}
                              imageSource={rectwiz6}
                            />
                          </ListGroupItem>
                        ))}
                    </ListGroup>
                  </div>
                </CardBody>
              </Card>
              <Card className="m-2">
                <CardBody className="d-flex-space_btwn">
                  <CardTitle className="m-2" tag="h5">
                    Total
                  </CardTitle>
                  <CardTitle className="m-2" tag="h5">
                    {504 * totalItems.length}.00
                  </CardTitle>
                </CardBody>
              </Card>
            </div>
            <div className="p-4 m-2">
              <Card>
                <CardBody>
                  <CardTitle tag="h5">Address</CardTitle>
                  <div className="m-2 p-2">
                    <AddressForm />
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
