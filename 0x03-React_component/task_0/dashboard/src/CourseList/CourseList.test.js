// CourseList.test.js
import React from 'react';
import { render } from '@testing-library/react';
import CourseList from './CourseList';

test('renders CourseList component without crashing', () => {
  render(<CourseList />);
});

test('renders the 5 different rows', () => {
  const { container } = render(<CourseList />);
  const rows = container.querySelectorAll('tr');
  expect(rows.length).toBe(5);
});
