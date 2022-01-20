import React, { useState } from 'react';
import ClickAwayListener from '@material-ui/core/ClickAwayListener/ClickAwayListener';
import { Zoom } from '@material-ui/core';
import CustomTooltip from './CustomTooltip';

const Asado = ({ latamMode }) => {
  const [open, setOpen] = useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };
  const asadoText = ['🇦🇷: Asado.',
    '🇧🇷: Aba.',
    '🇪🇸: Falda.',
    '🇫🇷: Bavette.', '🇺🇸: Rib.'];
  const asadoTextLatam = ['🇨🇱: Asado de Tira.',
    '🇨🇴: Asado de Tira.',
    '🇪🇨: Costilla.', '🇲🇽: Costilla.',
    '🇵🇪: Costilla.', '🇺🇾: Asado.', '🇻🇪:Costillas.'];
  return (
    <ClickAwayListener onClickAway={handleTooltipClose}>
      <CustomTooltip
        title={(
          <ul>

            {latamMode ? asadoTextLatam.map((str) => (
              <p>
                {str}

              </p>
            )) : asadoText.map((str) => (
              <p>
                {str}

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
        <g>
          <path onTouchStart={handleTooltipOpen} onClick={handleTooltipOpen}
            d="M136.992 66.352c-12.56-1.032-29.393-2.464-38.045-2.464-.885 0-1.68.017-2.376.048-5.251.238-10.048 1.375-13.524 2.453a52.14 52.14 0 00-4.94 1.793c-.007.278-.023.553-.023.833 0 2.021.21 4.096.724 6.147 1.414 5.66 4.254 12.566 6.745 18.539 1.826 4.42 3.467 8.229 4.23 10.87 2.015-.621 10.04-3.088 18.466-5.58 7.727-2.28 15.643-4.563 19.775-5.5l1.645-.335a8.48 8.48 0 01.788-.107 9.63 9.63 0 01.52-.012c6.517.004 53.948 3.52 58.637 3.867.768-4.666 1.751-9.321 3.018-13.758 1.014-3.54 2.413-7.273 4.057-11.07-2.625-.301-10.504-1.199-19.205-2.138-10.665-1.152-22.564-2.366-27.37-2.606-2.547-.128-6.697-.454-11.627-.857l-1.495-.123z"
            fill="#fff"

          />

        </g>
      </CustomTooltip>
    </ClickAwayListener>
  );
};

export default Asado;
