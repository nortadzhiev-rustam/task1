import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import { useSelector } from 'react-redux';

const useStyles = makeStyles({
  container: {
    marginTop: 30,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 400,
    padding: 10,
  },
  paper: {
    display: 'flex',
    width: '100%',
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 400,
  },
});

const Hall = () => {
  const color = useSelector((state) => state.color.bg);
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Paper
        elevation={10}
        className={classes.paper}
        style={{ backgroundColor: color }}
      ></Paper>
    </div>
  );
};

export default Hall;
