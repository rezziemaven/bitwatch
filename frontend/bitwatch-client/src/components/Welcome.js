import React from 'react';

import 'styles/Welcome.css';

const Welcome = () => (
  <div className='Welcome animated animatedFadeInUp fadeInUp'>
    <div className='Content'>
      <p>
        Welcome to
        <br />
        <span><strong>bitwatch</strong></span>.</p>
        <p><strong>Bitwatch</strong> shows
        the current prices for shared cryptocurrencies across the BTX, BNB and BFX exchanges.</p>
        <p>Please select a product from the input above to get started.</p>
    </div>
  </div>
);

export default Welcome;