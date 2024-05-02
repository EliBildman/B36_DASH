import { useEffect, useState } from "react";
import { Commute } from "../types";
import { Grid } from "@mui/material";
import CommuteTime from "./Commute";

const backendUrl = `http://${process.env.REACT_APP_BACKEND_URL ?? ""}/commutes`;

const CommuteTimes: React.FC = () => {
  const [commutes, setCommutes] = useState<Commute[]>([]);

  const getCommuteTimes = () => {
    fetch(backendUrl)
      .then((response) => {
        if (!response.ok) throw "Bad response";
        return response.json();
      })
      .then((json: Commute[]) => {
        setCommutes(json);
      });
  };

  useEffect(() => {
    getCommuteTimes();
    // get them regularly also
    const int = setInterval(getCommuteTimes, 1000 * 60);
    return () => { clearInterval(int); }
  }, []);

  const commuteTimeElements = commutes
    .sort((a, b) => a.trip.duration.value - b.trip.duration.value)
    .map((commute, i) => <CommuteTime commute={commute} key={i} />);

  return (
    <Grid container direction="column" className="commute-list">
      {commuteTimeElements}
    </Grid>
  );
};

export default CommuteTimes;
