import { useEffect, useState } from "react";
import { Box, Container, Grid } from "@mui/material";
import { Forecast } from '../types'
import ForecastBox from "./ForecastBox";

type ForecastListProps = {
  forecast: Forecast | undefined;
};

const ForecastList: React.FC<ForecastListProps> = (props) => {
  const { forecast } = props;

  if (!forecast) return <div>no data</div>

  const forcastBoxes = forecast.forecastday.map((forecastDay, i) => <ForecastBox day={forecastDay.day} date={i === 0 ? undefined : forecastDay.date} key={i} />)

  return (
    <Grid container direction="row" justifyContent="space-between" className="forecast-list">
      {forcastBoxes}
    </Grid>
  );
};

export default ForecastList;
