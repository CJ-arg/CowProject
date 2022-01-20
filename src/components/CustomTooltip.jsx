import { Tooltip } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const CustomTooltip = withStyles(() => ({
  tooltip: {
    background: '#fafffa',
    color: 'black',
    fontSize: '1rem',
    border: '1px  solid #e6e1e1',
    borderRadius: '0.3rem',
    padding: '1px',
    marginLeft: 0,
    paddingRight: 40,

  },
  arrow: {
    color: 'black',
    fontSize: 20,
  },
}))(Tooltip);

export default CustomTooltip;
