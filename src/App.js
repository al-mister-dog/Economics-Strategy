import { useSelector, useDispatch } from "react-redux";
import { navSelector, setDepartment, setDepartmentOperation } from "./redux/app/features/nav/navSlice";
import {useEffect} from "react"
import "./App.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/nav/Navbar"
import AppRoutes from "./routes/routes"

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
        <AppRoutes />
      </Router>
    </div>
  );
}
export default App;
