import React, { useEffect, useState } from "react";
import TopNav from "../navBar/TopNav";
import DashBoard from "./DashBoard";
import ProductLandingPage from "./ProductLandingPage";
import Bag from "../Bag/Bag";
import {
  BrowserRouter as Router,
  NavLink,
  Link,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import { Alert, Toast, ToastBody, ToastHeader } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";

export default function MainFrame() {
  

  return (
    <div>
      <TopNav />
        <Outlet />
      <ToastContainer />
    </div>
  );
}
