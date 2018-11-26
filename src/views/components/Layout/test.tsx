/* eslint-env jest */
import { shallow } from 'enzyme';
import React from 'react';

import Layout from './index';

describe('Layout', () => {
  it('renders children with correct title', () => {
    const wrapper = shallow(<Layout title='Layout title'/>);
    expect(wrapper.find('h1').text()).toEqual('Layout title');
  });
});
