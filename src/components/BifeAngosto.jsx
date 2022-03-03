import React, { useState } from "react";
import ClickAwayListener from "@material-ui/core/ClickAwayListener/ClickAwayListener";
import { Zoom } from "@material-ui/core";
import CustomTooltip from "./CustomTooltip";

function BifeAngosto({ latamMode }) {
  const [open, setOpen] = useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };
  const bifeAngostoText = [
    "🇦🇷: Bife Angosto.",
    "🇧🇷: Filé de costela.",
    "🇪🇸: Lomo Bajo.",
    "🇫🇷: Faux Filet.",
    "🇺🇸: Strip Loin.",
  ];
  const bifeAngostoTextLatam = [
    "🇨🇱: Lomo Veteado.",
    "🇨🇴: Lomo Ancho.",
    "🇪🇨: Lomo de Asado.",
    "🇲🇽: Lomo.",
    "🇵🇪: Churrasco largo redondo.",
    "🇺🇾: Espinazo sin Lomo.",
    "🇻🇪: Solomo de Cuerito.",
  ];
  return (
    <ClickAwayListener onClickAway={handleTooltipClose}>
      <CustomTooltip
        title={
          <ul>
            {latamMode
              ? bifeAngostoTextLatam.map((str) => <p> {str} </p>)
              : bifeAngostoText.map((str) => <p> {str}</p>)}
          </ul>
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
            d="M128.472 56.128c-.288 0-.556.013-.801.041-3.321.365-6.893 1.516-17.38 1.512-2.886 0-6.303-.085-10.393-.296-7.517-.386-13.413-2.468-17.82-4.865a40.381 40.381 0 00-1.84 4.508c-.884 2.574-1.754 5.921-2.043 9.545 2.871-1.168 9.979-3.71 18.312-4.092a55.81 55.81 0 012.442-.047c8.848 0 25.969 1.465 38.551 2.5a124.94 124.94 0 012.75-6.911c-3.628-.291-8.638-1.912-11.778-1.895z"
            fill="#fff"
          />
          <path
            onTouchStart={handleTooltipOpen}
            onClick={handleTooltipOpen}
            d="M110.212 36.703c9.067.582 20.057 1.506 27.684 2.654 4.143.634 7.228 1.273 8.736 2.115a4.577 4.577 0 011.432 1.27 132.871 132.871 0 014.33-6.81c-.912-.085-1.633-.154-1.793-.163-4.763-.265-9.528-.137-14.292-.49-5.725-.582-11.353-1.746-17.079-2.62-1.829.087-3.736.019-5.58.284-.103.014-.613.025-1.125.029-.69 1.376-1.655 2.809-2.313 3.73z"
            fill="#fff"
          />
          <path
            onTouchStart={handleTooltipOpen}
            onClick={handleTooltipOpen}
            d="M90.404 30.884c3.097-.11 6.229.307 9.321.61 3.767.18 7.453.696 11.206 1.385a25.201 25.201 0 01-.994 1.64 41.204 41.204 0 01-1.444 2.075c-4.91-.3-9.115-.492-11.694-.555-7.417-.181-13.189-.768-15.63-1.05a131.638 131.638 0 003.232-4.017c1.464-.006 4.568-.038 6.003-.088z"
            fill="#fff"
          />
        </g>
      </CustomTooltip>
    </ClickAwayListener>
  );
}

export default BifeAngosto;
