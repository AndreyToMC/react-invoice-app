import * as React from 'react';

import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { createStyles, withStyles } from '@material-ui/core/styles';

const styles = (theme) => createStyles({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
    width: '100%',
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

function NumberInput(props) {
  const { classes, value, onChange, name, id, label, disabled, errorMsg } = props;
  const onInputChange = (e) => {
    onChange(e, id)
  }
  return (
    <form className={classes.root}>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor='names'>{label}</InputLabel>
        <Input
          error={errorMsg && errorMsg.length > 0}
          disabled={disabled}
          type='number'
          name={name}
          id={id}
          onChange={onInputChange}
          value={value}
        />
        <FormHelperText error={errorMsg && errorMsg.length > 0} >{errorMsg}</FormHelperText>
      </FormControl>
    </form>
  );
}

export default withStyles(styles)(NumberInput);
