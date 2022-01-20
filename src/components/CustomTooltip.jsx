import { Tooltip } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const CustomTooltip = withStyles(() => ({
  tooltip: {
    background: '#ffffff',
    color: 'black',
    fontSize: 13,
    border: '1px  solid #e6e1e1',
    borderRadius: 5,
    padding: '4',
    paddingLeft: 'none',
    marginLeft: 0,
    paddingRight: 40,

  },
  arrow: {
    color: 'black',
    fontSize: 16,
  },
}))(Tooltip);

export default CustomTooltip;
