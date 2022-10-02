import React, { useState } from "react";
import ClickAwayListener from "@material-ui/core/ClickAwayListener/ClickAwayListener";
import { Zoom } from "@material-ui/core";
import CustomTooltip from "./CustomTooltip";

function BifeAncho({ latamMode }) {
  const [open, setOpen] = useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };
  const bifeAnchoText = ["🇦🇷: Bife Ancho.", "🇧🇷: Capa de filé.", "🇪🇸: Lomo ALto.", " 🇫🇷: Côtes, Entrecôtes.", "🇺🇸: Fore Rib."];
  const bifeAnchoTextLatam = [
    "🇨🇱: Lomo Liso.",
    "🇨🇴: Lomo Ancho.",
    "🇪🇨: Lomo de Falda.",
    "🇲🇽: Lomo.",
    "🇵🇪: Churrasco largo redondo.",
    "🇺🇾: Espinazo con Lomo.",
    "🇻🇪: Solomo de Cuerito.",
  ];
  return (
    <ClickAwayListener onClickAway={handleTooltipClose}>
      <CustomTooltip
        title={<ul>{latamMode ? bifeAnchoTextLatam.map((str) => <p>{str} </p>) : bifeAnchoText.map((str) => <p>{str} </p>)}</ul>}
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
            d="M175.989 37.356c-1.578 2.096-3.075 4.246-4.097 6.073-1.606 2.848-3.093 8.981-4.114 14.319a194.181 194.181 0 00-1.585 9.539c12.84 1.303 28.213 3.06 31.105 3.393 5.95-13.318 14.793-27.283 21.324-36.869-1.62.255-3.05.466-3.537.511-5.697.535-11.298 1.933-16.962 2.412-6.8.931-13.6.79-20.486.692-.145-.001-.897-.035-1.648-.07z"
            fill="#000"
          />
        </g>
      </CustomTooltip>
    </ClickAwayListener>
  );
}

export default BifeAncho;
