import React, { useState } from 'react';
import ClickAwayListener from '@material-ui/core/ClickAwayListener/ClickAwayListener';
import { Zoom } from '@material-ui/core';
import CustomTooltip from './CustomTooltip';

const Nalga = ({ latamMode }) => {
  const [open, setOpen] = useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };
  const nalgaText = ['🇦🇷: Nalga.',
    '🇧🇷: Coxae Mole Cha.',
    '🇪🇸: Tapa.',
    ' 🇫🇷:  Tende de Tranche.', '🇺🇸: Topside.'];
  const nalgaTextLatam = ['🇨🇱: Posta Negra.',
    '🇨🇴: Centro de pierna.',
    '🇪🇨: Pulpa Negra.', '🇲🇽:  Bistec de Pulpa Negra.',
    '🇵🇪: Tapa.', '🇺🇾: Pulpa de Nalga.', '🇻🇪: Pulpa Negra.'];
  return (
    <ClickAwayListener onClickAway={handleTooltipClose}>
      <CustomTooltip
        title={(
          <ul>
            {latamMode ? nalgaTextLatam.map((str) => (
              <p>
                {str}
                {' '}
              </p>
            )) : nalgaText.map((str) => (
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
            d="M24.614 124.502c.514.964 1.066 1.82 1.653 2.532.459.604 1.762 1.05 3.708 1.035.868.002 1.86-.085 2.925-.236.038-.504.064-1.021.065-1.567 0-1.019-.069-2.113-.221-3.286-.71-5.661-6.7-20.85-8.064-34.58-2.806 4.354-4.087 10.68-4.078 17.167a50.584 50.584 0 00.743 8.65c.316.143 2.167 7.085 3.27 10.285zM45.812 124.15c2.522-1.011 3.85-2.733 4.45-4.97a98.32 98.32 0 00-.659-.977c-10.827-15.86-14.675-26.95-14.68-35.209l.002-.082a6.442 6.442 0 00-1.414-.132c-.654 0-1.327.093-2.028.294l-.2-.7.198.7c-2.18.602-3.996 1.872-5.49 3.599.989 13.807 7.364 29.836 8.196 36.12.16 1.232.233 2.39.233 3.473 0 .454-.017.892-.041 1.321 3.361-.625 7.372-1.83 11.433-3.437z"
            fill="#000"
          />
          <path onTouchStart={handleTooltipOpen} onClick={handleTooltipOpen}
            d="M50.674 115.755c.008-5.018-2.112-11.184-3.355-15.722-1.62-6.128-5.713-14.4-10.932-16.66.108 7.714 3.798 18.392 14.225 33.721.038-.433.06-.879.062-1.339z"
            fill="#000"
          />
          <path onTouchStart={handleTooltipOpen} onClick={handleTooltipOpen}
            d="M51.273 120.716c-.851 2.081-2.398 3.803-4.926 4.789-4.304 1.695-8.528 2.963-12.113 3.587-.476 3.614-1.843 6.222-3.412 8.093.282.477.564.95.848 1.413.854.73 2.08 1.722 3.575 2.765 2.953 2.06 6.89 4.248 10.702 4.82 5.333.808 10.769 1.074 13.775 1.162 1.664-.94 2.86-2.933 4.295-4.162.166-.19.317-.394.473-.592a992.335 992.335 0 00-2.662-4.569c-3.38-5.758-7.364-12.402-10.555-17.306zM26.755 131.927c-.22-1.099-.486-2.153-.734-3.226 1.008.607 2.369.815 3.954.826.844-.001 1.78-.084 2.763-.209-.45 2.908-1.521 5.035-2.76 6.616-1.062-1.323-2.178-2.7-3.223-4.007z"
            fill="#fff"
          />
        </g>
      </CustomTooltip></ClickAwayListener>
  );
};

export default Nalga;
