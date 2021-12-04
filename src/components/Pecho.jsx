import React from 'react';
import { Zoom } from '@material-ui/core';
import CustomTooltip from './CustomTooltip';

const Pecho = ({ latamMode }) => {
  const pechoText = ['🇦🇷: Pecho.',
    '🇧🇷: Peito.',
    '🇪🇸: Pecho.',
    ' 🇫🇷: Poitrine Gros Bout.', '🇺🇸: Brisket.'];
  const pechoTextLatam = ['🇨🇱: Tapa Pecho.',
    '🇨🇴: Pecho.',
    '🇪🇨: Pecho.', '🇲🇽: Pecho.',
    '🇵🇪: Pecho.', '🇺🇾: Pecho.', '🇻🇪: Pecho.'];
  return (

    <CustomTooltip
      title={(
        <ul>
          {latamMode ? pechoTextLatam.map((str) => (
            <p>
              {str}
              {' '}
            </p>
          )) : pechoText.map((str) => (
            <p>
              {str}
              {' '}
            </p>
          ))}
        </ul>
      )}
      TransitionComponent={Zoom}
      interactive
      TransitionProps={{ timeout: 600 }}
      arrow
      placement="right-end"
    >
      <g>
        <path
          d="M342.215 82.743c-2.376-1.03-5.499-2.147-8.943-3.174-6.884-2.06-15.07-3.756-21.165-3.752-.208 0-.416.002-.619.006-5.676.04-13.928 7.067-20.497 14.172-6.002 6.44-10.716 12.831-11.536 13.957-.534 24.29-6.828 50.919-7.812 53.633-.214.58-.357 1.132-.46 1.664 1.03-.7 2.287-1.744 3.376-3.223 2.746-3.726 4.864-9.678 5.944-12.455 2.038-6.987 6.792-12.906 8.054-20.087.873-4.56 1.068-9.51 4.075-13.197 3.59-5.046 9.801-6.986 15.526-8.15 13.203-2.954 26.818-7.12 39.702-11.608-.182-2.231-.586-4.391-1.31-5.294-.3-.457-1.971-1.49-4.335-2.492z"
          fill="#fff"
        />
      </g>
    </CustomTooltip>
  );
};

export default Pecho;
