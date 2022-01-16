import { useSelector, useDispatch } from "react-redux";
import { navSelector, setDepartment, setDepartmentOperation } from "../redux/app/features/nav/navSlice";
import {useEffect} from "react"
import {Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/Home"
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Dashboard from "../pages/Dashboard";

import CentralBank from "../pages/CentralBank"
function App() {
  const dispatch = useDispatch()
  const { departments } = useSelector(navSelector)
  function usePageViews() {
    let location = useLocation();
    useEffect(() => {
      let segments = location.pathname
        .split("/")
        .filter((segment) => segment !== "");

      if (segments.length === 0) {
        dispatch(setDepartment(""));
      }
      if (segments.length === 1) {
        let department = departments.find((d) => d.path === segments[0]);
        dispatch(setDepartment(department));
        dispatch(setDepartmentOperation(""));
      }

      if (segments.length > 1) {
        let department = departments.find((d) => d.path === segments[0]);
        console.log(department);
        let departmentOperation = department.menuItems.find(
          (dOp) => dOp.path === segments[1]
        );
        setDepartment(department);
        setDepartmentOperation(departmentOperation);
      }
    }, [location]);
  }
  // const loggedin = false;
  usePageViews();
  return (
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/centralbank" element={<CentralBank />} />
        </Routes>
  );
}
export default App;
