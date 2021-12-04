import React from 'react';
import { Zoom } from '@material-ui/core';
import CustomTooltip from './CustomTooltip';

const Peceto = ({ latamMode }) => {
  const pecetoText = ['🇦🇷: Peceto.',
    '🇧🇷: Lagarto.',
    '🇪🇸: Redondel.',
    ' 🇫🇷: Tranche.', '🇺🇸: Tranche.'];
  const pecetoTextLatam = ['🇨🇱: Pollo Ganso.',
    '🇨🇴: Muchacho.',
    '🇪🇨: Salón.', '🇲🇽: Custe.',
    '🇵🇪: Pejerrey.', '🇺🇾: Pulpa Chorizo.', '🇻🇪: Muchacho Redondo.'];

  return (

    <CustomTooltip
      title={(
        <ul>
          {latamMode ? pecetoTextLatam.map((str) => (
            <p>
              {str}
              {' '}
            </p>
          )) : pecetoText.map((str) => (
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
          d="M46.003 62.933a762.522 762.522 0 01-2.014-6.746c-4.262 1.978-14.867 7.136-17.573 20.75-.39 1.95-.562 4.056-.56 6.259 0 .495.01.994.026 1.498 1.46-1.374 3.175-2.426 5.199-3.02a8.825 8.825 0 012.43-.348c.5.01.988.06 1.465.148.544-9.1 6.004-14.383 11.027-18.541z"
          fill="#000"
        />
        <path
          d="M24.498 86.169a49.799 49.799 0 01-.097-2.973c0-2.278.175-4.476.588-6.542 2.888-14.565 14.446-19.973 18.587-21.88a962.843 962.843 0 01-5.784-20.739c-.49.458-1.59 1.528-1.696 1.616-2.82 2.341-5.058 5.895-6.82 9.139-4.657 8.15-7.568 17.175-9.703 26.297-2.571 12.217-3.398 24.955-.352 37.146a52.962 52.962 0 01-.077-2.665c.01-7.311 1.546-14.686 5.354-19.399z"
          fill="#fff"
        />

      </g>
    </CustomTooltip>
  );
};

export default Peceto;
