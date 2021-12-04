import React from 'react';
import { Zoom } from '@material-ui/core';
import CustomTooltip from './CustomTooltip';

const Cuello = ({ latamMode }) => {
  const cuelloText = ['🇦🇷: Cogote.',
    '🇧🇷: Pescoço.',
    '🇪🇸: Pescuezo.',
    ' 🇫🇷: Collier.', '🇺🇸: Neck and Sticking.'];
  const cuelloTextLatam = ['🇨🇱: Cogote.',
    '🇨🇴: Cogote.',
    '🇪🇨: Nuca.', '🇲🇽: Pescuezo.',
    '🇵🇪: Pescueso.', '🇺🇾: Cogote.', '🇻🇪: Pescuezo.'];
  return (

    <CustomTooltip
      title={(
        <ul>
          {latamMode ? cuelloTextLatam.map((str) => (
            <p>
              {str}
              {' '}
            </p>
          )) : cuelloText.map((str) => (
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
          d="M284.637 28.963c-2.398 3.117-7.62 10.706-12.225 17.491a2023.716 2023.716 0 00-8.195 12.172 30.276 30.276 0 011.693 1.659c9.696 10.357 13.296 28.703 13.54 37.11.03 1.13.043 2.269.045 3.417 0 .22-.005.44-.006.66 1.946-2.572 5.813-7.505 10.438-12.469 6.713-7.146 14.834-14.433 21.532-14.634.212-.003.428-.008.647-.008.969 0 1.992.051 3.038.128-1.086-3.686-5.526-18.952-6.813-26.439-.744-4.344-.917-11.88-.92-18.374 0-.77.003-1.516.008-2.248-.269-.034-.527-.058-.811-.105-3.785-.679-7.472-1.65-11.258-2.426-1.073-.189-3.336-.92-4.842-1.425-2.31 1.75-4.462 3.653-5.871 5.491z"
          fill="#fff"
        />
      </g>
    </CustomTooltip>
  );
};

export default Cuello;
