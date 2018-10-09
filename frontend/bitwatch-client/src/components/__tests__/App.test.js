import React from 'react';
import { shallow } from 'enzyme';

import { App } from 'components/App';
import CardList from 'components/CardList';
import Welcome from 'components/Welcome';

describe('<App />', () => {
  let wrapper;
  jest.mock('axios');

  const changeProps = (props) => {
    return shallow(<App setProductName={jest.fn()} setProducts={jest.fn()} savePrices={jest.fn()} {...props}/>);
  }

  const flushPromises = () => new Promise(resolve => setImmediate(resolve));

  beforeEach( async () => {
    const props = {products: [], prices: {}, productName: ''}
    wrapper = changeProps(props);
    await flushPromises();
  })

  it('only shows header and welcome message upon load', async () => {
    expect(wrapper.find('.Header').length).toEqual(1);
    expect(wrapper.find(Welcome).length).toEqual(1);
    expect(wrapper.find(CardList).length).toEqual(0);
  });

  it('only shows header and card list when form is submitted', async () => {
    wrapper.setProps({productName: 'first'});
    wrapper.setState({product: 'first'});
    wrapper.find('form').simulate('submit',{preventDefault: jest.fn()});
    await flushPromises();
    expect(wrapper.find('.Header').length).toEqual(1);
    expect(wrapper.find(CardList).length).toEqual(1);
    expect(wrapper.find(Welcome).length).toEqual(0);
  });
});