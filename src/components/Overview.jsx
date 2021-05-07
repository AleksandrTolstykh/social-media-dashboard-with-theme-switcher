import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import styles from 'styled-components';
import { connect } from 'react-redux';
import Icon from './Icon';

function Overview(props) {
  const useStyles = makeStyles({
    titleLight: {
      color: 'hsl(228, 12%, 44%)',
      fontSize: '14px',
      fontWeight: '700',
    },
    amountLight: {
      color: 'hsl(230, 17%, 14%)',
      fontSize: '40px',
      fontWeight: '700',
    },
    titleDark: {
      color: 'hsl(228, 34%, 66%)',
      fontSize: '14px',
      fontWeight: '700',
    },
    amountDark: {
      color: 'hsl(0, 0%, 100%)',
      fontSize: '40px',
      fontWeight: '700',
    },
    icon: {
      textAlign: 'right',
    },
    change: {
      fontWeight: '700',
      fontSize: '14px',
      marginTop: '15px',
      textAlign: 'right',
    },
    greenColor: {
      color: 'hsl(163, 72%, 41%)',
    },
    redColor: {
      color: 'hsl(356, 69%, 56%)',
    },
  });

  const classes = useStyles();

  const CardContentWithHoverLight = styles(CardContent)`
    background-color: hsl(227, 47%, 96%);
    &:hover {
      opacity: 75%;
      cursor: pointer;
    }
  `;

  const CardContentWithHoverDark = styles(CardContent)`
    background-color: hsl(228, 28%, 20%);
    &:hover {
      opacity: 75%;
      cursor: pointer;
    }
  `;

  return (
    <Card>
      {props.store.value === true ?
      <CardContentWithHoverLight>
        <Grid container>
          <Grid item xs={6} className={classes.titleLight}>
            {props.title}
          </Grid>
          <Grid item xs={6} className={classes.icon}>
            <Icon
              icon={props.icon}
              color={props.color}
            />
          </Grid>
          <Grid item xs={6} className={classes.amountLight}>
            {props.amount}
          </Grid>
          <Grid item xs={6} className={classes.change}>
            <Icon icon={props.directionIcon} />
            <span className={props.directionIcon === 'up' ? classes.greenColor : classes.redColor}>
              {props.todayChange}
            </span>
          </Grid>
        </Grid>
      </CardContentWithHoverLight> :
      <CardContentWithHoverDark>
        <Grid container>
          <Grid item xs={6} className={classes.titleDark}>
            {props.title}
          </Grid>
          <Grid item xs={6} className={classes.icon}>
            <Icon
              icon={props.icon}
              color={props.color}
            />
          </Grid>
          <Grid item xs={6} className={classes.amountDark}>
            {props.amount}
          </Grid>
          <Grid item xs={6} className={classes.change}>
            <Icon icon={props.directionIcon} />
            <span className={props.directionIcon === 'up' ? classes.greenColor : classes.redColor}>
              {props.todayChange}
            </span>
          </Grid>
        </Grid>
      </CardContentWithHoverDark>}
    </Card>
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
)(Overview);
