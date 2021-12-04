import React from 'react';
import { Zoom } from '@material-ui/core';
import CustomTooltip from './CustomTooltip';

const Cuadril = ({ latamMode }) => {
  const cuadrilText = ['🇦🇷: Cuadril.',
    '🇧🇷: Alcatra.',
    '🇪🇸: Cadera sin Babilla.',
    '🇫🇷: Rumstek.', '🇺🇸: Rump.'];
  const cuadrilTexttLatam = ['🇨🇱: Asiento de Picana.',
    '🇨🇴: Punta de Anca.',
    '🇪🇨: Punta de Cadera.', '🇲🇽: Aguayón.',
    '🇵🇪: Asado de Cadera.', '🇺🇾: Cuadril con Hueso.', '🇻🇪: Rabillo de Cadera.'];
  return (

    <CustomTooltip
      title={(
        <ul>
          {latamMode ? cuadrilTexttLatam.map((str) => (
            <p>
              {str}
              {' '}
            </p>
          )) : cuadrilText.map((str) => (
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
          d="M44.928 54.203c4.356-1.563 13.411-2.507 22.12-7.868 4.594-2.82 9.673-8.24 13.557-12.943.707-.856 1.36-1.673 1.98-2.46-3.278-.135-6.556-.183-9.835-.02-9.315 1.261-18.728.679-28.14.582-1.999-.231-3.812.637-5.54 1.682a971.982 971.982 0 005.28 19.032c.188.66.383 1.327.578 1.995z"
          fill="#fff"
        />
      </g>
    </CustomTooltip>
  );
};

export default Cuadril;
