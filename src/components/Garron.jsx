import React from 'react';
import { Zoom } from '@material-ui/core';
import CustomTooltip from './CustomTooltip';

const Garron = ({ latamMode }) => {
  const garronText = ['🇦🇷: Garrón.',
    '🇧🇷: Músculo.',
    '🇪🇸: Morcillo.',
    ' 🇫🇷: Gîte.', '🇺🇸: Shank.'];
  const garronTextLatam = ['🇨🇱: Bola.',
    '🇨🇴: Lagarto de Pierna.',
    '🇪🇨: Lagarto.', '🇲🇽: Chambarrete.',
    '🇵🇪: Osobuco Posterior.', '🇺🇾: Garrón con Hueso.', '🇻🇪: Lagarto con Hueso.'];
  return (

    <CustomTooltip
      title={(
        <ul>
          {latamMode ? garronTextLatam.map((str) => (
            <p>
              {str}
              {' '}
            </p>
          )) : garronText.map((str) => (
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
          d="M32.69 169.492c2.958.828 8.055.966 10.681.962.786 0 1.352-.01 1.592-.016a99.344 99.344 0 011.677-2.944c4.744-7.965 10.053-15.523 11.872-18.734-3.164-.12-8.002-.413-12.784-1.138-5.064-.787-9.975-3.966-13.084-6.363-1.296 5.787-3.584 13.314-5.405 18.033-.25.871-.568 1.85-.708 2.82-.2.719-.433 1.55-.667 2.422.309.331.646.683 1.014 1.045 1.653 1.632 3.857 3.38 5.812 3.913z"
          fill="#000"
        />
      </g>
    </CustomTooltip>
  );
};

export default Garron;
