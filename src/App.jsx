/* eslint-disable linebreak-style */
import { FormControlLabel, Switch } from '@material-ui/core';

import React, { useState } from 'react';
import './app.css';
import Info from './components/Info';
import SvgImage from './components/SvgImage';
// eslint-disable-next-line import/extensions
// import Cow from './components/Cow.jsx';

function App() {
  const [latam, setLatam] = useState(false);
  return (
    <div className="container">
      <h1 className="cowTitle"> Hover The Cow </h1>

      <div className="cowDiv">
        <SvgImage
          latamMode={latam}
          width={640}
          height={480}
          fill="#3c1414"
        />
      </div>

      <div className="Nav">
        <div className="leftSide">
          <Info />
          {' '}
        </div>

        <div className="containerLatam">
          {' '}
          <FormControlLabel
            control={(
              <Switch
                size="small"
                onChange={(e) => {
                  setLatam(e.target.checked);
                }}
              />
            )}
            labelPlacement="start"
            label={<p className="latamMode">Modo Latam</p>}
          />
        </div>

      </div>

    </div>
  );
}

export default App;
