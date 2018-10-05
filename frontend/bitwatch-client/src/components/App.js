import React, { Component } from 'react';

import 'components/styles/App.css';

class App extends Component {

  productName = '';

  constructor(props) {
    super(props);
    this.state = {
      product: '',
    }
  }

  handleInput = event => {
    this.setState({
      product: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.productName = this.state.product.length ? this.state.product : this.productName;
    this.setState({
      product: '',
    })
  }

  render () {
    return (
      <div className='App'>
        <div className='Header'>
          <h1>bitwatch</h1>
          {/* <h3>The cryptocurrency tracker</h3> */}
          <form onSubmit={this.handleSubmit}>
            <input type='text' onChange={this.handleInput} list='products' value={this.state.product} placeholder='Select product' />
            <datalist id='products'>
              <option value='animal'></option>
              <option value='barber'></option>
              <option value='cactus'></option>
              <option value='diagonal'></option>
              <option value='eggplant'></option>
            </datalist>
            <input type='submit' value='Submit' />
          </form>
          {this.productName.length > 0 ?
            (
              <h3>Today's prices for</h3>
            ) :
              <h3> </h3>
            }
            <h1>{this.productName} </h1>
        </div>

            {this.productName.length > 0 ?
            (
              <div className='CardList'>
                <div>
                  <strong>BTX</strong>
                  <h2>0.015704</h2>
                </div>
                <div>
                  <strong>BFX</strong>
                  <h2>0.015670</h2>
                </div>
                <div>
                  <strong>BNB</strong>
                  <h2>0.015654</h2>
                </div>
              </div>
            ) :
            (
              <div className='Welcome'>
                <p>
                  Welcome to <strong>bitwatch</strong>.
                  <br /><br />
                  Please select a product from the input above to see the current prices across the BTX, BNB and BFX exchanges.
                </p>
              </div>
            )
          }
      </div>
    );
  }
  }


export default App;