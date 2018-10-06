import React from 'react';

const renderCardItems = (product) => {
  return this.state.prices[product].map((el, i) => (
    <div key={i}>
      <strong>{el.exchange}</strong>
      <h2>{el.price}</h2>
    </div>
  ))
}

const CardList = ({productName}) => (
  <div className='CardList'>
    { this.state.prices[productName] ? renderCardItems(productName): ''}
  </div>
);

export default CardList;