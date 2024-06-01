// App.test.js
import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('does not display CourseList when isLoggedIn is false', () => {
  const { queryByText } = render(<App />);
  expect(queryByText('Course name')).toBeNull();
});

describe('when isLoggedIn is true', () => {
  test('does not include the Login component', () => {
    const { queryByText } = render(<App isLoggedIn={true} />);
    expect(queryByText('Login')).toBeNull();
  });

  test('includes the CourseList component', () => {
    const { queryByText } = render(<App isLoggedIn={true} />);
    expect(queryByText('Course name')).not.toBeNull();
  });
});
