import * as React from 'react';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { createStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import NumberInput from './numberInput'
import Select from './selects'

const styles = (theme) => createStyles({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
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

function PageLayout(props) {
  const {
    classes,
    invoiceId,
    customers,
    customerInputValue,
    onAddInputsChange,
    invoiceItemsInputs,
    products,
    onItemListInputChange,
    getProductPrice,
    productInputValue,
    qtyInputValue,
    totalPrice,
    discountInput,
  } = props;
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container>
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={8}>
                <Typography className={classes.invoiceId} variant='title' gutterBottom>
                  Invoice #{invoiceId}
                </Typography>
                <Grid container >
                  <Grid item xs={12} >
                    <Select
                      name='customerInput'
                      placeholder='Select customer'
                      values={customers}
                      selected={customerInputValue}
                      onChange={onAddInputsChange}
                      label='Customer'
                    />
                  </Grid>
                  {invoiceItemsInputs && invoiceItemsInputs.map((elem, i) => {
                    console.log(elem)
                    return(
                      <React.Fragment key={i}>
                        <Grid item xs={6}>
                          <Select
                            name='listItemProductInput'
                            values={products}
                            onChange={onItemListInputChange}
                            selected={elem.product_id}
                            id={elem.id}
                            label='Product'
                          />
                        </Grid>
                        <Grid item xs={3}>
                          <NumberInput
                            name='listItemQtyInput'
                            id={elem.id}
                            onChange={onItemListInputChange}
                            value={elem.quantity}
                            label='Quantity'
                          />
                        </Grid>
                        {console.log(elem)}
                        <Grid item xs={3} className={classes.centered}>
                          <p>${getProductPrice(elem.product_id, elem.quantity) || '0.00'}</p>
                        </Grid>
                      </React.Fragment>
                    )
                  })}
                  <Grid item xs={6}>
                    <Select
                      name='productInput'
                      values={products}
                      onChange={onAddInputsChange}
                      selected={productInputValue}
                      id='inputAddProduct'
                      placeholder='Add Product'
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <NumberInput
                      name='qtyInput'
                      id='inputAddQuantity'
                      onChange={onAddInputsChange}
                      value={qtyInputValue}
                    />
                  </Grid>
                  <Grid item xs={3} className={classes.centered}>
                    <p>$0.00</p>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography className={classes.invoiceId} variant='title' gutterBottom>
                      Total
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography className={classes.invoiceId} variant='title' gutterBottom>
                      ${totalPrice}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={4} className={classes.centered}>
                <div>
                  <Typography className={classes.discountLable} variant='subheading' gutterBottom>
                    Discount
                  </Typography>
                  <Grid item xs={12}>
                    <NumberInput  value={discountInput} disabled={true}/>
                  </Grid>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default withStyles(styles)(PageLayout);
