import { Route } from "react-router-dom";
import Treasury from "../pages/treasury/Main";
import OverviewTreasury from "../pages/treasury/Overview";
import Budget from "../pages/treasury/budget/Main";
import Balances from "../pages/treasury/balances/Main";

export default function TreasuryRoutes() {
  return (
    <>
      <Route index element={<OverviewTreasury />} />
      <Route path="overview" element={<OverviewTreasury />} />
      <Route path="budget" element={<Budget />} />
      <Route path="balances" element={<Balances />} />
    </>
  );
}
