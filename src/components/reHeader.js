import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {compose, withState, withHandlers} from 'recompose'
import { combineLatest } from 'rxjs/index'
import { map, tap, startWith } from 'rxjs/operators';
import { componentFromStream, createEventHandler } from 'recompose';
import '../services/observableConfig';

import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    invoicesCuont: state.invoices.invoicesList.length,
  }
}

const styles = {
  root: {
    flexGrow: 1,
  },
  buttonStyle: {
    background: '#efe',
  }
};

const enhance = compose(
  withState('value', 'setValue', 0),
  withHandlers({
    handleChange: ({ setValue }) => (event, value) => {
      setValue({ value });
    }
  }),
  withStyles(styles),
  connect(mapStateToProps)
);

const ReHeader = componentFromStream(prop$ => {
  const { handler, stream } = createEventHandler();

  const value$ = stream.pipe(
    map(e => e),
    startWith(0),
  );

  return combineLatest(prop$, value$).pipe(
    tap(console.log),
    map((props) => (
      <Paper className={props[0].classes.root}>
        <Tabs
          value={props[1]}
          onChange={(e, v) =>  handler(v)}
          indicatorColor='secondary'
          textColor="primary"
          centered
        >
          <Tab component={Link} to='/' label="Logo" />
          <Tab component={Link} to='/products' label="Products" />
          <Tab component={Link} to='/customers' label="Customers" />
          <Tab component={Link} to='/invoices' label={`Invoices (${props[0].invoicesCuont})`} />
          <Tab component={Link} className={props[0].classes.buttonStyle} to='/create_invoice' label="New Invoice" />
        </Tabs>
      </Paper>
    ))
  );
});

export default enhance(ReHeader);
