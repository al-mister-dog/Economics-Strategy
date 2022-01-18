import { useSelector, useDispatch } from "react-redux";
import { setCountry } from "../../redux/app/features/game/gameSlice";
import { countriesSelector } from "../../redux/app/features/countries/countriesSlice";
import { gameSelector } from "../../redux/app/features/game/gameSlice";
import { useState } from "react";
import {
  Typography,
  FormControl,
  Select,
  MenuItem,
} from "@material-ui/core";

export default function SelectCountry() {
  const dispatch = useDispatch();
  const { countries } = useSelector(countriesSelector);
  const values = countries.map(el => {return {iso: el.iso, name: el.NAME}})
  const [value, setValue] = useState("")
  const handleChange = (e) => {
    //decide whether to import whole country or just the iso + name
    dispatch(setCountry(e.target.value));
    setValue(e.target.value)
  };
  return (
    <>
      <Typography>Select country...</Typography>
      <FormControl style={{ width: "250px" }}>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}

          onChange={handleChange}
        >
          {countries.map((country) => {
            const { iso, NAME } = country;
            return <MenuItem value={country}>{NAME}</MenuItem>;
          })}
        </Select>
      </FormControl>
    </>
  );
}
