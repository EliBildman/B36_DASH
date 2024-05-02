import { useEffect, useState } from "react";
import { Commute } from "../types";
import { Box, Container, Grid } from "@mui/material";

type CommuteTimeProps = {
  commute: Commute;
};

const CommuteTime: React.FC<CommuteTimeProps> = (props) => {

  const generateColor = (val: number) => {
    const MIN = 10 * 60;
    const MAX = 60 * 60;
    if (val < MIN) return 'green';
    if (val > MAX) return 'red';
    
    const percent = (val - MIN) / (MAX - MIN);
    const r = Math.floor(255 * percent);
    const g = Math.floor(255 * (1 - percent));
    return 'rgb(' + r + ',' + g + ', 255)'; 
  }

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      className="commute"
    >
      <Grid item>
        <Grid container direction="column">
          <Grid item className="location-name">
            <span>{props.commute.location.name}</span>
          </Grid>
          <Grid item className="distance">
            {props.commute.trip.distance.text}
          </Grid>
        </Grid>
      </Grid>
      <Grid item className="duration">
        <Grid container height='100%' alignItems='center' color={generateColor(props.commute.trip.duration.value)}>
          <span>{props.commute.trip.duration.text}</span>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CommuteTime;
