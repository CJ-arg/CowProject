import React from 'react';
import { Zoom } from '@material-ui/core';
import CustomTooltip from './CustomTooltip';

const Costillar = ({ latamMode }) => {
  const costillarText = ['🇦🇷: Costillar.',
    '🇧🇷: Ponta de agulha.',
    '🇪🇸: Costillar.',
    ' 🇫🇷: Plat de côtes.', '🇺🇸: Short Plate.'];
  const costillarTextLatam = ['🇨🇱: Costillar.',
    '🇨🇴: Costilla.',
    '🇪🇨: Costilla.', '🇲🇽: Costilla Cargada.',
    '🇵🇪: Sancochado de Costillar.', '🇺🇾: Falda.', '🇻🇪: Costillas.'];
  return (

    <CustomTooltip
      title={(
        <ul>
          {latamMode ? costillarTextLatam.map((str) => (
            <p>
              {str}
              {' '}
            </p>
          )) : costillarText.map((str) => (
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
          d="M162.943 96.436c-13.882-.973-28.656-1.946-31.964-1.944-.19 0-.34.004-.433.01-.272.013-.759.097-1.387.229-1.34 4.2-2.558 8.638-3.276 12.99-.884 5.348-1.157 10.574-1.155 14.962-.001 5.175.374 9.166.565 10.86 9.643 1.13 20.237 1.737 30.78 3.178 11.621 1.589 22.845 3.44 31.179 4.81-.053-1.052-.22-4.712-.22-9.994.003-8.354.42-20.736 2.354-33.19-2.491-.185-14.12-1.047-26.443-1.91z"
          fill="#000"
        />
      </g>
    </CustomTooltip>
  );
};

export default Costillar;
