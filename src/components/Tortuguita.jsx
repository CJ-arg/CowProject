import React from 'react';
import { Zoom } from '@material-ui/core';
import CustomTooltip from './CustomTooltip';

const Tortuguita = ({ latamMode }) => {
  const tortuguitaText = ['🇦🇷: Tortuguita.',
    '🇧🇷: Músculo de Primeira.',
    '🇪🇸: Culata.',
    ' 🇫🇷: Nerveux de Gîte.', '🇺🇸: Leg of Beef.'];
  const tortuguitaTextLatam = ['🇨🇱: Lagarto.',
    '🇨🇴: Lagarto de Pierna.',
    '🇪🇨: Steak al Minuto .', '🇲🇽: Copeta.',
    '🇵🇪: Bistec de Pierna.', '🇺🇾: Garrón.', '🇻🇪: Lagarto de Reina.'];
  return (

    <CustomTooltip
      title={(
        <ul>
          {latamMode ? tortuguitaTextLatam.map((str) => (
            <p>
              {str}
              {' '}
            </p>
          )) : tortuguitaText.map((str) => (
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
          d="M46.465 64.446c-4.876 4.108-9.64 8.983-10.045 17.418 6.392 2.287 10.494 11.353 12.304 17.785 1.213 4.478 3.398 10.71 3.406 16.107a14.525 14.525 0 01-.302 3.153c4.087 6.183 9.688 15.658 13.637 22.464.163-.206.32-.417.491-.614 2.815-3.397 5.532-6.793 8.346-10.092.55-.481 1.086-.922 1.602-1.375-6.027-9.806-14.45-24.308-19.688-36.745-3.176-7.546-6.628-17.908-9.751-28.1z"
          fill="#fff"

        />
      </g>
    </CustomTooltip>
  );
};

export default Tortuguita;
