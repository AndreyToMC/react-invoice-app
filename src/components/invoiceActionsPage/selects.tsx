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

function MySelect(props) {
  const { classes, name, values, selected, onChange, placeholder, id, label, errorMsg } = props;
  const changeSelect = (e) => {
    console.log(e.target)
    onChange(e, id)
  }
  return (
    <div className={classes.root}>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor={id} >{label}</InputLabel>
        <Select
          error={errorMsg && errorMsg.length > 0}
          value={selected || ''}
          onChange={changeSelect}
          displayEmpty
          input={<Input name={name} id='asd' />}
          autoWidth
        >
          <MenuItem value='' disabled>
            {placeholder}
          </MenuItem>
          {values && values.map((elem) => {
            return (<MenuItem key={elem.id} value={elem.id}>{elem.name}</MenuItem>)
          })}
        </Select>
        <FormHelperText error={errorMsg && errorMsg.length > 0} >{errorMsg}</FormHelperText>
      </FormControl>
    </div>
  );
}

export default withStyles(styles)(MySelect);
