/* eslint-disable linebreak-style */
import { Link, Zoom } from "@material-ui/core";
// @ts-ignore
import React from "react";
import CustomTooltip from "./CustomTooltip";

function Info() {
  return (
    <CustomTooltip
      title={
        <ul>
          Contacto:
          <li>
            <Link href="https://www.linkedin.com/in/carlos-janon-developer/">Linkedin</Link>
          </li>
          <li>
            <Link href="https://github.com/CJ-arg">Github</Link>
          </li>
          <li>
            <Link href="mailto:m.bluth@example.com">Mail</Link>
          </li>
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
    >
      <div>
        <h4 className="latamMode"> Info </h4>
      </div>
    </CustomTooltip>
  );
}

export default Info;
