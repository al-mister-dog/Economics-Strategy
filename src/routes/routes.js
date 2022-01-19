import { useSelector, useDispatch } from "react-redux";
import {
  navSelector,
  setDepartment,
  setDepartmentOperation,
} from "../redux/app/features/nav/navSlice";
import {
  fetchUserByToken
} from "../redux/app/features/userSlice"
import { userSelector } from "../redux/app/features/userSlice";
import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import keysData from "../data/performance";

import Home from "../pages/Home";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import Dashboard from "../pages/user/Dashboard";
import NotFound from "../pages/NotFound";
import Game from "../pages/Game";

import Bloc from "../pages/bloc/Main";
import OverviewBloc from "../pages/bloc/Overview";
import BlocTrade from "../pages/bloc/Trade";
import Alliance from "../pages/bloc/Alliance";

import CentralBank from "../pages/central_bank/Main";
import OverviewCentralBank from "../pages/central_bank/Overview";

import MonetaryPolicy from "../pages/central_bank/monetary_policy/Main";
import DeskMonetaryPolicy from "../pages/central_bank/monetary_policy/Desk";
import Inflation from "../pages/central_bank/monetary_policy/Inflation";
import InterestRate from "../pages/central_bank/monetary_policy/InterestRate";
import ForwardGuidance from "../pages/central_bank/monetary_policy/ForwardGuidance";
import QuantitativeEasing from "../pages/central_bank/monetary_policy/QuantitativeEasing";

import FinancialPolicy from "../pages/central_bank/financial_policy/Main";
import Regulation from "../pages/central_bank/regulation/Main";
import Reserves from "../pages/central_bank/reserves/Main";

import Performance from "../pages/performance/Main";
import OverviewPerformance from "../pages/performance/Overview";
import BalanceOfPayments from "../pages/performance/BalanceOfPayments";
import GovernmentFinance from "../pages/performance/GovernmentFinance";
import Monetary from "../pages/performance/Monetary";
import NationalAccounts from "../pages/performance/NationalAccounts";
import People from "../pages/performance/People";
import Trade from "../pages/performance/Trade";

import Treasury from "../pages/treasury/Main";
import OverviewTreasury from "../pages/treasury/Overview";
import Budget from "../pages/treasury/budget/Main";
import Balances from "../pages/treasury/balances/Main";

function App() {
  const dispatch = useDispatch();
  const { departments } = useSelector(navSelector);
  const { user, isFetching } = useSelector(userSelector);
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
  useEffect(() => {
    dispatch(fetchUserByToken({ token: localStorage.getItem("token") }));
  }, []);
  // const loggedin = false;
  usePageViews();
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="bloc" element={<Bloc />}>
        <Route index element={<OverviewBloc />} />
        <Route path="overview" element={<OverviewBloc />} />
        <Route path="trade" element={<BlocTrade />} />
        <Route path="alliance" element={<Alliance />} />
      </Route>
      <Route path="centralbank" element={<CentralBank />}>
        <Route index element={<OverviewCentralBank />} />
        <Route path="overview" element={<OverviewCentralBank />} />
        <Route path="monetarypolicy" element={<MonetaryPolicy />}>
          <Route index element={<DeskMonetaryPolicy />} />
          <Route path="desk" element={<DeskMonetaryPolicy />} />
          <Route path="inflation" element={<Inflation />} />
          <Route path="interest" element={<InterestRate />} />
          <Route path="quantitativeeasing" element={<QuantitativeEasing />} />
          <Route path="forwardguidance" element={<ForwardGuidance />} />
        </Route>
        <Route path="financialpolicy" element={<FinancialPolicy />} />
        <Route path="regulation" element={<Regulation />} />
        <Route path="reserves" element={<Reserves />} />
      </Route>
      <Route path="performance" element={<Performance />}>
        <Route index element={<OverviewPerformance />} />
        <Route path="overview" element={<OverviewPerformance />} />
        <Route
          path="balanceofpayments"
          element={<BalanceOfPayments keysData={keysData} />}
        />
        <Route
          path="governmentfinance"
          element={<GovernmentFinance keysData={keysData} />}
        />
        <Route path="monetary" element={<Monetary keysData={keysData} />} />
        <Route
          path="nationalaccounts"
          element={<NationalAccounts keysData={keysData} />}
        />
        <Route path="people" element={<People keysData={keysData} />} />
        <Route path="trade" element={<Trade keysData={keysData} />} />
      </Route>
      <Route path="treasury" element={<Treasury />}>
        <Route index element={<OverviewTreasury />} />
        <Route path="overview" element={<OverviewTreasury />} />
        <Route path="budget" element={<Budget />} />
        <Route path="balances" element={<Balances />} />
      </Route>
      <Route path="game" element={<Game />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
export default App;
