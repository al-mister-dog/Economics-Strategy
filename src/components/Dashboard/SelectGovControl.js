import { Box, Typography, Slider } from "@material-ui/core";
export default function SelectGovControl() {
  return (
    <>
    <Typography>Choose amount of governmental control</Typography>
      <Box sx={{ width: 300, margin: "auto", marginTop: "20px" }}>
        <Slider
          aria-label="Small steps"
          defaultValue={0}
          step={1}
          marks
          min={0}
          max={5}
          valueLabelDisplay="auto"
        />
      </Box>
    </>
  );
}
