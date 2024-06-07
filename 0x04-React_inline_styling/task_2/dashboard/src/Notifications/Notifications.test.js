import React from 'react';
import { shallow } from 'enzyme';
import App from '../App/App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';

import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});


describe('App component', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('contains the Notifications component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Notifications).length).toBe(1);
  });

  it('contains the Header component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Header).length).toBe(1);
  });

  it('contains the Login component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Login).length).toBe(1);
  });

  it('contains the Footer component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Footer).length).toBe(1);
  });


  test('menu item is displayed when displayDrawer is false', () => {
    const { getByText } = render(<Notifications displayDrawer={false} />);
    expect(getByText('Your notifications')).toBeInTheDocument();
  });

  test('div.Notifications is not displayed when displayDrawer is false', () => {
    const { queryByText } = render(<Notifications displayDrawer={false} />);
    expect(queryByText('Here is the list of notifications')).toBeNull();
  });

  test('menu item is displayed when displayDrawer is true', () => {
    const { getByText } = render(<Notifications displayDrawer={true} />);
    expect(getByText('Your notifications')).toBeInTheDocument();
  });

  test('div.Notifications is displayed when displayDrawer is true', () => {
    const { getByText } = render(<Notifications displayDrawer={true} />);
    expect(getByText('Here is the list of notifications')).toBeInTheDocument();
  });

  it('should log message when markAsRead is called', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    const wrapper = shallow(<Notifications listNotifications={[{ id: 1, type: 'default', value: 'Test' }]} />);

    wrapper.instance().markAsRead(1);
    expect(consoleSpy).toHaveBeenCalledWith('Notification 1 has been marked as read');

    consoleSpy.mockRestore();
  });

  it('should not rerender when updating the props with the same list', () => {
    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
    ];
    const wrapper = shallow(<Notifications listNotifications={listNotifications} />);

    expect(wrapper.find('NotificationItem').length).toBe(2);

    wrapper.setProps({ listNotifications });

    expect(wrapper.find('NotificationItem').length).toBe(2);
  });

  it('should rerender when updating the props with a longer list', () => {
    const initialListNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
    ];
    const newListNotifications = [
      ...initialListNotifications,
      { id: 3, type: 'urgent', value: 'Urgent requirement' },
    ];
    const wrapper = shallow(<Notifications listNotifications={initialListNotifications} />);

    expect(wrapper.find('NotificationItem').length).toBe(2);

    wrapper.setProps({ listNotifications: newListNotifications });

    expect(wrapper.find('NotificationItem').length).toBe(3);
  });
});
