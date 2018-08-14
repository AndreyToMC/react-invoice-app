import React, { Component } from 'react';


class ViewModePage extends Component {

  render() {
    return (
      <div>
        <p>Invoice #1</p>
        <div> Mark Benson</div>
        <div>
          <div>
            <div> Products </div>
            <div> QTY </div>
            <div> Price </div>
          </div>
          <div>
            <div> phone </div>
            <div> 1 </div>
            <div> 9$ </div>
          </div>
          <div>
            <div> parash </div>
            <div> 2 </div>
            <div> 55$ </div>
          </div>
        </div>
        <div>
          <div> discount </div>
          <div> 13 </div>
        </div>
        <div> total 60#</div>
      </div>
    );
  }
}

export default ViewModePage;
