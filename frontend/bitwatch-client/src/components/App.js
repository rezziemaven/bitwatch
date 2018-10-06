import React, { Component } from 'react';
import axios from 'axios';

import 'styles/App.css';
import { Welcome, CardList } from 'components';

class App extends Component {

  productName = '';

  constructor(props) {
    super(props);
    this.state = {
      product: '',
      products: [],
      prices: {},
      fetching: false
    }
  }

  handleInput = event => {
    this.setState({
      product: event.target.value
    });
  }

  handleSubmit = async event => {
    event.preventDefault();
    this.productName = this.state.product.length ? this.state.product : this.productName;
    this.setState({
      product: '',
    });
    if (this.productName) await this.getPrices(this.productName);
  }

  getProducts = async () => {
    this.setState({fetching: true});
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/products`);
    this.setState({products: response.data});
    this.setState({fetching: false});
  }

  getPrices = async (product) => {
    this.setState({fetching: true});
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/products/${product}/prices`);
    this.setState({
      prices: {...this.state.prices,[product]: response.data.prices}
    });
    this.setState({fetching: false});
    console.log(this.state.prices);
  }

  renderDataListOptions = () => {
    return this.state.products.map((product, i) => (
      <option key = {i} value={product} />
    ))
  }

  renderCardItems = (product) => {
    return this.state.prices[product].map((el, i) => (
      <div key={i}>
        <strong>{el.exchange}</strong>
        <h2>{el.price}</h2>
      </div>
    ))
  }

  componentDidMount() {this.getProducts()};

  render () {
    return (
      <div className='App'>
        <div className='Header'>
          <h1>bitwatch</h1>
          {/* <h3>The cryptocurrency tracker</h3> */}
          <form onSubmit={this.handleSubmit}>
            <input type='text' onChange={this.handleInput} list='products' value={this.state.product} placeholder='Select product' />
            <datalist id='products'>
            {this.renderDataListOptions()}
            </datalist>
            <input type='submit' value='Get prices' />
          </form>
          {this.productName.length > 0 ?
            (
              <h3>Current prices for</h3>
            ) :
              ''
            }
            <h1>{this.productName} </h1>
        </div>
          {this.productName.length > 0 && !this.fetching ?
          (
            <div className='CardList'>
              { this.state.prices[this.productName] ? this.renderCardItems(this.productName): ''}
            </div>
          ) : <Welcome />
        }
      </div>
    );
  }
  }

export default App;