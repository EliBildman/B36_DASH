import { useEffect, useState } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { Day } from "../types";

type ForecastBoxProps = {
  date: string | undefined,
  day: Day;
};

const NUM_DAYS = 3;
const DAY_NAMES = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const ForecastBox: React.FC<ForecastBoxProps> = (props) => {
  const { date, day } = props;

  let dayName = !date ? "Today" : DAY_NAMES[new Date(date).getDay()]

  return (
    <Grid
      container
      item
      className="forecast-box"
      xs={12 / NUM_DAYS - 0.1}
      direction="column"
    >
      <Grid item className="weekday">
        {dayName}
      </Grid>
      <Grid
        item
        container
        className="high-low"
        direction="row"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item>
          <span className="min-temp">{day.mintemp_f}</span>
        </Grid>
        <Grid item>
          <span className="slash">/</span>
        </Grid>
        <Grid item>
          <span className="max-temp">{day.maxtemp_f}</span>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ForecastBox;
