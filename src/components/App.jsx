import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Header from './Header';
import Info from './Info';
import Overview from './Overview';
import Footer from './Footer';
import info from '../info';
import overview from '../overview';

document.body.style.height = '100vh';
document.body.style.background = 'linear-gradient(to bottom, hsl(225, 100%, 98%) 25%, hsl(0, 0%, 100%) 25%)';

const useStyles = makeStyles({
  root: {
    fontFamily: 'Inter',
    fontWeight: 400,
  },
  subheaderLight: {
    color: 'hsl(228, 12%, 44%)',
  },
  subheaderDark: {
    color: 'hsl(0, 0%, 100%)',
  },
  footer: {
    textAlign: 'center',
  },
});

function App(props) {
  const classes = useStyles();

  if (props.store.value === true) {
    document.body.style.background = 'linear-gradient(to bottom, hsl(225, 100%, 98%) 25%, hsl(0, 0%, 100%) 25%)';
  } else {
    document.body.style.background = 'linear-gradient(to bottom, hsl(232, 19%, 15%) 25%, hsl(230, 17%, 14%) 25%)';
  }

  return (
    <Container className={classes.root}>
      <Header />
      <Grid container spacing={3}>
        {info.map(item => {
          return (
            <Grid item xs={12} md={3}>
              <Info
                color={item.color}
                icon={item.icon}
                login={item.login}
                amount={item.amount}
                title={item.title}
                directionIcon={item.directionIcon}
                todayChange={item.todayChange}
              />
            </Grid>
          );
        })}
      </Grid>
      <h2 className={props.store.value === true ? classes.subheaderLight : classes.subheaderDark}>Overview - Today</h2>
      <Grid container spacing={3}>
        {overview.map(item => {
          return (
            <Grid item xs={12} md={3}>
              <Overview
                title={item.title}
                icon={item.icon}
                color={item.color}
                amount={item.amount}
                directionIcon={item.directionIcon}
                todayChange={item.todayChange}
              />
            </Grid>
          );
        })}
      </Grid>
      <Container className={classes.footer}>
        <Footer />
      </Container>
    </Container>
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
)(App);
