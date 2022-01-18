import { useSelector, useDispatch } from "react-redux";
import { setTradeBloc } from "../../redux/app/features/game/gameSlice";
import { useState } from "react";
import { Typography, FormControl, Select, MenuItem } from "@material-ui/core";

export default function SelectTradeBloc() {
  const blocs = [
    "EEA",
    "NAFTA",
    "MERCOSUR",
    "AEC",
    "COMESA",
    "APEC",
    "SARC",
    "IORA",
    "LAIA",
    "SADC",
  ];
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    //decide whether to import whole country or just the iso + name
    dispatch(setTradeBloc(e.target.value));
    setValue(e.target.value);
  };
  return (
    <>
      <Typography>Join Trade Bloc?</Typography>
      <FormControl style={{ width: "250px" }}>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          onChange={handleChange}
        >
          {blocs.map((bloc) => {
            return <MenuItem value={bloc}>{bloc}</MenuItem>;
          })}
        </Select>
      </FormControl>
    </>
  );
}
