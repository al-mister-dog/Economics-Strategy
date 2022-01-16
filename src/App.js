import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./features/user/Login";
import Signup from "./features/user/Signup";
import Dashboard from "./features/user/Dashboard";
// import { PrivateRoute } from "./helpers/PrivateRoute";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* <PrivateRoute exact component={Dashboard} path="/" /> */}
        </Routes>
      </Router>
    </div>
  );
}
export default App;
