/* eslint-disable linebreak-style */
import { Link, Zoom } from "@material-ui/core";
// @ts-ignore
import React from "react";
import CustomTooltip from "./CustomTooltip";

function Info() {
  const [open, setOpen] = React.useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };
  return (
    <CustomTooltip
      onClose={handleTooltipClose}
      open={open}
      disableFocusListener
      disableHoverListener
      disableTouchListener
      title={
        <ul>
          <li>
            <Link href="https://www.linkedin.com/in/carlos-janon-developer/" target="_blank">
              Linkedin
            </Link>
          </li>
          <br />
          <li>
            <Link href="https://github.com/CJ-arg" target="_blank">
              Github
            </Link>
          </li>
          <br />
          <li>
            <Link href="mailto:cowproyectapp@gmail.com">Mail</Link>
          </li>
        </ul>
      }
      TransitionComponent={Zoom}
      interactive
      TransitionProps={{ timeout: 600 }}
      placement="top-end"
      PopperProps={{
        disablePortal: true,
        modifiers: {
          offset: {
            enabled: true,
            offset: "-100px, 3px",
          },
        },
      }}
    >
      <div>
        <h4 className="latamMode" onClick={open ? handleTooltipClose : handleTooltipOpen}>
          Info
        </h4>
      </div>
    </CustomTooltip>
  );
}

export default Info;
