import React from "react";

// sectionId
// getSectionName
// SvgComponent

export const cowSections = [
  {
    sectionId: "Contorno",
    getSectionName: (latamMode) =>
      latamMode ? (
        <p> El cuero de vaca ha sido utilizado desde tiempos ancestrales para vestir a las personas.</p>
      ) : (
        <p> Cow leather has been used since ancient times to dress people.</p>
      ),
    SvgComponent: (pathProps) => (
      <g>
        <path
          {...pathProps}
          d="M365.315 93.695c5.434-2.62 7.18-8.83 10.381-13.488 1.165-1.455-.485-3.105-1.163-4.464-4.56-6.501-11.353-12.032-12.518-20.377-.97-8.054-1.842-16.787-7.472-23.192 1.263-1.65 3.495-2.911 3.59-5.24-2.522-.388-5.045-.873-7.568-1.358 1.067-2.33 2.329-4.658 2.911-7.084.873-5.24-.97-10.48-3.784-14.75-1.941 4.464-3.494 9.413-6.89 13.003-4.075 3.203-9.121-.873-13.585.68-2.717.582-5.822 2.717-8.345.485-3.397-1.65-3.3-5.725-4.27-8.83-2.524 4.366-3.881 9.412-3.494 14.555-1.404-.02-2.8-.123-4.19-.268-.161-.016-.322-.037-.484-.054l-.485-.055c-.16-.018-.323-.033-.483-.054-4.51-.586-8.965-1.69-13.423-2.813l-.302-.076-.348-.087-.63-.16c-6.899-1.733-13.82-3.377-20.99-3.033-12.712.97-25.23 4.366-37.068 8.927-3.58 1.417-7.273 2.429-11.037 3.132-.224.042-.45.076-.675.116-.225.04-.451.078-.677.115-.222.037-.444.08-.667.115-.466.072-.933.145-1.402.21-10.772.874-21.154 4.173-31.925 4.173-3.19 0-6.379.02-9.565-.005-.205-.001-.41-.005-.616-.007l-.62-.007-.614-.006c-5.596-.077-11.178-.33-16.725-1.14-1.223-.01-2.444-.03-3.662-.053-.197-.004-.393-.01-.59-.015-.198-.003-.395-.008-.592-.013l-.539-.013c-9.24-.226-18.425-.853-27.609-2.235-4.489-.555-8.977-.932-13.455-1.293h-.007l-.483-.039-.487-.039c-4.585-.366-9.158-.727-13.707-1.249-3.987-.193-7.991-.26-11.997-.268h-.874l-.327.002c-5.636.004-11.275.114-16.884.168-4.172-.097-8.442 1.359-12.614.486-5.143-.583-10.383-.68-15.526-.388-1.174.068-2.385-.01-3.602-.065-.218-.01-.436-.018-.654-.026-1.987-.068-3.977.006-5.835.964-8.636 3.202-13.585 11.644-17.66 19.504C9.39 55.85 8.42 64.388 7.546 72.733c-.097 13.974.097 27.947 1.165 41.823.873 6.696-.097 13.682 1.455 20.28.13.741.265 2.558.272 2.736.208 5.509-4.037 18.25-4.39 20.364-.494 2.956-.48 4.799-.182 7.4.297 2.6 1.874 8.51 3.523 12.779 4.687-6.468 8.649-13.93 9.438-21.952.028-.283.195-2.243-.005-4.46-.15-1.665-.558-3.318-.65-3.696a3.046 3.046 0 00-.012-.045c-.529-2.157-1.2-4.296-1.68-6.467-.011-.054-.64-4.4-.59-5.591-.096-4.076-.776-8.151-1.26-12.324-1.068-9.8-1.748-19.795-1.262-29.693.873 5.046 1.65 10.092 2.134 15.235 2.426 10.189 5.823 20.28 11.354 29.208.07.109.798 1.48.864 1.63.9 2.043 1.18 4.291.494 6.424-1.384 5.101-3.914 9.82-5.412 14.974-.138.474-.263.953-.382 1.436-.039.159-.088.314-.125.474-1.067 5.046-3.008 10.092-2.426 15.429.776 11.935-1.747 23.677-5.337 34.933.485 5.92 2.038 11.936 2.911 17.952 4.755.97 9.704.582 14.653.68 2.814 0 5.725.193 8.442-.68-2.232-3.785-4.464-7.666-6.502-11.548-1.067-2.134.389-4.27.874-6.307 1.65-4.27-2.33-8.442-.874-12.615.635-1.744 1.193-3.57 2-5.237.674-1.391 1.519-2.674 2.755-3.69a187.523 187.523 0 002.546 7.225 580.254 580.254 0 002.694 7.038c.582 3.106.194 6.308 1.262 9.316.873 4.56 6.695 5.725 7.568 10.189.68 2.426 1.165 4.949 1.553 7.374 5.822.292 11.644 0 17.467.874 2.425-.097 5.24.777 7.277-.97-2.814-5.338-5.919-10.578-9.8-15.235-4.076-4.755-4.173-11.256-6.114-16.982-.97-3.299-2.717-6.404-3.59-9.8-.485-3.494-.194-7.181.097-10.674 1.747-9.025 2.329-18.146 2.232-27.267 0-1.844.388-3.785 1.747-5.143.927-1.025 1.822-2.08 2.709-3.145.11-.132.222-.263.332-.396.106-.13.215-.256.322-.385l.01-.01c2.408-2.918 4.74-5.913 7.203-8.775 1.068-.874 1.941-2.33 3.59-2.135.173 0 .343.014.515.017.193.003.386.02.58.027.197.006.394.016.591.027.197.01.394.012.59.027 4.09.31 8.157 1.392 12.086 2.619 6.405 3.493 12.518 8.248 19.796 9.995 3.59.679 7.18 1.746 10.48 3.396 5.822 2.62 10.674 7.375 17.078 8.733 3.105.583 6.21 2.038 9.315 1.456 4.27-2.62 8.151-6.307 13.294-6.793 9.122-.679 17.855 2.232 26.491 4.852 6.308.97 12.712 0 19.02.776 10.71.384 21.137 3.218 31.096 7.015.146.056.295.11.44.166.01.136.024.272.035.408.193 2.58.465 5.161.741 7.742.432 6.112 2.317 11.947 3.856 17.859l.126.492.127.495.123.483c.718 2.898 1.319 5.822 1.592 8.812.388 4.27-1.068 8.345-2.134 12.42 1.163 1.456 2.328 2.911 3.202 4.464 1.94 2.814 1.164 6.307 1.747 9.51 3.105.194 6.113.194 9.218.388 2.329.873 4.464 2.426 7.084 2.523 6.016.388 12.032.679 18.05.388-2.04-3.105-4.465-6.016-6.793-8.928-3.01-3.784-4.852-8.15-6.696-12.517-1.553-3.979-.679-8.442-2.328-12.324-.428-1.17-.888-2.348-1.308-3.54-.059-.166-.108-.333-.165-.5a43.514 43.514 0 01-.166-.503c-.053-.162-.11-.322-.16-.485-.735-2.391-1.178-4.842-.724-7.393 1.046-6.944 2.66-13.884 5.648-20.188.06-.127.112-.258.174-.384.029-.08.073-.146.107-.222.068-.157.135-.316.219-.454l.055-.086c.01-.016.022-.029.033-.044.116-.176.237-.344.373-.496 1.674-1.878 4.833-2.05 6.296-4.326 2.815-3.688 3.397-8.345 4.852-12.615 1.165-4.56 3.59-8.636 5.822-12.712 3.397-6.501 3.106-14.264 6.308-20.765 4.852-6.987 13.876-7.957 21.542-9.607 5.53-1.844 11.159-3.3 16.787-4.658 5.023-1.076 9.714-4.3 15.069-4.324.16 0 .323.017.483.02.162.005.324.01.487.021.12.008.239.003.36.015 5.33.682 10.862.488 16.005-.87zM13.17 91.366c.097-8.539-.874-17.175.873-25.617 1.262-10.48 5.92-20.378 12.809-28.238 1.65-2.038 3.978-3.202 6.404-3.978-2.814 3.59-6.21 6.695-8.345 10.77C16.857 58.666 14.82 75.356 13.17 91.367z"
          fill="#000"
        />
      </g>
    ),
  },
  {
    sectionId: "Aguja",
    getSectionName: (latamMode) =>
      latamMode
        ? ["🇨🇱: Huachalomo.", "🇨🇴: Lomo de Aguja.", "🇪🇨: Lomo de Aguja.", "🇲🇽: Tapa de Lomo.", "🇵🇪: Asado de Aguja.", "🇺🇾: Aguja.", "🇻🇪: Solomo abierto."].map(
            (str) => <p key={str}>{str} </p>
          )
        : ["🇦🇷: Aguja.", "🇧🇷: Acém.", "🇪🇸: Morrillo.", " 🇫🇷: Basses côtes.", "🇺🇸: Chuck."].map((str) => <p key={str}>{str} </p>),
    SvgComponent: (pathProps) => (
      <g>
        <path
          {...pathProps}
          d="M213.899 43.616c-7.686 12.069-16.271 27.328-19.868 39.927-4.712 16.49-5.546 36.26-5.542 47.993-.002 6.26.233 10.218.235 10.23h-.027c5.904.97 10.149 1.65 11.713 1.74 10.796.636 29.69 2.007 34.36 2.35-7.098-13.995-17.036-37.225-17.056-57.56 0-9.69 2.276-18.769 8.3-25.805 6.437-7.528 13.905-10.861 21.052-10.855 5.828 0 11.406 2.205 16.043 6.027 2.762-4.133 16.002-23.902 20.376-29.589 1.365-1.764 3.282-3.524 5.353-5.155-10.944-3.153-22.862-2.9-33.854.133-9.703 2.232-18.728 6.89-28.528 9.218-.55.194-1.143.334-1.738.481-.532.131-2.257.435-4.117.74a348.934 348.934 0 00-6.702 10.125z"
          fill="#fff"
        />
      </g>
    ),
  },
  {
    sectionId: "Asado",
    getSectionName: (latamMode) =>
      latamMode
        ? ["🇨🇱: Asado de Tira.", "🇨🇴: Asado de Tira.", "🇪🇨: Costilla.", "🇲🇽: Costilla.", "🇵🇪: Costilla.", "🇺🇾: Asado.", "🇻🇪:Costillas."].map((str) => (
            <p key={str}>{str} </p>
          ))
        : ["🇦🇷: Asado.", "🇧🇷: Aba.", "🇪🇸: Falda.", "🇫🇷: Bavette.", "🇺🇸: Rib."].map((str) => <p key={str}>{str} </p>),
    SvgComponent: (pathProps) => (
      <g>
        <path
          {...pathProps}
          d="M136.992 66.352c-12.56-1.032-29.393-2.464-38.045-2.464-.885 0-1.68.017-2.376.048-5.251.238-10.048 1.375-13.524 2.453a52.14 52.14 0 00-4.94 1.793c-.007.278-.023.553-.023.833 0 2.021.21 4.096.724 6.147 1.414 5.66 4.254 12.566 6.745 18.539 1.826 4.42 3.467 8.229 4.23 10.87 2.015-.621 10.04-3.088 18.466-5.58 7.727-2.28 15.643-4.563 19.775-5.5l1.645-.335a8.48 8.48 0 01.788-.107 9.63 9.63 0 01.52-.012c6.517.004 53.948 3.52 58.637 3.867.768-4.666 1.751-9.321 3.018-13.758 1.014-3.54 2.413-7.273 4.057-11.07-2.625-.301-10.504-1.199-19.205-2.138-10.665-1.152-22.564-2.366-27.37-2.606-2.547-.128-6.697-.454-11.627-.857l-1.495-.123z"
          fill="#fff"
        />
      </g>
    ),
  },
  {
    sectionId: "BifeAncho",
    getSectionName: (latamMode) =>
      latamMode
        ? [
            "🇨🇱: Lomo Liso.",
            "🇨🇴: Lomo Ancho.",
            "🇪🇨: Lomo de Falda.",
            "🇲🇽: Lomo.",
            "🇵🇪: Churrasco largo redondo.",
            "🇺🇾: Espinazo con Lomo.",
            "🇻🇪: Solomo de Cuerito.",
          ].map((str) => <p key={str}>{str} </p>)
        : ["🇦🇷: Bife Ancho.", "🇧🇷: Capa de filé.", "🇪🇸: Lomo ALto.", " 🇫🇷: Côtes, Entrecôtes.", "🇺🇸: Fore Rib."].map((str) => <p key={str}>{str} </p>),
    SvgComponent: (pathProps) => (
      <g>
        <path
          {...pathProps}
          d="M175.989 37.356c-1.578 2.096-3.075 4.246-4.097 6.073-1.606 2.848-3.093 8.981-4.114 14.319a194.181 194.181 0 00-1.585 9.539c12.84 1.303 28.213 3.06 31.105 3.393 5.95-13.318 14.793-27.283 21.324-36.869-1.62.255-3.05.466-3.537.511-5.697.535-11.298 1.933-16.962 2.412-6.8.931-13.6.79-20.486.692-.145-.001-.897-.035-1.648-.07z"
          fill="#000"
        />
      </g>
    ),
  },
  {
    sectionId: "BifeAngosto",
    getSectionName: (latamMode) =>
      latamMode
        ? [
            "🇨🇱: Lomo Veteado.",
            "🇨🇴: Lomo Ancho.",
            "🇪🇨: Lomo de Asado.",
            "🇲🇽: Lomo.",
            "🇵🇪: Churrasco largo redondo.",
            "🇺🇾: Espinazo sin Lomo.",
            "🇻🇪: Solomo de Cuerito.",
          ].map((str) => <p key={str}>{str} </p>)
        : ["🇦🇷: Bife Angosto.", "🇧🇷: Filé de costela.", "🇪🇸: Lomo Bajo.", "🇫🇷: Faux Filet.", "🇺🇸: Strip Loin."].map((str) => <p key={str}>{str} </p>),
    SvgComponent: (pathProps) => (
      <g>
        <path
          {...pathProps}
          d="M128.472 56.128c-.288 0-.556.013-.801.041-3.321.365-6.893 1.516-17.38 1.512-2.886 0-6.303-.085-10.393-.296-7.517-.386-13.413-2.468-17.82-4.865a40.381 40.381 0 00-1.84 4.508c-.884 2.574-1.754 5.921-2.043 9.545 2.871-1.168 9.979-3.71 18.312-4.092a55.81 55.81 0 012.442-.047c8.848 0 25.969 1.465 38.551 2.5a124.94 124.94 0 012.75-6.911c-3.628-.291-8.638-1.912-11.778-1.895z"
          fill="#fff"
        />
        <path
          {...pathProps}
          d="M110.212 36.703c9.067.582 20.057 1.506 27.684 2.654 4.143.634 7.228 1.273 8.736 2.115a4.577 4.577 0 011.432 1.27 132.871 132.871 0 014.33-6.81c-.912-.085-1.633-.154-1.793-.163-4.763-.265-9.528-.137-14.292-.49-5.725-.582-11.353-1.746-17.079-2.62-1.829.087-3.736.019-5.58.284-.103.014-.613.025-1.125.029-.69 1.376-1.655 2.809-2.313 3.73z"
          fill="#fff"
        />
        <path
          {...pathProps}
          d="M90.404 30.884c3.097-.11 6.229.307 9.321.61 3.767.18 7.453.696 11.206 1.385a25.201 25.201 0 01-.994 1.64 41.204 41.204 0 01-1.444 2.075c-4.91-.3-9.115-.492-11.694-.555-7.417-.181-13.189-.768-15.63-1.05a131.638 131.638 0 003.232-4.017c1.464-.006 4.568-.038 6.003-.088z"
          fill="#fff"
        />
      </g>
    ),
  },
  {
    sectionId: "Cabeza",
    getSectionName: (latamMode) =>
      latamMode
        ? ["🇨🇱: Sesos.", "🇨🇴: Sesos de Res.", "🇪🇨: Sesos.", "🇲🇽: Sesos.", "🇵🇪: Sesos.", "🇺🇾: Sesos.", "🇻🇪: Sesos."].map((str) => <p key={str}>{str} </p>)
        : ["🇦🇷: Sesos.", "🇧🇷: Miolos.", "🇪🇸: Sesos.", " 🇫🇷: Cervelle.", "🇺🇸: Brain."].map((str) => <p key={str}>{str} </p>),
    SvgComponent: (pathProps) => (
      <g>
        <path
          {...pathProps}
          d="M313.812 64.49c1.359 4.944 2.58 9.086 2.89 10.136 8.972.912 19.86 4.092 26.093 6.781 2.46 1.09 4.148 1.982 4.922 2.956 1.037 1.447 1.436 3.833 1.6 6.198.21.39.632.917 1.53 1.11 2.089.451 6.375 0 6.375 0s-5.349-3.117-5.256-3.17c4.804-2.732 10.022 4.092 14.609.535 4.173-2.62 2.135-8.442 5.531-11.644-5.531-6.792-12.422-13.78-13.1-22.998-.68-5.725-.97-11.935-4.366-16.787-1.65-2.814-4.852-.388-7.181-.194-1.456-1.358-2.038-3.3-2.62-5.143 1.455.776 3.009 1.553 4.465 2.33 1.94-1.942 3.783-3.882 5.434-6.114-2.62-.097-5.337-.097-7.957.194-2.814-2.426-5.53-4.852-8.346-7.278-5.725-1.261-11.838.194-16.98 3.008-2.896 1.633-6.077 2.528-9.323 2.99-1.082.153-2.13.206-3.259.155-.004.691-.006 1.396-.006 2.121-.002 6.451.184 13.996.898 18.127.713 4.17 2.47 10.961 4.047 16.686zm38.985-19.992c1.067 2.232 2.135 4.463 3.105 6.695-2.814-.582-5.628-1.261-8.248-2.426 1.65-1.552 3.396-2.91 5.143-4.27z"
          fill="#fff"
        />
      </g>
    ),
  },
  {
    sectionId: "ColitaDeCuadril",
    getSectionName: (latamMode) =>
      latamMode
        ? [
            "🇨🇱: Punta de picana.",
            "🇨🇴: Colita de Cadera.",
            "🇪🇨: Pajarilla.",
            "🇲🇽: Empuje.",
            "🇵🇪: Bistec de Cadera .",
            "🇺🇾: Cuadril.",
            "🇻🇪: Punta de trasero.",
          ].map((str) => <p key={str}>{str} </p>)
        : ["🇦🇷: Colita De Cuadril.", "🇧🇷: Maminha de Alcatra.", "🇪🇸: Rabillo de Cadera.", "🇫🇷: Bavette d' Aloyau.", "🇺🇸: Tri Tip."].map((str) => (
            <p key={str}>{str} </p>
          )),
    SvgComponent: (pathProps) => (
      <g>
        <path
          {...pathProps}
          d="M78.102 116.363a66.731 66.731 0 005.3-3.493c2.737-1.945 5.407-4.59 5.375-5.792l.003-.116c.044-1.59-2.073-6.765-4.57-12.698-2.09-5.018-4.429-10.698-5.993-15.838-1.112.407-3.615 1.382-6.112 2.817-3.385 1.916-6.542 4.682-6.481 7.516 0 .515.09 1.046.302 1.609 2.14 5.707 6.54 16.47 9.167 22.062.844 1.824 1.596 3.182 1.773 3.347.694.545 1.099.581 1.236.586z"
          fill="#000"
        />
      </g>
    ),
  },
  {
    sectionId: "Costillar",
    getSectionName: (latamMode) =>
      latamMode
        ? ["🇨🇱: Costillar.", "🇨🇴: Costilla.", "🇪🇨: Costilla.", "🇲🇽: Costilla Cargada.", "🇵🇪: Sancochado de Costillar.", "🇺🇾: Falda.", "🇻🇪: Costillas."].map(
            (str) => <p key={str}>{str} </p>
          )
        : ["🇦🇷: Costillar.", "🇧🇷: Ponta de agulha.", "🇪🇸: Costillar.", " 🇫🇷: Plat de côtes.", "🇺🇸: Short Plate."].map((str) => <p key={str}>{str} </p>),
    SvgComponent: (pathProps) => (
      <g>
        <path
          {...pathProps}
          d="M162.943 96.436c-13.882-.973-28.656-1.946-31.964-1.944-.19 0-.34.004-.433.01-.272.013-.759.097-1.387.229-1.34 4.2-2.558 8.638-3.276 12.99-.884 5.348-1.157 10.574-1.155 14.962-.001 5.175.374 9.166.565 10.86 9.643 1.13 20.237 1.737 30.78 3.178 11.621 1.589 22.845 3.44 31.179 4.81-.053-1.052-.22-4.712-.22-9.994.003-8.354.42-20.736 2.354-33.19-2.491-.185-14.12-1.047-26.443-1.91z"
          fill="#000"
        />
      </g>
    ),
  },
  {
    sectionId: "Cuadrada",
    getSectionName: (latamMode) =>
      latamMode
        ? ["🇨🇱: Ganso.", "🇨🇴: Bota.", "🇪🇨: Pulpa Blanca.", "🇲🇽: Contra Cara.", "🇵🇪: Asado de Pierna .", "🇺🇾: Pulpa Cadera.", "🇻🇪: Muchacho Cuadrado."].map(
            (str) => <p key={str}>{str} </p>
          )
        : ["🇦🇷: Cuadrada.", "🇧🇷: Alcatra.", "🇪🇸: Contra.", " 🇫🇷: Tranche Ronde.", "🇺🇸: Top Sirloin."].map((str) => <p key={str}>{str} </p>),
    SvgComponent: (pathProps) => (
      <g>
        <path
          {...pathProps}
          d="M75.948 116.906c-.358-.316-.543-.676-.89-1.284a46 46 0 01-1.16-2.308c-.88-1.866-1.967-4.328-3.108-7.002-2.279-5.349-4.767-11.537-6.227-15.434a6.012 6.012 0 01-.397-2.12c.061-3.907 3.75-6.758 7.213-8.777 2.674-1.534 5.317-2.555 6.429-2.957-.142-.505-.289-1.016-.412-1.508-.547-2.184-.768-4.378-.768-6.5.008-8.111 3.198-15.212 4.18-17.216-5.283-3.143-8.115-6.577-8.741-7.393-1.42 1.213-2.851 2.298-4.258 3.168-9.054 5.569-18.603 6.579-22.476 8.02 3.695 12.6 8.2 26.831 12.224 36.386 4.388 10.424 11.088 22.405 16.685 31.766.624 1.042 1.23 2.046 1.822 3.017l1.439-9.038c-.433-.11-.96-.342-1.555-.82z"
          fill="#fff"
        />
      </g>
    ),
  },
  {
    sectionId: "Cuadril",
    getSectionName: (latamMode) =>
      latamMode
        ? [
            "🇨🇱: Asiento de Picana.",
            "🇨🇴: Punta de Anca.",
            "🇪🇨: Punta de Cadera.",
            "🇲🇽: Aguayón.",
            "🇵🇪: Asado de Cadera.",
            "🇺🇾: Cuadril con Hueso.",
            "🇻🇪: Rabillo de Cadera.",
          ].map((str) => <p key={str}>{str} </p>)
        : ["🇦🇷: Cuadril.", "🇧🇷: Alcatra.", "🇪🇸: Cadera sin Babilla.", "🇫🇷: Rumstek.", "🇺🇸: Rump."].map((str) => <p key={str}>{str} </p>),
    SvgComponent: (pathProps) => (
      <g>
        <path
          {...pathProps}
          d="M44.928 54.203c4.356-1.563 13.411-2.507 22.12-7.868 4.594-2.82 9.673-8.24 13.557-12.943.707-.856 1.36-1.673 1.98-2.46-3.278-.135-6.556-.183-9.835-.02-9.315 1.261-18.728.679-28.14.582-1.999-.231-3.812.637-5.54 1.682a971.982 971.982 0 005.28 19.032c.188.66.383 1.327.578 1.995z"
          fill="#fff"
        />
      </g>
    ),
  },
  {
    sectionId: "Cuello",
    getSectionName: (latamMode) =>
      latamMode
        ? ["🇨🇱: Cogote.", "🇨🇴: Cogote.", "🇪🇨: Nuca.", "🇲🇽: Pescuezo.", "🇵🇪: Pescueso.", "🇺🇾: Cogote.", "🇻🇪: Pescuezo."].map((str) => <p key={str}>{str} </p>)
        : ["🇦🇷: Cogote.", "🇧🇷: Pescoço.", "🇪🇸: Pescuezo.", " 🇫🇷: Collier.", "🇺🇸: Neck and Sticking."].map((str) => <p key={str}>{str} </p>),
    SvgComponent: (pathProps) => (
      <g>
        <path
          {...pathProps}
          d="M284.637 28.963c-2.398 3.117-7.62 10.706-12.225 17.491a2023.716 2023.716 0 00-8.195 12.172 30.276 30.276 0 011.693 1.659c9.696 10.357 13.296 28.703 13.54 37.11.03 1.13.043 2.269.045 3.417 0 .22-.005.44-.006.66 1.946-2.572 5.813-7.505 10.438-12.469 6.713-7.146 14.834-14.433 21.532-14.634.212-.003.428-.008.647-.008.969 0 1.992.051 3.038.128-1.086-3.686-5.526-18.952-6.813-26.439-.744-4.344-.917-11.88-.92-18.374 0-.77.003-1.516.008-2.248-.269-.034-.527-.058-.811-.105-3.785-.679-7.472-1.65-11.258-2.426-1.073-.189-3.336-.92-4.842-1.425-2.31 1.75-4.462 3.653-5.871 5.491z"
          fill="#fff"
        />
      </g>
    ),
  },
  {
    sectionId: "Garron",
    getSectionName: (latamMode) =>
      latamMode
        ? [
            "🇨🇱: Bola.",
            "🇨🇴: Lagarto de Pierna.",
            "🇪🇨: Lagarto.",
            "🇲🇽: Chambarrete.",
            "🇵🇪: Osobuco Posterior.",
            "🇺🇾: Garrón con Hueso.",
            "🇻🇪: Lagarto con Hueso.",
          ].map((str) => <p key={str}>{str} </p>)
        : ["🇦🇷: Garrón.", "🇧🇷: Músculo.", "🇪🇸: Morcillo.", " 🇫🇷: Gîte.", "🇺🇸: Shank."].map((str) => <p key={str}>{str} </p>),
    SvgComponent: (pathProps) => (
      <g>
        <path
          {...pathProps}
          d="M32.69 169.492c2.958.828 8.055.966 10.681.962.786 0 1.352-.01 1.592-.016a99.344 99.344 0 011.677-2.944c4.744-7.965 10.053-15.523 11.872-18.734-3.164-.12-8.002-.413-12.784-1.138-5.064-.787-9.975-3.966-13.084-6.363-1.296 5.787-3.584 13.314-5.405 18.033-.25.871-.568 1.85-.708 2.82-.2.719-.433 1.55-.667 2.422.309.331.646.683 1.014 1.045 1.653 1.632 3.857 3.38 5.812 3.913z"
          fill="#000"
        />
      </g>
    ),
  },
  {
    sectionId: "Lomo",
    getSectionName: (latamMode) =>
      latamMode
        ? ["🇨🇱: Filete.", "🇨🇴: Lomo Fino.", "🇪🇨: Lomo Fino.", "🇲🇽: Fileta.", "🇵🇪: Lomo.", "🇺🇾: Lomo.", "🇻🇪: Lomito."].map((str) => <p key={str}>{str} </p>)
        : ["🇦🇷: Lomo.", "🇧🇷: Filé Mignon.", "🇪🇸: Solomillo.", " 🇫🇷: Fillet.", "🇺🇸: Tenderloin."].map((str) => <p key={str}>{str} </p>),
    SvgComponent: (pathProps) => (
      <g>
        <path
          {...pathProps}
          d="M142.968 56.289c1.53-.885 4.77-6.278 4.697-10.007-.018-1.623-.5-2.817-1.756-3.545-1.04-.616-4.171-1.342-8.23-1.941-4.08-.615-9.161-1.167-14.4-1.637-10.472-.939-21.57-1.544-26.517-1.665-8.726-.214-15.217-.984-16.727-1.174-2.104 2.435-4.455 4.94-6.87 7.124.142.188.621.812 1.501 1.724a32.24 32.24 0 004.878 4.1c4.4 3.03 11.115 6.185 20.427 6.665 4.068.21 7.46.293 10.318.293 10.412-.004 13.69-1.11 17.22-1.503.307-.034.628-.05.962-.05 3.837.02 9.537 1.976 12.757 1.955.817.005 1.428-.134 1.74-.34z"
          fill="#000"
        />
      </g>
    ),
  },
  {
    sectionId: "Matambre",
    getSectionName: (latamMode) =>
      latamMode
        ? ["🇨🇱: Malaya.", "🇨🇴: Sobre Barriga.", "🇪🇨: Falda Dorada.", "🇲🇽: Fresada.", "🇵🇪: Malaya.", "🇺🇾: Matambre.", "🇻🇪: Pollo de Res."].map((str) => (
            <p key={str}>{str} </p>
          ))
        : ["🇦🇷: Matambre.", "🇧🇷: Matambre.", "🇪🇸: Aleta.", " 🇫🇷: (Pas de Nom).", "🇺🇸: Rose Meat."].map((str) => <p key={str}>{str} </p>),
    SvgComponent: (pathProps) => (
      <g>
        <path
          {...pathProps}
          d="M242.883 163.513v-.025c.008-1.375-.21-3.56-1.162-5.035-.413-.66-2.924-4.785-6.177-11.08-2.138-.157-23.476-1.722-35.22-2.412-4.09-.246-23.537-3.942-44.449-6.799-11.811-1.615-23.769-2.173-34.448-3.639-9.148-1.255-17.185-3.023-23.531-3.881-12.081-1.634-18.974-2.062-20.778-2.154.07.116.138.225.21.34 2.734.889 6.309 1.837 8.23 1.837 6.598.582 12.13 4.658 17.854 7.763 6.696 4.075 14.944 4.367 21.834 8.248 6.695 3.784 13.294 8.636 21.154 9.121 1.552.194 2.814-.873 3.978-1.552 3.785-2.523 8.054-4.658 12.712-5.24 9.8-.582 18.825 4.367 28.431 5.725 7.666.194 15.43-.194 23.095.97 9.231.365 17.773 4.261 26.6 6.821.177.052.842.433 1.667.992z"
          fill="#fff"
        />
      </g>
    ),
  },
  {
    sectionId: "Nalga",
    getSectionName: (latamMode) =>
      latamMode
        ? [
            "🇨🇱: Posta Negra.",
            "🇨🇴: Centro de pierna.",
            "🇪🇨: Pulpa Negra.",
            "🇲🇽:  Bistec de Pulpa Negra.",
            "🇵🇪: Tapa.",
            "🇺🇾: Pulpa de Nalga.",
            "🇻🇪: Pulpa Negra.",
          ].map((str) => <p key={str}>{str} </p>)
        : ["🇦🇷: Nalga.", "🇧🇷: Coxae Mole Cha.", "🇪🇸: Tapa.", " 🇫🇷:  Tende de Tranche.", "🇺🇸: Topside."].map((str) => <p key={str}>{str} </p>),
    SvgComponent: (pathProps) => (
      <g>
        <path
          {...pathProps}
          d="M24.614 124.502c.514.964 1.066 1.82 1.653 2.532.459.604 1.762 1.05 3.708 1.035.868.002 1.86-.085 2.925-.236.038-.504.064-1.021.065-1.567 0-1.019-.069-2.113-.221-3.286-.71-5.661-6.7-20.85-8.064-34.58-2.806 4.354-4.087 10.68-4.078 17.167a50.584 50.584 0 00.743 8.65c.316.143 2.167 7.085 3.27 10.285zM45.812 124.15c2.522-1.011 3.85-2.733 4.45-4.97a98.32 98.32 0 00-.659-.977c-10.827-15.86-14.675-26.95-14.68-35.209l.002-.082a6.442 6.442 0 00-1.414-.132c-.654 0-1.327.093-2.028.294l-.2-.7.198.7c-2.18.602-3.996 1.872-5.49 3.599.989 13.807 7.364 29.836 8.196 36.12.16 1.232.233 2.39.233 3.473 0 .454-.017.892-.041 1.321 3.361-.625 7.372-1.83 11.433-3.437z"
          fill="#000"
        />
        <path
          {...pathProps}
          d="M50.674 115.755c.008-5.018-2.112-11.184-3.355-15.722-1.62-6.128-5.713-14.4-10.932-16.66.108 7.714 3.798 18.392 14.225 33.721.038-.433.06-.879.062-1.339z"
          fill="#000"
        />
        <path
          {...pathProps}
          d="M51.273 120.716c-.851 2.081-2.398 3.803-4.926 4.789-4.304 1.695-8.528 2.963-12.113 3.587-.476 3.614-1.843 6.222-3.412 8.093.282.477.564.95.848 1.413.854.73 2.08 1.722 3.575 2.765 2.953 2.06 6.89 4.248 10.702 4.82 5.333.808 10.769 1.074 13.775 1.162 1.664-.94 2.86-2.933 4.295-4.162.166-.19.317-.394.473-.592a992.335 992.335 0 00-2.662-4.569c-3.38-5.758-7.364-12.402-10.555-17.306zM26.755 131.927c-.22-1.099-.486-2.153-.734-3.226 1.008.607 2.369.815 3.954.826.844-.001 1.78-.084 2.763-.209-.45 2.908-1.521 5.035-2.76 6.616-1.062-1.323-2.178-2.7-3.223-4.007z"
          fill="#fff"
        />
      </g>
    ),
  },
  {
    sectionId: "Osobuco",
    getSectionName: (latamMode) =>
      latamMode
        ? [
            "🇨🇱: Osobuco.",
            "🇨🇴: Lagarto de Brazo.",
            "🇪🇨: Pulpa Blanca.",
            "🇲🇽: Chambarete.",
            "🇵🇪: Osobuco Anterior.",
            "🇺🇾: Brazuelo Deshuesado.",
            "🇻🇪: Lagarto sin Hueso.",
          ].map((str) => <p key={str}>{str} </p>)
        : ["🇦🇷: Osobuco.", "🇧🇷: Músculo.", "🇪🇸: Morcillo.", " 🇫🇷: Jarret.", "🇺🇸: Shank."].map((str) => <p key={str}>{str} </p>),
    SvgComponent: (pathProps) => (
      <g>
        <path
          {...pathProps}
          d="M244 160.32c.268 1.174.335 2.314.338 3.168 0 .444-.017.806-.034 1.06 1.403 1.1 2.776 2.442 2.917 3.478 1.4 7.93 2.8 15.95 5.665 23.455.026.067.09.289.172.59 3.553.171 6.655.323 9.275.486-.434-1.397-.745-2.453-.762-2.811-.496-10.202 3.215-20.177 7.56-29.332.003-.008.174-.08.451-.22.057-.648.166-1.334.362-2.056-2.655.187-9.618.652-13.536.652-3.849-.004-10.194 1.115-12.408 1.53z"
          fill="#fff"
        />
      </g>
    ),
  },
  {
    sectionId: "Paleta",
    getSectionName: (latamMode) =>
      latamMode
        ? [
            "🇨🇱: Posta de Paleta.",
            "🇨🇴: Bola de Brazo.",
            "🇪🇨: Pulpa de Brazo.",
            "🇲🇽: Planchuela.",
            "🇵🇪: Bistec de cabeza de lomo.",
            "🇺🇾: Pulpa abajo del asado.",
            "🇻🇪: Chocozuela.",
          ].map((str) => <p key={str}>{str} </p>)
        : ["🇦🇷: Marucha.", "🇧🇷: Paleta.", "🇪🇸: Espalda.", " 🇫🇷: Paleron.", "🇺🇸: Shoulderclod."].map((str) => <p key={str}>{str} </p>),
    SvgComponent: (pathProps) => (
      <g>
        <path
          {...pathProps}
          d="M256.407 157.335c4.159 0 11.997-.545 14.014-.69 1.321-4.373 7.63-32.058 7.618-55.833 0-1.137-.014-2.263-.042-3.378-.196-8.093-3.87-26.334-13.146-36.15-4.866-5.172-11.18-8.193-17.785-8.19-6.688.004-13.718 3.08-19.946 10.347-5.73 6.69-7.949 15.383-7.949 24.858-.032 30.04 22.514 67.423 23.779 69.373.251.4.449.823.619 1.252 2.055-.391 8.658-1.586 12.838-1.589z"
          fill="#000"
        />
      </g>
    ),
  },
  {
    sectionId: "Peceto",
    getSectionName: (latamMode) =>
      latamMode
        ? ["🇨🇱: Pollo Ganso.", "🇨🇴: Muchacho.", "🇪🇨: Salón.", "🇲🇽: Custe.", "🇵🇪: Pejerrey.", "🇺🇾: Pulpa Chorizo.", "🇻🇪: Muchacho Redondo."].map((str) => (
            <p key={str}>{str} </p>
          ))
        : ["🇦🇷: Peceto.", "🇧🇷: Lagarto.", "🇪🇸: Redondel.", " 🇫🇷: Tranche.", "🇺🇸: Tranche."].map((str) => <p key={str}>{str} </p>),
    SvgComponent: (pathProps) => (
      <g>
        <path
          {...pathProps}
          d="M46.003 62.933a762.522 762.522 0 01-2.014-6.746c-4.262 1.978-14.867 7.136-17.573 20.75-.39 1.95-.562 4.056-.56 6.259 0 .495.01.994.026 1.498 1.46-1.374 3.175-2.426 5.199-3.02a8.825 8.825 0 012.43-.348c.5.01.988.06 1.465.148.544-9.1 6.004-14.383 11.027-18.541z"
          fill="#000"
        />
        <path
          {...pathProps}
          d="M24.498 86.169a49.799 49.799 0 01-.097-2.973c0-2.278.175-4.476.588-6.542 2.888-14.565 14.446-19.973 18.587-21.88a962.843 962.843 0 01-5.784-20.739c-.49.458-1.59 1.528-1.696 1.616-2.82 2.341-5.058 5.895-6.82 9.139-4.657 8.15-7.568 17.175-9.703 26.297-2.571 12.217-3.398 24.955-.352 37.146a52.962 52.962 0 01-.077-2.665c.01-7.311 1.546-14.686 5.354-19.399z"
          fill="#fff"
        />
      </g>
    ),
  },
  {
    sectionId: "Pecho",
    getSectionName: (latamMode) =>
      latamMode
        ? ["🇨🇱: Tapa Pecho.", "🇨🇴: Pecho.", "🇪🇨: Pecho.", "🇲🇽: Pecho.", "🇵🇪: Pecho.", "🇺🇾: Pecho.", "🇻🇪: Pecho."].map((str) => <p key={str}>{str} </p>)
        : ["🇦🇷: Pecho.", "🇧🇷: Peito.", "🇪🇸: Pecho.", " 🇫🇷: Poitrine Gros Bout.", "🇺🇸: Brisket."].map((str) => <p key={str}>{str} </p>),
    SvgComponent: (pathProps) => (
      <g>
        <path
          {...pathProps}
          d="M342.215 82.743c-2.376-1.03-5.499-2.147-8.943-3.174-6.884-2.06-15.07-3.756-21.165-3.752-.208 0-.416.002-.619.006-5.676.04-13.928 7.067-20.497 14.172-6.002 6.44-10.716 12.831-11.536 13.957-.534 24.29-6.828 50.919-7.812 53.633-.214.58-.357 1.132-.46 1.664 1.03-.7 2.287-1.744 3.376-3.223 2.746-3.726 4.864-9.678 5.944-12.455 2.038-6.987 6.792-12.906 8.054-20.087.873-4.56 1.068-9.51 4.075-13.197 3.59-5.046 9.801-6.986 15.526-8.15 13.203-2.954 26.818-7.12 39.702-11.608-.182-2.231-.586-4.391-1.31-5.294-.3-.457-1.971-1.49-4.335-2.492z"
          fill="#fff"
        />
      </g>
    ),
  },
  {
    sectionId: "Patas",
    getSectionName: (latamMode) =>
      latamMode ? (
        <p> Las patas y pezuñas de vaca se procesan en espuma para extintores de incendios y otros usos.</p>
      ) : (
        <p> Cow feet and hooves are processed into fire extinguisher foam and other uses.</p>
      ),
    SvgComponent: (pathProps) => (
      <g>
        <path
          {...pathProps}
          d="M262.8 194.045c-2.605-.168-5.735-.323-9.356-.5.222.878.428 1.735.438 1.9.312 5.47.21 10.857-.063 16.246.97 1.941 2.91 3.202 4.27 4.852 2.716 3.008 3.298 7.18 4.56 10.965 4.367.097 8.733.291 13.197.097-5.434-6.404-10.286-14.167-10.286-22.803-.06-2.207-1.61-7.113-2.76-10.757zM243.243 172.489c2.216 6.324 4.29 12.789 5.936 19.391l-1.978-.099c-1.6-6.398-3.817-12.69-3.958-19.292z"
          fill="#fff"
        />
        <path
          {...pathProps}
          d="M44.169 171.905c-.233.002-.498.003-.797.003-2.69-.004-7.79-.112-11.07-1.015-2.584-.747-5.088-2.882-6.858-4.69-.187.78-.367 1.574-.51 2.376-.687 3.827-1.283 7.854-1.283 10.023 0 8.054-1.262 16.108-2.232 24.162-1.262 4.075-3.688 8.054-3.59 12.518l2.328 13.197c4.755.194 9.413.776 14.168.776-1.941-4.464-4.755-8.636-5.24-13.585.873-.97 1.746-2.038 2.426-3.202 0-3.882-1.941-7.763-.583-11.742.712-2.48 4.297-10.357 8.438-19.102 1.374-2.903 2.973-6.28 4.803-9.719z"
          fill="#fff"
        />
        <path
          {...pathProps}
          d="M58 167.055c.066-2.385.479-9.438.734-14.793-2.642 4.163-7.47 11.83-10.24 16.59-3.95 6.79-7.16 16.668-7.16 16.668s4.884 15.262 6.09 18.99c1.165 3.397.195 7.084 1.747 10.286 1.747 2.523 4.464 4.076 5.725 6.89 1.262 2.523 2.038 5.24 3.008 7.86 4.658 0 9.316.194 13.877 0-1.941-3.59-4.367-6.89-6.793-10.092-3.784-4.852-3.396-11.353-5.434-16.981-1.261-4.173-3.59-7.957-4.56-12.227.288-7.86 2.714-15.429 3.006-23.191z"
          fill="#fff"
        />
      </g>
    ),
  },
  {
    sectionId: "Tortuguita",
    getSectionName: (latamMode) =>
      latamMode
        ? [
            "🇨🇱: Lagarto.",
            "🇨🇴: Lagarto de Pierna.",
            "🇪🇨: Steak al Minuto .",
            "🇲🇽: Copeta.",
            "🇵🇪: Bistec de Pierna.",
            "🇺🇾: Garrón.",
            "🇻🇪: Lagarto de Reina.",
          ].map((str) => <p key={str}>{str} </p>)
        : ["🇦🇷: Tortuguita.", "🇧🇷: Músculo de Primeira.", "🇪🇸: Culata.", " 🇫🇷: Nerveux de Gîte.", "🇺🇸: Leg of Beef."].map((str) => <p key={str}>{str} </p>),
    SvgComponent: (pathProps) => (
      <g>
        <path
          {...pathProps}
          d="M46.465 64.446c-4.876 4.108-9.64 8.983-10.045 17.418 6.392 2.287 10.494 11.353 12.304 17.785 1.213 4.478 3.398 10.71 3.406 16.107a14.525 14.525 0 01-.302 3.153c4.087 6.183 9.688 15.658 13.637 22.464.163-.206.32-.417.491-.614 2.815-3.397 5.532-6.793 8.346-10.092.55-.481 1.086-.922 1.602-1.375-6.027-9.806-14.45-24.308-19.688-36.745-3.176-7.546-6.628-17.908-9.751-28.1z"
          fill="#fff"
        />
      </g>
    ),
  },
  {
    sectionId: "Vacio",
    getSectionName: (latamMode) =>
      latamMode
        ? ["🇨🇱: Tapa de Barriga.", "🇨🇴: Falda.", "🇪🇨: Falda Vacío.", "🇲🇽: Aldilla.", "🇵🇪: Malaya.", "🇺🇾: Falda.", "🇻🇪: Falda."].map((str) => (
            <p key={str}>{str} </p>
          ))
        : ["🇦🇷: Vacio.", "🇧🇷: Vazio.", "🇪🇸: Falda.", " 🇫🇷: Bavette.", "🇺🇸: Thin Flank."].map((str) => <p key={str}>{str} </p>),
    SvgComponent: (pathProps) => (
      <g>
        <path
          {...pathProps}
          d="M121.624 133.082c.717.1 1.455.184 2.184.275a103.022 103.022 0 01-.538-10.673c0-4.448.276-9.748 1.177-15.2.687-4.152 1.814-8.37 3.065-12.378-4.183 1.015-11.702 3.159-18.85 5.28-8.546 2.53-16.669 5.028-18.535 5.602a6.3 6.3 0 01.109.972c0 .072-.004.139-.006.205-.274 2.43-3.185 4.757-5.967 6.875a68.113 68.113 0 01-5.254 3.475l-1.518 9.534c2.249.126 9.122.597 20.6 2.15 6.442.874 14.454 2.637 23.533 3.883z"
          fill="#fff"
        />
      </g>
    ),
  },
];

export const b = {};
