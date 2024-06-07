import React from 'react';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import App from './App';

describe('App Component', () => {
  test('does not display CourseList when isLoggedIn is false', () => {
    const { queryByText } = render(<App />);
    expect(queryByText('Course name')).toBeNull();
  });

  test('does not include the Login component when isLoggedIn is true', () => {
    const { queryByText } = render(<App isLoggedIn={true} />);
    expect(queryByText('Login')).toBeNull();
  });

  test('includes the CourseList component when isLoggedIn is true', () => {
    const { queryByText } = render(<App isLoggedIn={true} />);
    expect(queryByText('Course name')).not.toBeNull();
  });

  test('calls logOut and shows alert when ctrl+h is pressed', () => {
    const logOutMock = jest.fn();
    const wrapper = shallow(<App logOut={logOutMock} />);

    const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});
    const event = new KeyboardEvent('keydown', { ctrlKey: true, key: 'h' });
    window.dispatchEvent(event);

    expect(alertSpy).toHaveBeenCalledWith('Logging you out');
    expect(logOutMock).toHaveBeenCalled();

    alertSpy.mockRestore();
  });
});
