// src/Notifications/NotificationItem.test.js
import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('NotificationItem component', () => {
  it('renders without crashing', () => {
    shallow(<NotificationItem type="default" value="test" />);
  });

  it('renders the correct html when passed type and value props', () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" />);
    expect(wrapper.find('li').text()).toBe('test');
    expect(wrapper.find('li').prop('data-notification-type')).toBe('default');
  });

  it('renders the correct html when passed html prop', () => {
    const wrapper = shallow(<NotificationItem type="default" html={{ __html: '<u>test</u>' }} />);
    expect(wrapper.find('li').prop('dangerouslySetInnerHTML')).toEqual({ __html: '<u>test</u>' });
  });
});
