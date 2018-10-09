import React from 'react';
import { shallow } from 'enzyme';

import Search from 'components/Search';

describe('<CardList />', () => {
  let wrapper;

  const products = ["FIRST", "SECOND", "THIRD", "FOURTH"];

  const changeOptions = (options) => {
    return shallow(<Search setValue={mockSetValue} value='' options={options} />);
  }

  const mockSetValue = jest.fn((value) => wrapper.setProps({value}));

  it('should let users type into it', () => {
    wrapper = changeOptions([]);
    wrapper.instance().filterOptions=jest.fn();
    wrapper.find('input').simulate('change',{
      target: {
        value: 'first'
      }
    });
    wrapper.update();
    expect(wrapper.find('input').prop('value')).toEqual('first');
  });

  it('should render a list of products', () => {
    wrapper = changeOptions(products);
    expect(wrapper.find('ul').length).toEqual(1);
    expect(wrapper.find('li').length).toEqual(4);
  });

  it('should display list when input is clicked', () => {
    wrapper = changeOptions(products);
    wrapper.find('input').simulate('click',{target: {}});
    wrapper.update();
    expect(wrapper.state('showDropdown')).toEqual(true);
  });
});