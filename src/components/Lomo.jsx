import React, { useState } from 'react';
import ClickAwayListener from '@material-ui/core/ClickAwayListener/ClickAwayListener';
import { Zoom } from '@material-ui/core';
import CustomTooltip from './CustomTooltip';

const Lomo = ({ latamMode }) => {
  const [open, setOpen] = useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };
  const lomoText = ['🇦🇷: Lomo.',
    '🇧🇷: Filé Mignon.',
    '🇪🇸: Solomillo.',
    ' 🇫🇷: Fillet.', '🇺🇸: Tenderloin.'];
  const lomoTextLatam = ['🇨🇱: Filete.',
    '🇨🇴: Lomo Fino.',
    '🇪🇨: Lomo Fino.', '🇲🇽: Fileta.',
    '🇵🇪: Lomo.', '🇺🇾: Lomo.', '🇻🇪: Lomito.'];
  return (
    <ClickAwayListener onClickAway={handleTooltipClose}>
      <CustomTooltip
        title={(
          <ul>
            {latamMode ? lomoTextLatam.map((str) => (
              <p>
                {str}
                {' '}
              </p>
            )) : lomoText.map((str) => (
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
        PopperProps={{
          modifiers: {
            offset: {
              enabled: true,
              offset: '-100px, 3px',
            },
          },
        }}
        onClose={handleTooltipClose}
        open={open}
        disableFocusListener
        disableHoverListener
        disableTouchListener
      >
        <g >
          <path onTouchStart={handleTooltipOpen} onClick={handleTooltipOpen}
            d="M142.968 56.289c1.53-.885 4.77-6.278 4.697-10.007-.018-1.623-.5-2.817-1.756-3.545-1.04-.616-4.171-1.342-8.23-1.941-4.08-.615-9.161-1.167-14.4-1.637-10.472-.939-21.57-1.544-26.517-1.665-8.726-.214-15.217-.984-16.727-1.174-2.104 2.435-4.455 4.94-6.87 7.124.142.188.621.812 1.501 1.724a32.24 32.24 0 004.878 4.1c4.4 3.03 11.115 6.185 20.427 6.665 4.068.21 7.46.293 10.318.293 10.412-.004 13.69-1.11 17.22-1.503.307-.034.628-.05.962-.05 3.837.02 9.537 1.976 12.757 1.955.817.005 1.428-.134 1.74-.34z"
            fill="#000"
          />
        </g>
      </CustomTooltip></ClickAwayListener>
  );
};

export default Lomo;
