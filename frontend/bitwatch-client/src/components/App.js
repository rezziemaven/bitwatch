import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import 'styles/App.css';
import { Welcome, CardList } from 'components';
import { setProductName, setProducts, savePrices } from 'actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: '',
      productsFetching: false,
      pricesFetching: false,
      showWelcome: true
    }
  }

  handleInput = event => {
    this.setState({
      product: event.target.value
    });
  }

  handleSubmit = async event => {
    event.preventDefault();
    this.setState ({showWelcome: false});
    if (this.state.product.length) await this.props.setProductName(this.state.product);
    this.setState({product: ''});
    if (this.props.productName) await this.getPrices(this.props.productName);
  }

  getProducts = async () => {
    this.setState({productsFetching: true});
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/products`);
    this.props.setProducts(response.data);
    this.setState({productsFetching: false});
  }

  getPrices = async (product) => {
    this.setState({pricesFetching: true});
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/products/${product}/prices`);
    this.props.savePrices(response.data);
    this.setState({pricesFetching: false});
    console.log(this.props.prices);
  }

  renderDataListOptions = () => {
    return this.props.products.map((product, i) => (
      <option key = {i} value={product} />
    ))
  }

  componentDidMount() {this.getProducts()};

  render () {
    return (
      <div className='App'>
      {!this.state.productsFetching ? (
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
          {this.props.productName.length > 0 ?
            (<h3>Current prices for</h3>) : ''}
            <h1>{this.props.productName} </h1>
        </div>
        ) : ''}
        {!this.state.pricesFetching ? <CardList prices = {this.props.prices} productName = {this.props.productName} /> : ''}
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