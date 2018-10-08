import React from 'react';

import 'styles/CardList.css';

const CardList = ({productName, prices}) => {
  const renderCardItems = (product) => {
    if (!prices[product]) return (
      <div className='NotFound OneCard'>
        <h3>Not Found: {product}</h3>
        <p>Sorry, we couldn't find prices for this product. Perhaps it was mispelt. <br/><br/>Please try again.</p>
      </div>
    )
    return prices[product].map((el, i) => {
      if (el.price === -1) return (
        <div className='NotFound' key={i}>
          <strong>{el.exchange}</strong>
          <h2>Sorry, no price found</h2>
        </div>
      );
      return (
        <div key={i}>
          <strong>{el.exchange}</strong>
          <h2>{el.price}</h2>
        </div>
    )})
  };

  return (
    <div className='CardList'>
      {renderCardItems(productName)}
    </div>
  );
}

export default CardList;