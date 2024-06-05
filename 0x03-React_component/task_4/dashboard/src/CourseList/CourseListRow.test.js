// CourseListRow.test.js
import React from 'react';
import { render } from '@testing-library/react';
import CourseListRow from './CourseListRow';

test('renders one cell with colspan = 2 when isHeader is true and textSecondCell does not exist', () => {
  const { container } = render(<CourseListRow isHeader={true} textFirstCell="Test" />);
  const th = container.querySelector('th');
  expect(th).toHaveAttribute('colSpan', '2');
});

test('renders two cells when isHeader is true and textSecondCell is present', () => {
  const { container } = render(<CourseListRow isHeader={true} textFirstCell="Test" textSecondCell="Test2" />);
  const ths = container.querySelectorAll('th');
  expect(ths.length).toBe(2);
});

test('renders correctly two td elements within a tr element when isHeader is false', () => {
  const { container } = render(<CourseListRow isHeader={false} textFirstCell="Test" textSecondCell="Test2" />);
  const tds = container.querySelectorAll('td');
  expect(tds.length).toBe(2);
});
