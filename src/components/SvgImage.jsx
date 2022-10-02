// @ts-nocheck
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/destructuring-assignment */
import React from "react";
import { ClickAwayListener, Zoom } from "@material-ui/core";
import Cuernos from "./Cuernos";
import "./svgImage.css";
import CustomTooltip from "./CustomTooltip";
import { cowSections } from "../cow.constants";

function SvgImage(props) {
  const [openSection, setOpenSection] = React.useState(null);
  const handleTooltipClose = () => {
    setOpenSection(null);
  };
  const handleTooltipOpen = (sectionId) => {
    setOpenSection(sectionId);
  };

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={599.993} height={373.481} viewBox="0 0 381.763 237.639" {...props}>
      {/* <Contorno latamMode={props.latamMode} /> */}
      <Cuernos />

      {cowSections.map((Section) => (
        <ClickAwayListener onClickAway={handleTooltipClose} mouseEvent="onMouseUp">
          <CustomTooltip
            title={<ul>{Section.getSectionName(props.latamMode)}</ul>}
            TransitionComponent={Zoom}
            interactive
            TransitionProps={{ timeout: 600 }}
            arrow
            placement={Section.sectionId === "Contorno" ? "right" : "bottom"}
            PopperProps={{
              modifiers: {
                offset: {
                  enabled: true,
                  offset: "-100px, 3px",
                },
              },
            }}
            open={openSection === Section.sectionId}
            onClose={handleTooltipClose}
            disableFocusListener
            disableHoverListener
            disableTouchListener
          >
            <g onClick={() => handleTooltipOpen(Section.sectionId)}>
              <Section.SvgComponent handleTooltipClose={handleTooltipClose} handleTooltipOpen={handleTooltipOpen} />
            </g>
          </CustomTooltip>
        </ClickAwayListener>
      ))}
      <path d="M14.042 148.035c1.65 6.114.485 12.712-2.523 18.243-3.007-5.919-.193-12.711 2.523-18.243z" fill="#6d7f8b" />
    </svg>
  );
}

export default SvgImage;
