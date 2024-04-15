import React from "react";
import "../styles.css";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";

type TempProps = {
  temp: number;
  summary: string;
};

const Temp: React.FC<TempProps> = (props) => {
  const { temp, summary } = props;

  return (
    <Grid container direction="column">
      <Container className="panel">
        <Container className="temp-display">
          {temp}
          <span className="degree-symbol">°</span>
        </Container>
        <Divider className="divider" />
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Container className="summary">{summary}</Container>
        </Grid>
      </Container>
    </Grid>
  );
};

export default Temp;
