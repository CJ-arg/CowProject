import React, { useState } from "react";
import ClickAwayListener from "@material-ui/core/ClickAwayListener/ClickAwayListener";
import { Zoom } from "@material-ui/core";
import CustomTooltip from "./CustomTooltip";

function ColitaDeCuadril({ latamMode }) {
  const [open, setOpen] = useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };
  const colitaDeCuadrilText = ["🇦🇷: Colita De Cuadril.", "🇧🇷: Maminha de Alcatra.", "🇪🇸: Rabillo de Cadera.", "🇫🇷: Bavette d' Aloyau.", "🇺🇸: Tri Tip."];
  const colitaDeCuadrilTextLatam = [
    "🇨🇱: Punta de picana.",
    "🇨🇴: Colita de Cadera.",
    "🇪🇨: Pajarilla.",
    "🇲🇽: Empuje.",
    "🇵🇪: Bistec de Cadera .",
    "🇺🇾: Cuadril.",
    "🇻🇪: Punta de trasero.",
  ];

  return (
    <ClickAwayListener onClickAway={handleTooltipClose}>
      <CustomTooltip
        title={<ul>{latamMode ? colitaDeCuadrilTextLatam.map((str) => <p>{str} </p>) : colitaDeCuadrilText.map((str) => <p>{str} </p>)}</ul>}
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
            d="M78.102 116.363a66.731 66.731 0 005.3-3.493c2.737-1.945 5.407-4.59 5.375-5.792l.003-.116c.044-1.59-2.073-6.765-4.57-12.698-2.09-5.018-4.429-10.698-5.993-15.838-1.112.407-3.615 1.382-6.112 2.817-3.385 1.916-6.542 4.682-6.481 7.516 0 .515.09 1.046.302 1.609 2.14 5.707 6.54 16.47 9.167 22.062.844 1.824 1.596 3.182 1.773 3.347.694.545 1.099.581 1.236.586z"
            fill="#000"
          />
        </g>
      </CustomTooltip>
    </ClickAwayListener>
  );
}

export default ColitaDeCuadril;
