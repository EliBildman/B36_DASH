import { Board } from "../types";
import { useEffect } from "react";
import "./styles.css";
import { GoogleMap, LoadScript, TrafficLayer } from '@react-google-maps/api';
import { Box, Container, Grid } from "@mui/material";
import Map from './components/Map';
import { scheduleDailyTask } from "../utils";

const TrafficMap: Board = (props) => {
  const { isActive, requestDisplay } = props;

  useEffect(() => {
    const timeout = scheduleDailyTask(16, 0, () => {
      requestDisplay(60 * 60, 0.25);
    });
    return () => {
      clearTimeout(timeout);
    }
  })
 
  return (
      <Grid container className="layout">
        <Grid xs={9} item container className="map-section" alignItems="center" justifyContent="center">
          <Box className="map-container">
            <Map />
          </Box>
        </Grid>
        <Grid xs={3} item>
        </Grid>
      </Grid>
  );
};

export default TrafficMap;
