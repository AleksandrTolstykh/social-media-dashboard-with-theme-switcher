import React from 'react';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

const AntSwitch = withStyles({
  root: {
    width: 36,
    height: 20,
    padding: 0,
    marginTop: 15,
    display: 'flex',
  },
  switchBase: {
    padding: 3,
    color: 'hsl(228, 28%, 20%)',
    '&$checked': {
      transform: 'translateX(16px)',
      color: 'hsl(0, 0%, 100%)',
      '& + $track': {
        opacity: 1,
        background: 'hsl(230, 22%, 74%)',
        borderColor: 'hsl(230, 22%, 74%)',
      },
      '&:hover': {
          '& + $track': {
            background: 'linear-gradient(90deg, hsl(210, 78%, 56%), hsl(146, 68%, 55%))',
        },
      },
    },
  },
  thumb: {
    width: 14,
    height: 14,
    boxShadow: 'none',
  },
  track: {
    borderRadius: 20 / 2,
    opacity: 1,
    background: 'linear-gradient(90deg, hsl(210, 78%, 56%), hsl(146, 68%, 55%))',
  },
  checked: {},
})(Switch);

const LightSwitch = withStyles({
  switchBase: {
    '&:hover': {
        opacity: '100%',
    },
  },
})(AntSwitch);

const DarkSwitch = withStyles({
  switchBase: {
    '&:hover': {
        opacity: '50%',
    },
  },
})(AntSwitch);

function ThemeSwitch(props) {
  const handleChange = (event) => {
    props.onSwitch(event.target.checked);
  };

  if (props.store.value === true) {
    return <LightSwitch checked={props.store.value} onChange={handleChange} />
  } else {
    return <DarkSwitch checked={props.store.value} onChange={handleChange} />
  }
};

export default connect(
  state => ({
    store: state,
  }),
  dispatch => ({
    onSwitch: (value) => {
      dispatch({ type: 'switched', value: value });
    }
  })
)(ThemeSwitch);
