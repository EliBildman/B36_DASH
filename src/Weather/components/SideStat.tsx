import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import React from "react";
import "../styles.css";

type SideStatProps = {
  label: string;
  value: number;
  unit: string;
  nospace?: boolean;
};

const SideStat: React.FC<SideStatProps> = (props) => {
  const { label, value, unit, nospace } = props;

  return (
    <Grid className='side-info-grid'>
      <Container className="panel side-info">
        <Grid container justifyContent="space-between">
          <span>{label}: </span>
          <span>
            <span className="data-value">{value}</span>
            {nospace ? "" : " "}
            {unit}
          </span>
        </Grid>
      </Container>
    </Grid>
  );
};

export default SideStat;
