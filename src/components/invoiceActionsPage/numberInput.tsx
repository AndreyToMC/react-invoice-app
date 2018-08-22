import * as React from 'react';

import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import { createStyles, WithStyles, withStyles } from '@material-ui/core/styles';

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

interface InumberInputProps extends WithStyles<typeof styles> {
  value: number,
  onChange?: (event: React.MouseEvent<HTMLInputElement>, id: number) => void,
  name: string,
  id?: any,
  label?: string,
  disabled?: boolean,
  errorMsg?: string,
}

class NumberInput extends React.Component<InumberInputProps> {
  onInputChange = (e) => {
    const id = this.props.id
    this.props.onChange(e, id)
  }
  render() {
    console.log(typeof this.props.id)
    const { classes, value, name, id, label, disabled, errorMsg } = this.props;
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
            onChange={this.onInputChange}
            value={value}
          />
          <FormHelperText error={errorMsg && errorMsg.length > 0} >{errorMsg}</FormHelperText>
        </FormControl>
      </form>
    );
  }
}

export default withStyles(styles)(NumberInput);
