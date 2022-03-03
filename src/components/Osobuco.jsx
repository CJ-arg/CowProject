import React, { useState } from "react";
import ClickAwayListener from "@material-ui/core/ClickAwayListener/ClickAwayListener";
import { Zoom } from "@material-ui/core";
import CustomTooltip from "./CustomTooltip";

function Osobuco({ latamMode }) {
  const [open, setOpen] = useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };
  const osobucoText = ["🇦🇷: Osobuco.", "🇧🇷: Músculo.", "🇪🇸: Morcillo.", " 🇫🇷: Jarret.", "🇺🇸: Shank."];
  const osobucoTextLatam = [
    "🇨🇱: Osobuco.",
    "🇨🇴: Lagarto de Brazo.",
    "🇪🇨: Pulpa Blanca.",
    "🇲🇽: Chambarete.",
    "🇵🇪: Osobuco Anterior.",
    "🇺🇾: Brazuelo Deshuesado.",
    "🇻🇪: Lagarto sin Hueso.",
  ];
  return (
    <ClickAwayListener onClickAway={handleTooltipClose}>
      <CustomTooltip
        title={
          <ul>{latamMode ? osobucoTextLatam.map((str) => <p>{str} </p>) : osobucoText.map((str) => <p>{str} </p>)}</ul>
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
            d="M244 160.32c.268 1.174.335 2.314.338 3.168 0 .444-.017.806-.034 1.06 1.403 1.1 2.776 2.442 2.917 3.478 1.4 7.93 2.8 15.95 5.665 23.455.026.067.09.289.172.59 3.553.171 6.655.323 9.275.486-.434-1.397-.745-2.453-.762-2.811-.496-10.202 3.215-20.177 7.56-29.332.003-.008.174-.08.451-.22.057-.648.166-1.334.362-2.056-2.655.187-9.618.652-13.536.652-3.849-.004-10.194 1.115-12.408 1.53z"
            fill="#fff"
          />
        </g>
      </CustomTooltip>
    </ClickAwayListener>
  );
}

export default Osobuco;
