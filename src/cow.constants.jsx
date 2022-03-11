import React from "react";

// sectionId
// getSectionName
// SvgComponent

export const cowSections = [
  {
    sectionId: "Cabeza",
    getSectionName: (latamMode) =>
      latamMode
        ? ["🇨🇱: Sesos.", "🇨🇴: Sesos de Res.", "🇪🇨: Sesos.", "🇲🇽: Sesos.", "🇵🇪: Sesos.", "🇺🇾: Sesos.", "🇻🇪: Sesos."].map(
          (str) => <p key={str}>{str} </p>
        )
        : ["🇦🇷: Sesos.", "🇧🇷: Miolos.", "🇪🇸: Sesos.", " 🇫🇷: Cervelle.", "🇺🇸: Brain."].map((str) => (
          <p key={str}>{str} </p>
        )),
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
    sectionId: "Costillar",
    getSectionName: (latamMode) =>
      latamMode
        ? ["🇨🇱: Costillar.",
          "🇨🇴: Costilla.",
          "🇪🇨: Costilla.",
          "🇲🇽: Costilla Cargada.",
          "🇵🇪: Sancochado de Costillar.",
          "🇺🇾: Falda.",
          "🇻🇪: Costillas.",
        ].map((str) => <p key={str}>{str} </p>)
        : ["🇦🇷: Costillar.", "🇧🇷: Ponta de agulha.", "🇪🇸: Costillar.", " 🇫🇷: Plat de côtes.", "🇺🇸: Short Plate."].map(
          (str) => <p key={str}>{str} </p>
        ),
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
    sectionId: "BifeAncho",
    getSectionName: (latamMode) =>
      latamMode
        ? ["🇨🇱: Lomo Liso.",
          "🇨🇴: Lomo Ancho.",
          "🇪🇨: Lomo de Falda.",
          "🇲🇽: Lomo.",
          "🇵🇪: Churrasco largo redondo.",
          "🇺🇾: Espinazo con Lomo.",
          "🇻🇪: Solomo de Cuerito.",
        ].map((str) => <p key={str}>{str} </p>)
        : ["🇦🇷: Bife Ancho.",
          "🇧🇷: Capa de filé.",
          "🇪🇸: Lomo ALto.",
          " 🇫🇷: Côtes, Entrecôtes.",
          "🇺🇸: Fore Rib.",].map(
            (str) => <p key={str}>{str} </p>
          ),
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
    sectionId: "Aguja",
    getSectionName: (latamMode) =>
      latamMode
        ? ["🇨🇱: Huachalomo.",
          "🇨🇴: Lomo de Aguja.",
          "🇪🇨: Lomo de Aguja.",
          "🇲🇽: Tapa de Lomo.",
          "🇵🇪: Asado de Aguja.",
          "🇺🇾: Aguja.",
          "🇻🇪: Solomo abierto.",
        ].map((str) => <p key={str}>{str} </p>)
        : ["🇦🇷: Aguja.", "🇧🇷: Acém.", "🇪🇸: Morrillo.", " 🇫🇷: Basses côtes.", "🇺🇸: Chuck."].map(
          (str) => <p key={str}>{str} </p>
        ),
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
        ? ["🇨🇱: Asado de Tira.",
          "🇨🇴: Asado de Tira.",
          "🇪🇨: Costilla.",
          "🇲🇽: Costilla.",
          "🇵🇪: Costilla.",
          "🇺🇾: Asado.",
          "🇻🇪:Costillas.",
        ].map((str) => <p key={str}>{str} </p>)
        : ["🇦🇷: Asado.", "🇧🇷: Aba.", "🇪🇸: Falda.", "🇫🇷: Bavette.", "🇺🇸: Rib."].map(
          (str) => <p key={str}>{str} </p>
        ),
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
    sectionId: "Asado",
    getSectionName: (latamMode) =>
      latamMode
        ? ["🇨🇱: Asado de Tira.",
          "🇨🇴: Asado de Tira.",
          "🇪🇨: Costilla.",
          "🇲🇽: Costilla.",
          "🇵🇪: Costilla.",
          "🇺🇾: Asado.",
          "🇻🇪:Costillas.",
        ].map((str) => <p key={str}>{str} </p>)
        : ["🇦🇷: Asado.", "🇧🇷: Aba.", "🇪🇸: Falda.", "🇫🇷: Bavette.", "🇺🇸: Rib."].map(
          (str) => <p key={str}>{str} </p>
        ),
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
];

export const b = {};
