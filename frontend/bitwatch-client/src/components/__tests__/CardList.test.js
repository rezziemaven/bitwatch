import React from 'react';
import { shallow } from 'enzyme';

import CardList from 'components/CardList';

describe('<CardList />', () => {
  let wrapper;

  const prices = {
    'first': [
      {exchange: 'BNB', price: 0.00007890},
      {exchange: 'BTX', price: 0.00005678},
      {exchange: 'BFX', price: 0.00001234}],
    'second': [
      {exchange: 'BNB', price: 0.00007890},
      {exchange: 'BTX', price: 0.00005678},
      {exchange: 'BFX', price: -1}]
  };

  const changeProductName = (name) => {
    return shallow(<CardList prices={prices} productName={name} />);
  }

  it('shows three cards when correct product name is given', () => {
    wrapper = changeProductName('first');
    expect(wrapper.find('.Card').length).toEqual(3);
  });

  it('shows card with NotFound style when any exchange has no price', () => {
    wrapper = changeProductName('second');
    expect(wrapper.find('.Card').length).toEqual(3);
    expect(wrapper.find('.NotFound').length).toEqual(1);
  });

  it('shows one card with NotFound style when product name was not found', () => {
    wrapper = changeProductName('third');
    expect(wrapper.find('.Card').length).toEqual(0);
    expect(wrapper.find('.OneCard').length).toEqual(1);
    expect(wrapper.find('.NotFound').length).toEqual(1);
  });
});