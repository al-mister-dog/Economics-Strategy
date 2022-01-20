import { useState } from "react";
import InterestCalculator from "../../../calculators/interest/interestClass";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { Box, Typography } from "@material-ui/core";

const data = [{ num: 2 }, { num: 6 }, { num: 5 }, { num: 7 }, { num: 3 }];
export default function CentralBank() {
  return (
    <>
      <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", border: "1px solid black", width: "45%"}}>
        <Typography style={{fontWeight: "bold"}}>Inflation: 4.3%</Typography>
        <ResponsiveContainer width={200} height={200}>
          <LineChart data={data}>
            {/* <XAxis />
            <YAxis /> */}
            <Tooltip />
            {/* <Legend /> */}
            <Line
              type="monotone"
              // animationDuration={duration}
              dataKey="num"
              stroke="red"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </>
  );
}
