// CourseListRow.test.js
import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('CourseListRow Component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<CourseListRow textFirstCell="test" />);
    expect(wrapper.exists()).toBe(true);
  });

  it('applies correct class for header row', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="test" />);
    expect(wrapper.find('tr').prop('className')).toContain('headerRow');
  });

  it('applies correct class for default row', () => {
    const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="test" />);
    expect(wrapper.find('tr').prop('className')).toContain('row');
  });

  it('renders correctly with two cells for header', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="test1" textSecondCell="test2" />);
    const cells = wrapper.find('th');
    expect(cells).toHaveLength(2);
    expect(cells.at(0).text()).toBe('test1');
    expect(cells.at(1).text()).toBe('test2');
  });

  it('renders correctly with two cells for default row', () => {
    const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="test1" textSecondCell="test2" />);
    const cells = wrapper.find('td');
    expect(cells).toHaveLength(2);
    expect(cells.at(0).text()).toBe('test1');
    expect(cells.at(1).text()).toBe('test2');
  });
});
