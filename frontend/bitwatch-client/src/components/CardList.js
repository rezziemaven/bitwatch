import React from 'react';

const CardList = ({productName, prices}) => {
  const renderCardItems = (product) => {
    return prices[product].map((el, i) => (
      <div key={i}>
        <strong>{el.exchange}</strong>
        <h2>{el.price}</h2>
      </div>
    ))
  };
  return (
    <div className='CardList'>
      { prices[productName] ? renderCardItems(productName): ''}
    </div>
  );
}

export default CardList;