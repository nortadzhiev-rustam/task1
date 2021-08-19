import React, { useState, useEffect } from 'react';
import { Paper, Typography, makeStyles } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { bgActions } from '../store/bg-slice';

const useStyles = makeStyles({
  paper: {
    display: 'flex',
    width: '70%',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    marginTop: 50,

    width: '80%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Home = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      setHours(Math.round(date.getHours()));
      setMinutes(Math.round(date.getMinutes()));
      setSeconds(Math.round(date.getSeconds()));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const randomColorCode = () => {
      let n = (Math.random() * 0xfffff * 1000000).toString(16);
      return '#' + n.slice(0, 6);
    };
    const interval = setInterval(() => {
      randomColorCode();
      dispatch(bgActions.addColor(randomColorCode()));
    }, 4000);
    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <div className={classes.container}>
      <Paper className={classes.paper} elevation={10}>
        <Typography variant='h1' color='initial'>
          {`${hours < 10 ? '0' + hours : hours}` +
            ' : ' +
            `${minutes < 10 ? '0' + minutes : minutes}` +
            ' : ' +
            `${seconds < 10 ? '0' + seconds : seconds}`}
        </Typography>
      </Paper>
    </div>
  );
};

export default Home;
