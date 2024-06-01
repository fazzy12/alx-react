import React from 'react';
import { shallow } from 'enzyme';
import App from '../App/App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';

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
});
