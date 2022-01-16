import Department from "./Department";
import DepartmentOps from "./DeparmentOps";
import { useSelector } from "react-redux";
import {navSelector} from "../../redux/app/features/nav/navSlice"
import { Toolbar } from "@material-ui/core";

const darkPrimary = "#191919";

export default function SubNav() {
  const { department, departmentOperation } = useSelector(navSelector)
  console.log(department)
  return (
    <>
      <Toolbar style={{ backgroundColor: darkPrimary, height: "0.7rem" }}>
        {department && <Department />}
        {departmentOperation && <DepartmentOps />}
      </Toolbar>
    </>
  );
}




