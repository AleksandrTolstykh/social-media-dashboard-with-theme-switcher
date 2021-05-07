import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import styles from 'styled-components';
import { connect } from 'react-redux';
import Icon from './Icon';

function Info(props) {
  const useStyles = makeStyles({
    header: {
      background: props.color,
      height: 4,
      padding: 0,
    },
    loginLight: {
      color: 'hsl(228, 12%, 44%)',
      fontSize: '14px',
      fontWeight: '700',
    },
    amountLight: {
      color: 'hsl(230, 17%, 14%)',
      fontSize: '60px',
      fontWeight: '700',
    },
    titleLight: {
      color: 'hsl(228, 12%, 44%)',
      letterSpacing: '5px',
    },
    loginDark: {
      color: 'hsl(228, 34%, 66%)',
      fontSize: '14px',
      fontWeight: '700',
    },
    amountDark: {
      color: 'hsl(0, 0%, 100%)',
      fontSize: '60px',
      fontWeight: '700',
    },
    titleDark: {
      color: 'hsl(228, 34%, 66%)',
      letterSpacing: '5px',
    },
    change: {
      fontWeight: '700',
      fontSize: '14px',
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
      <CardHeader className={classes.header}/>
      {props.store.value === true ?
      <CardContentWithHoverLight>
        <Box align='center'>
          <Box className={classes.loginLight}>
            <Icon
              icon={props.icon}
              color={props.color}
            />
            {props.login}
          </Box>
          <Box className={classes.amountLight}>
            {props.amount}
          </Box>
          <Box className={classes.titleLight}>
            {props.title}
          </Box>
          <Box className={classes.change}>
            <Icon icon={props.directionIcon} />
            <span className={props.directionIcon === 'up' ? classes.greenColor : classes.redColor}>
              {props.todayChange + ' Today'}
            </span>
          </Box>
        </Box>
      </CardContentWithHoverLight> :
      <CardContentWithHoverDark>
        <Box align='center'>
          <Box className={classes.loginDark}>
            <Icon
              icon={props.icon}
              color={props.color}
            />
            {props.login}
          </Box>
          <Box className={classes.amountDark}>
            {props.amount}
          </Box>
          <Box className={classes.titleDark}>
            {props.title}
          </Box>
          <Box className={classes.change}>
            <Icon icon={props.directionIcon} />
            <span className={props.directionIcon === 'up' ? classes.greenColor : classes.redColor}>
              {props.todayChange + ' Today'}
            </span>
          </Box>
        </Box>
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
)(Info);
