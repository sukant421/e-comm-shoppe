import logo from "./logo.svg";
import "./App.css";
import { Button } from "reactstrap";
import MainFrame from "./mainFrame/MainFrame";
import {
  BrowserRouter as Router,
  NavLink,
  Link,
  Routes,
  Route,
} from "react-router-dom";
import DashBoard from "./mainFrame/DashBoard";
import ProductLandingPage from "./mainFrame/ProductLandingPage";
import Bag from "./Bag/Bag";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<MainFrame />}>
            <Route path="/" element={<DashBoard />} />
            <Route path="/plp/:category/:id" element={<ProductLandingPage />} />
            <Route path="/bag" element={<Bag />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
