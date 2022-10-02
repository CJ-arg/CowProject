import React, { useState } from "react";
import ClickAwayListener from "@material-ui/core/ClickAwayListener/ClickAwayListener";
import { Zoom } from "@material-ui/core";
import CustomTooltip from "./CustomTooltip";

function Vacio({ latamMode }) {
  const [open, setOpen] = useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };
  const vacioText = ["🇦🇷: Vacio.", "🇧🇷: Vazio.", "🇪🇸: Falda.", " 🇫🇷: Bavette.", "🇺🇸: Thin Flank."];
  const vacioTextLatam = ["🇨🇱: Tapa de Barriga.", "🇨🇴: Falda.", "🇪🇨: Falda Vacío.", "🇲🇽: Aldilla.", "🇵🇪: Malaya.", "🇺🇾: Falda.", "🇻🇪: Falda."];
  return (
    <ClickAwayListener onClickAway={handleTooltipClose}>
      <CustomTooltip
        title={<ul>{latamMode ? vacioTextLatam.map((str) => <p>{str} </p>) : vacioText.map((str) => <p>{str} </p>)}</ul>}
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
            d="M121.624 133.082c.717.1 1.455.184 2.184.275a103.022 103.022 0 01-.538-10.673c0-4.448.276-9.748 1.177-15.2.687-4.152 1.814-8.37 3.065-12.378-4.183 1.015-11.702 3.159-18.85 5.28-8.546 2.53-16.669 5.028-18.535 5.602a6.3 6.3 0 01.109.972c0 .072-.004.139-.006.205-.274 2.43-3.185 4.757-5.967 6.875a68.113 68.113 0 01-5.254 3.475l-1.518 9.534c2.249.126 9.122.597 20.6 2.15 6.442.874 14.454 2.637 23.533 3.883z"
            fill="#fff"
          />
        </g>
      </CustomTooltip>
    </ClickAwayListener>
  );
}

export default Vacio;
