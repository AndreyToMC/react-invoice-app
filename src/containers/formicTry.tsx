import {   Field, FormikErrors, InjectedFormikProps, withFormik } from 'formik';
import * as React from 'react';

import Button from '@material-ui/core/Button/Button';
import InputLabel from '@material-ui/core/InputLabel';
import {createStyles, WithStyles, withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = (theme) => createStyles({
  root: {
    display: 'flex',
  },
  button: {
    margin: theme.spacing.unit,
    maxWidth: 150,
    width: '100%',
  },
  paper: {
    display: 'flex',
    padding: theme.spacing.unit * 4,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
    width: '100%',
  },
  invoiceId: {
    textAlign: 'left',
    padding: theme.spacing.unit * 2,
  },
  centered: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

interface IFormValues {
  product: string;
  price: string;
}

interface IFormProps extends WithStyles<typeof styles> {
  product?: string;
  price?: string;
}

const InnerForm: React.SFC<InjectedFormikProps <IFormProps, IFormValues>> = (
  props,
) => (
  <form onSubmit={props.handleSubmit} className={props.classes.paper}>
    <Field
      error={props.errors.product}
      className={props.classes.formControl}
      component={TextField}
      style={{width: '100%'}}
      name='product'
      id='product'
      helperText={props.errors.product}
      label='Product'
      onChange={props.handleChange}
      value={props.values.product}
    />
    <Field
      error={props.errors.price}
      helperText={props.errors.price}
      label='Price'
      className={props.classes.formControl}
      component={TextField}
      style={{width: '100%'}}
      name='price'
      id='price'
      type='number'
      onChange={props.handleChange}
      value={props.values.price}
      min='0.01'
    />
    <Button
      className={props.classes.button}
      type='submit'
      disabled={props.isSubmitting}
      variant='outlined'
      color='primary'
    >
      Add Product
    </Button>
  </form>
);

const AddProductForm = withFormik<IFormProps, IFormValues>({
  mapPropsToValues: () => ({ product: '', price: '' }),
  validate: (values: IFormValues) => {
    console.log(parseInt(values.price, 10))
    const errors: FormikErrors<IFormValues> = {};
    if (values.product.length < 3) {
      errors.product = 'Min length 3'
    }
    if (values.price.length < 1 || parseFloat(values.price) <= 0) {
      errors.price = 'Price is require'
    }
    return errors
  },
  handleSubmit: (values, { setSubmitting }) => {
    console.log('submitt')
    setTimeout(
      () => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      },
      1000,
    );
  },
})(InnerForm);

export default withStyles(styles)(AddProductForm);
