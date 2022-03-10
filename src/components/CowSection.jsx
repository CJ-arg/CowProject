// import { ClickAwayListener } from "@material-ui/core";
import React from "react";
import CustomTooltip from "./CustomTooltip";

export default function CowSection({ children, open, handleTooltipClose }) {
  return (
    // <ClickAwayListener onClickAway={handleTooltipClose}>
    <CustomTooltip
      // title={
      //   <ul>{latamMode ? cabezaTextLatam.map((str) => <p>{str} </p>) : cabezaText.map((str) => <p>{str} </p>)}</ul>
      // }
      // TransitionComponent={Zoom}
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
      {children}
    </CustomTooltip>
    // </ClickAwayListener>
  );
}
