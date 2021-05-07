import React from 'react';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import ThemeSwitch from './ThemeSwitch';

const useStyles = makeStyles({
  headerLight: {
    color: 'hsl(230, 17%, 14%)',
  },
  headerDark: {
    color: 'hsl(0, 0%, 100%)',
  },
  subheaderLight: {
    color: 'hsl(228, 12%, 44%)',
  },
  subheaderDark: {
    color: 'hsl(228, 34%, 66%)',
  },
  switchLabelLight: {
    color: 'hsl(228, 12%, 44%)',
    fontSize: '14px',
    fontWeight: '700',
  },
  switchLabelDark: {
    color: 'hsl(228, 34%, 66%)',
    fontSize: '14px',
    fontWeight: '700',
  },
});

function Header(props) {
  const classes = useStyles();

  return (
    <Grid container alignContent='stretch'>
      <Grid item xs={9} lg={10}>
        <h1 className={props.store.value === true ? classes.headerLight : classes.headerDark}>Social Media Dashboard</h1>
        <h5 className={props.store.value === true ? classes.subheaderLight : classes.subheaderDark}>Total Followers: 23,004</h5>
      </Grid>
      <Hidden smUp>
        <Grid item xs={12}>
          <Divider />
        </Grid>
      </Hidden>
      <Grid item xs={11} sm={2} lg={1}>
        <p className={props.store.value === true ? classes.switchLabelLight : classes.switchLabelDark}>Dark Mode</p>
      </Grid>
      <Grid item xs={1} sm={1}>
        <ThemeSwitch />
      </Grid>
    </Grid>
  );
}

export default connect(
  state => ({
    store: state,
  }),
  dispatch => ({
    onSwitch: (value) => {
      dispatch({ type: 'switched', value: value });
    }
  })
)(Header);
