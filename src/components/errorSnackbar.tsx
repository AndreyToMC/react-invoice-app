import * as React from 'react';
import { connect } from 'react-redux';

import Snackbar from '@material-ui/core/Snackbar';

import { subject } from '../actions/newError'

interface IErrorSnackbar {
  errorMsg: string,
}

class ErrorSnackbar extends React.Component<IErrorSnackbar> {
  state = {
    open: false,
    vertical: 'top',
    horizontal: 'center',
  };
  handleClose = () => {
    this.setState({ open: false });
  };
  componentDidMount() {
    subject.subscribe({
      next: () => this.setState({open: true}),
    });
  }
  render() {
    const { open } = this.state;
    const { errorMsg } = this.props;
    return (
      <div>
        <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          open={open}
          onClose={this.handleClose}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id='message-id'>{errorMsg}</span>}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    errorMsg: state.errors,
  }
}

export default connect(mapStateToProps)(ErrorSnackbar);
