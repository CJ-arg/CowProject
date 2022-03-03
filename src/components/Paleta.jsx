import React, { useState } from "react";
import ClickAwayListener from "@material-ui/core/ClickAwayListener/ClickAwayListener";
import { Zoom } from "@material-ui/core";
import CustomTooltip from "./CustomTooltip";

function Paleta({ latamMode }) {
  const [open, setOpen] = useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };
  const paletaText = ["🇦🇷: Marucha.", "🇧🇷: Paleta.", "🇪🇸: Espalda.", " 🇫🇷: Paleron.", "🇺🇸: Shoulderclod."];
  const paletaTextLatam = [
    "🇨🇱: Posta de Paleta.",
    "🇨🇴: Bola de Brazo.",
    "🇪🇨: Pulpa de Brazo.",
    "🇲🇽: Planchuela.",
    "🇵🇪: Bistec de cabeza de lomo.",
    "🇺🇾: Pulpa abajo del asado.",
    "🇻🇪: Chocozuela.",
  ];
  return (
    <ClickAwayListener onClickAway={handleTooltipClose}>
      <CustomTooltip
        title={
          <ul>{latamMode ? paletaTextLatam.map((str) => <p>{str} </p>) : paletaText.map((str) => <p>{str} </p>)}</ul>
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
            d="M256.407 157.335c4.159 0 11.997-.545 14.014-.69 1.321-4.373 7.63-32.058 7.618-55.833 0-1.137-.014-2.263-.042-3.378-.196-8.093-3.87-26.334-13.146-36.15-4.866-5.172-11.18-8.193-17.785-8.19-6.688.004-13.718 3.08-19.946 10.347-5.73 6.69-7.949 15.383-7.949 24.858-.032 30.04 22.514 67.423 23.779 69.373.251.4.449.823.619 1.252 2.055-.391 8.658-1.586 12.838-1.589z"
            fill="#000"
          />
        </g>
      </CustomTooltip>
    </ClickAwayListener>
  );
}

export default Paleta;
