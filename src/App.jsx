// @ts-nocheck
/* eslint-disable linebreak-style */
import { FormControlLabel, Grid, Switch } from "@material-ui/core";
import React, { useState } from "react";
import "./App.css";
import Info from "./components/Info";
import SvgImage from "./components/SvgImage";

function App() {
  const [latam, setLatam] = useState(false);
  return (
    <div className="container">
      {latam ? <p className="cowTitle"> Cortes Vacuno </p> : <p className="cowTitle"> Beef Cuts </p>}

      <div className="cowDiv">
        <SvgImage latamMode={latam} width={640} height={480} fill="#3c1414" />
      </div>
      <Grid container spacing={4}>
        <Grid item xs={2} />
        <Grid item xs={4}>
          <FormControlLabel
            control={
              <Switch
                color="default"
                size="medium"
                onChange={(e) => {
                  setLatam(e.target.checked);
                }}
              />
            }
            labelPlacement="end"
            label={<p className="latamMode">Latam Focus</p>}
          />
        </Grid>
        <Grid item xs={5}>
          <Info />
        </Grid>
        <Grid item xs={3} />
      </Grid>
    </div>
  );
}

export default App;
