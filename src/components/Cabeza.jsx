import React, { useState } from "react";
import ClickAwayListener from "@material-ui/core/ClickAwayListener/ClickAwayListener";
import { Zoom } from "@material-ui/core";
import CustomTooltip from "./CustomTooltip";

function Cabeza({ latamMode }) {
  const [open, setOpen] = useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  const cabezaText = ["🇦🇷: Sesos.", "🇧🇷: Miolos.", "🇪🇸: Sesos.", " 🇫🇷: Cervelle.", "🇺🇸: Brain."];
  const cabezaTextLatam = [
    "🇨🇱: Sesos.",
    "🇨🇴: Sesos de Res.",
    "🇪🇨: Sesos.",
    "🇲🇽: Sesos.",
    "🇵🇪: Sesos.",
    "🇺🇾: Sesos.",
    "🇻🇪: Sesos.",
  ];

  return (
    <ClickAwayListener onClickAway={handleTooltipClose}>
      <CustomTooltip
        title={
          <ul>{latamMode ? cabezaTextLatam.map((str) => <p>{str} </p>) : cabezaText.map((str) => <p>{str} </p>)}</ul>
        }
        TransitionComponent={Zoom}
        interactive
        TransitionProps={{ timeout: 600 }}
        arrow
        placement="top-end"
        PopperProps={{
          modifiers: {
            offset: {
              enabled: true,
              offset: "-100px, 3px",
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
          <path
            onTouchStart={handleTooltipOpen}
            onClick={handleTooltipOpen}
            d="M313.812 64.49c1.359 4.944 2.58 9.086 2.89 10.136 8.972.912 19.86 4.092 26.093 6.781 2.46 1.09 4.148 1.982 4.922 2.956 1.037 1.447 1.436 3.833 1.6 6.198.21.39.632.917 1.53 1.11 2.089.451 6.375 0 6.375 0s-5.349-3.117-5.256-3.17c4.804-2.732 10.022 4.092 14.609.535 4.173-2.62 2.135-8.442 5.531-11.644-5.531-6.792-12.422-13.78-13.1-22.998-.68-5.725-.97-11.935-4.366-16.787-1.65-2.814-4.852-.388-7.181-.194-1.456-1.358-2.038-3.3-2.62-5.143 1.455.776 3.009 1.553 4.465 2.33 1.94-1.942 3.783-3.882 5.434-6.114-2.62-.097-5.337-.097-7.957.194-2.814-2.426-5.53-4.852-8.346-7.278-5.725-1.261-11.838.194-16.98 3.008-2.896 1.633-6.077 2.528-9.323 2.99-1.082.153-2.13.206-3.259.155-.004.691-.006 1.396-.006 2.121-.002 6.451.184 13.996.898 18.127.713 4.17 2.47 10.961 4.047 16.686zm38.985-19.992c1.067 2.232 2.135 4.463 3.105 6.695-2.814-.582-5.628-1.261-8.248-2.426 1.65-1.552 3.396-2.91 5.143-4.27z"
            fill="#fff"
          />
        </g>
      </CustomTooltip>
    </ClickAwayListener>
  );
}

export default Cabeza;
