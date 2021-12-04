import React from 'react';
import { Zoom } from '@material-ui/core';
import CustomTooltip from './CustomTooltip';

const Cuadrada = ({ latamMode }) => {
  const cuadradaText = ['🇦🇷: Cuadrada.',
    '🇧🇷: Alcatra.',
    '🇪🇸: Contra.',
    ' 🇫🇷: Tranche Ronde.', '🇺🇸: Top Sirloin.'];
  const cuadradaTextLatam = ['🇨🇱: Ganso.',
    '🇨🇴: Bota.',
    '🇪🇨: Pulpa Blanca.', '🇲🇽: Contra Cara.',
    '🇵🇪: Asado de Pierna .', '🇺🇾: Pulpa Cadera.', '🇻🇪: Muchacho Cuadrado.'];

  return (

    <CustomTooltip
      title={(
        <ul>
          {latamMode ? cuadradaTextLatam.map((str) => (
            <p>
              {str}
              {' '}
            </p>
          )) : cuadradaText.map((str) => (
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
          d="M75.948 116.906c-.358-.316-.543-.676-.89-1.284a46 46 0 01-1.16-2.308c-.88-1.866-1.967-4.328-3.108-7.002-2.279-5.349-4.767-11.537-6.227-15.434a6.012 6.012 0 01-.397-2.12c.061-3.907 3.75-6.758 7.213-8.777 2.674-1.534 5.317-2.555 6.429-2.957-.142-.505-.289-1.016-.412-1.508-.547-2.184-.768-4.378-.768-6.5.008-8.111 3.198-15.212 4.18-17.216-5.283-3.143-8.115-6.577-8.741-7.393-1.42 1.213-2.851 2.298-4.258 3.168-9.054 5.569-18.603 6.579-22.476 8.02 3.695 12.6 8.2 26.831 12.224 36.386 4.388 10.424 11.088 22.405 16.685 31.766.624 1.042 1.23 2.046 1.822 3.017l1.439-9.038c-.433-.11-.96-.342-1.555-.82z"
          fill="#fff"
        />
      </g>
    </CustomTooltip>
  );
};

export default Cuadrada;
