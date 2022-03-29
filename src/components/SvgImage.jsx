// @ts-nocheck
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/destructuring-assignment */
import React from "react";
import { Zoom } from "@material-ui/core";
import { cowSections } from "../cow.constants";

// import Aguja from "./Aguja";
// import Asado from "./Asado";
// import BifeAncho from "./BifeAncho";
// import BifeAngosto from "./BifeAngosto";
// import Cabeza from "./Cabeza";
// import Costillar from "./Costillar";
// import ColitaDeCuadril from "./ColitaDeCuadril";
// import Cuadrada from "./Cuadrada";
// import Cuello from "./Cuello";
// import Garron from "./Garron";
// import Cuadril from "./Cuadril";
// import Contorno from "./Contorno";
import CowSection from "./CowSection";
import Cuernos from "./Cuernos";
// import Lomo from "./Lomo";
// import Matambre from "./Matambre";
// import Nalga from "./Nalga";
// import Osobuco from "./Osobuco";
// import Paleta from "./Paleta";
import Patas from "./Patas";
// import Peceto from "./Peceto";
// import Pecho from "./Pecho";
import "./svgImage.css";
// import Tortuguita from "./Tortuguita";
// import Vacio from "./Vacio";

function SvgImage(props) {
  const [open, setOpen] = React.useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={599.993} height={373.481} viewBox="0 0 381.763 237.639" {...props}>
      {/* <Contorno latamMode={props.latamMode} /> */}
      <Cuernos />
      {/* <Pecho latamMode={props.latamMode} /> */}
      {/* <Cuello latamMode={props.latamMode} /> */}
      {/* <Costillar latamMode={props.latamMode} /> */}
      {/* <Cabeza latamMode={props.latamMode} /> */}
      {/* <Aguja latamMode={props.latamMode} /> */}
      {/* <Asado latamMode={props.latamMode} /> */}
      {/* <BifeAncho latamMode={props.latamMode} /> */}
      {/* <BifeAngosto latamMode={props.latamMode} /> */}
      {/* <ColitaDeCuadril latamMode={props.latamMode} /> */}
      {/* <Cuadrada latamMode={props.latamMode} /> */}
      {cowSections.map((Section) => (
        <CowSection key={Section.sectionId} open={open} Zoom={Zoom} handleTooltipClose={handleTooltipClose}>
          <Section.SvgComponent handleTooltipClose={handleTooltipClose} handleTooltipOpen={handleTooltipOpen} />
        </CowSection>
      ))}
      {/* <Paleta latamMode={props.latamMode} /> */}
      {/* <Cuadril latamMode={props.latamMode} /> */}
      {/* <Lomo latamMode={props.latamMode} /> */}

      {/* <Tortuguita latamMode={props.latamMode} /> */}
      {/* <Matambre latamMode={props.latamMode} /> */}
      {/* <Nalga latamMode={props.latamMode} /> */}
      {/* <Peceto latamMode={props.latamMode} /> */}

      {/* <Vacio latamMode={props.latamMode} /> */}

      {/* <Garron latamMode={props.latamMode} /> */}
      {/* <Osobuco latamMode={props.latamMode} /> */}
      <Patas latamMode={props.latamMode} />
      <path
        d="M14.042 148.035c1.65 6.114.485 12.712-2.523 18.243-3.007-5.919-.193-12.711 2.523-18.243z"
        fill="#6d7f8b"
      />
    </svg>
  );
}

export default SvgImage;
