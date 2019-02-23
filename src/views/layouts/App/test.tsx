/* eslint-env jest */
import { shallow } from 'enzyme';
import React from 'react';

import App from './index';

describe('App', () => {
  it('renders children with correct child', () => {
    const wrapper = shallow(<App children={<div>app children</div>} />);
    expect(wrapper.children().contains(<div>app children</div>)).toEqual(true);
  });
});
