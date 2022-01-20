import ClickAwayListener from '@material-ui/core/ClickAwayListener/ClickAwayListener';
import React, { useEffect, useState } from 'react';
import { Zoom } from '@material-ui/core';
import CustomTooltip from './CustomTooltip';

const Aguja = ({ latamMode }) => {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false)

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };
  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }
  useEffect(() => {
    window.addEventListener("resize", handleResize)
  }, [])
  const agujaText = ['🇦🇷: Aguja.',
    '🇧🇷: Acém.',
    '🇪🇸: Morrillo.',
    ' 🇫🇷: Basses côtes.', '🇺🇸: Chuck.'];
  const agujaTextLatam = ['🇨🇱: Huachalomo.',
    '🇨🇴: Lomo de Aguja.',
    '🇪🇨: Lomo de Aguja.', '🇲🇽: Tapa de Lomo.',
    '🇵🇪: Asado de Aguja.', '🇺🇾: Aguja.', '🇻🇪: Solomo abierto.'];

  return (

    <ClickAwayListener onClickAway={handleTooltipClose}>
      <CustomTooltip
        title={(
          <ul>
            {latamMode ? agujaTextLatam.map((str) => (
              <p>
                {str}
                {' '}
              </p>
            )) : agujaText.map((str) => (
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
        {...isMobile ? (`open=${open}`) : null}     //bacer una logica para que depende la pantalla esto cambie
        disableFocusListener
        // disableHoverListener
        disableTouchListener
      >
        <g >
          <path onTouchStart={handleTooltipOpen}
            d="M213.899 43.616c-7.686 12.069-16.271 27.328-19.868 39.927-4.712 16.49-5.546 36.26-5.542 47.993-.002 6.26.233 10.218.235 10.23h-.027c5.904.97 10.149 1.65 11.713 1.74 10.796.636 29.69 2.007 34.36 2.35-7.098-13.995-17.036-37.225-17.056-57.56 0-9.69 2.276-18.769 8.3-25.805 6.437-7.528 13.905-10.861 21.052-10.855 5.828 0 11.406 2.205 16.043 6.027 2.762-4.133 16.002-23.902 20.376-29.589 1.365-1.764 3.282-3.524 5.353-5.155-10.944-3.153-22.862-2.9-33.854.133-9.703 2.232-18.728 6.89-28.528 9.218-.55.194-1.143.334-1.738.481-.532.131-2.257.435-4.117.74a348.934 348.934 0 00-6.702 10.125z"
            fill="#fff"
          />
        </g>
      </CustomTooltip>
    </ClickAwayListener >
  );
};

export default Aguja;




import ClickAwayListener from '@material-ui/core/ClickAwayListener/ClickAwayListener';
import React from 'react';
import { Zoom } from '@material-ui/core';
import CustomTooltip from './CustomTooltip';
import { isMobile } from 'react-device-detect';

const Aguja = ({ latamMode }) => {
  const [open, setOpen] = React.useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };
  const agujaText = ['🇦🇷: Aguja.',
    '🇧🇷: Acém.',
    '🇪🇸: Morrillo.',
    ' 🇫🇷: Basses côtes.', '🇺🇸: Chuck.'];
  const agujaTextLatam = ['🇨🇱: Huachalomo.',
    '🇨🇴: Lomo de Aguja.',
    '🇪🇨: Lomo de Aguja.', '🇲🇽: Tapa de Lomo.',
    '🇵🇪: Asado de Aguja.', '🇺🇾: Aguja.', '🇻🇪: Solomo abierto.'];
  console.log('isMobile', isMobile);
  return (

    <ClickAwayListener onClickAway={handleTooltipClose}>
      <CustomTooltip
        title={(
          <ul>
            {latamMode ? agujaTextLatam.map((str) => (
              <p>
                {str}
                {' '}
              </p>
            )) : agujaText.map((str) => (
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
        {...isMobile ? `open=${open}` : null}//bacer una logica para que depende la pantalla esto cambie
        disableFocusListener
        // disableHoverListener
        disableTouchListener
      >
        <g >
          <path onTouchStart={handleTooltipOpen}
            d="M213.899 43.616c-7.686 12.069-16.271 27.328-19.868 39.927-4.712 16.49-5.546 36.26-5.542 47.993-.002 6.26.233 10.218.235 10.23h-.027c5.904.97 10.149 1.65 11.713 1.74 10.796.636 29.69 2.007 34.36 2.35-7.098-13.995-17.036-37.225-17.056-57.56 0-9.69 2.276-18.769 8.3-25.805 6.437-7.528 13.905-10.861 21.052-10.855 5.828 0 11.406 2.205 16.043 6.027 2.762-4.133 16.002-23.902 20.376-29.589 1.365-1.764 3.282-3.524 5.353-5.155-10.944-3.153-22.862-2.9-33.854.133-9.703 2.232-18.728 6.89-28.528 9.218-.55.194-1.143.334-1.738.481-.532.131-2.257.435-4.117.74a348.934 348.934 0 00-6.702 10.125z"
            fill="#fff"
          />
        </g>
      </CustomTooltip>
    </ClickAwayListener>
  );
};

export default Aguja;