import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import {Typography} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import isLowerPrecedence from "../utilities/determine-precedence";

const useStyles = makeStyles(() => ({
  main: {
    backgroundColor: 'lightgray',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black'
  },
  field: {
    margin: 10
  },
  results: {
    margin: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  }
}))

const Main = (props) => {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [result, setResult] = useState(false);
  const isDisabled = value1 && value2;
  const classes = useStyles();
  const handleClick = () => {
    setShowResults(true);
    setResult(isLowerPrecedence(value1, value2));
  }
  return (
    <div className={classes.main}>
      <Typography variant='h3'>
        SemVer ATB Challenge
      </Typography>
      <TextField className={classes.field} onChange={event => setValue1(event.target.value)} variant='outlined' label='Version One'/>
      <TextField className={classes.field} onChange={event => setValue2(event.target.value)} variant='outlined' label='Version Two'/>
      <Button disabled={!isDisabled} variant='contained' onClick={handleClick}>
        Calculate
      </Button>
      <div className={classes.results}>
        <Typography variant='subtitle2'>
          Only valid semantic version are allowed
        </Typography>
        {showResults &&
        <Typography>
          {result ? 'TRUE' : 'FALSE'}
        </Typography>}
      </div>
    </div>
  )
}

export default Main;