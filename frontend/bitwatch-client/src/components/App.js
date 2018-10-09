import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import 'styles/App.css';
import { Welcome, CardList, Search } from 'components';
import { setProductName, setProducts, savePrices } from 'actions';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: '',
      productsFetching: false,
      pricesFetching: false,
      showWelcome: false,
    }
  }

  getValue = (valueFromFilter) => {
    this.setState({product: valueFromFilter});
  }

  handleSubmit = async event => {
    event.preventDefault();
    if (this.state.product.length) {
      this.setState ({showWelcome: false});
      if (this.state.product.length) await this.props.setProductName(this.state.product.toUpperCase());
      if (this.props.productName) await this.getPrices(this.props.productName);
    }
  }

  getProducts = async () => {
    this.setState({productsFetching: true});
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/products`);
    this.props.setProducts(response.data);
    this.setState({productsFetching: false, showWelcome: true});
  }

  getPrices = async (product) => {
    this.setState({pricesFetching: true});
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/products/${product}/prices`);
    if (response.data.prices.some(el => el.price>0)) await this.props.savePrices(response.data);
    this.setState({pricesFetching: false});
  }

  async componentDidMount() {await this.getProducts()};

  render () {
    return (
      <div className='App'>
      {!this.state.productsFetching ? (
        <div className='Header'>
          <img src='logo.png' alt='logo' />
          <form onSubmit={this.handleSubmit}>
            <Search setValue={this.getValue} value={this.state.product} options={this.props.products} />
            <input style={!this.state.product ? {
              backgroundColor: '#C0C0C0',
              backgroundImage: 'none',
              boxShadow: 'none'}
              : {backgroundColor: '#5AC9FF'}} type='submit' value='Get prices' />
          </form>
          {this.props.prices[this.props.productName] ?
            (<h3>Current prices for</h3>) : ''}
          {this.props.prices[this.props.productName] ?
          <h1 className='ProductName'>{this.props.productName} </h1> : <h1> </h1>}
        </div>
        ) : ''}
        {!this.state.pricesFetching && this.props.productName ? <CardList prices = {this.props.prices} productName = {this.props.productName} /> : ''}
        {this.state.showWelcome ? <Welcome /> : ''}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  productName: state.productName,
  products: state.products,
  prices: state.prices
});

const mapDispatchToProps = (dispatch) => ({
  setProductName: (productName) => dispatch(setProductName(productName)),
  setProducts: (products) => dispatch(setProducts(products)),
  savePrices: (prices) => dispatch(savePrices(prices))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);