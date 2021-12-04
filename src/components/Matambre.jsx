import React from 'react';
import { Zoom } from '@material-ui/core';
import CustomTooltip from './CustomTooltip';

const Matambre = ({ latamMode }) => {
  const matambreText = ['🇦🇷: Matambre.',
    '🇧🇷: Matambre.',
    '🇪🇸: Aleta.',
    ' 🇫🇷: (Pas de Nom).', '🇺🇸: Rose Meat.'];
  const matambreTextLatam = ['🇨🇱: Malaya.',
    '🇨🇴: Sobre Barriga.',
    '🇪🇨: Falda Dorada.', '🇲🇽: Fresada.',
    '🇵🇪: Malaya.', '🇺🇾: Matambre.', '🇻🇪: Pollo de Res.'];
  return (

    <CustomTooltip
      title={(
        <ul>
          {latamMode ? matambreTextLatam.map((str) => (
            <p>
              {str}
              {' '}
            </p>
          )) : matambreText.map((str) => (
            <p>
              {str}
              {' '}
            </p>
          ))}
        </ul>
      )}
      TransitionComponent={Zoom}
      interactive
      TransitionProps={{ timeout: 600 }}
      arrow
      placement="top-end"
    >
      <g>
        <path
          d="M242.883 163.513v-.025c.008-1.375-.21-3.56-1.162-5.035-.413-.66-2.924-4.785-6.177-11.08-2.138-.157-23.476-1.722-35.22-2.412-4.09-.246-23.537-3.942-44.449-6.799-11.811-1.615-23.769-2.173-34.448-3.639-9.148-1.255-17.185-3.023-23.531-3.881-12.081-1.634-18.974-2.062-20.778-2.154.07.116.138.225.21.34 2.734.889 6.309 1.837 8.23 1.837 6.598.582 12.13 4.658 17.854 7.763 6.696 4.075 14.944 4.367 21.834 8.248 6.695 3.784 13.294 8.636 21.154 9.121 1.552.194 2.814-.873 3.978-1.552 3.785-2.523 8.054-4.658 12.712-5.24 9.8-.582 18.825 4.367 28.431 5.725 7.666.194 15.43-.194 23.095.97 9.231.365 17.773 4.261 26.6 6.821.177.052.842.433 1.667.992z"
          fill="#fff"
        />
      </g>
    </CustomTooltip>
  );
};

export default Matambre;
