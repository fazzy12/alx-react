import { getFullYear, getFooterCopy, getLatestNotification } from './utils';


describe('Utility functions tests', () => {
  test('getFullYear returns the correct year', () => {
    const currentYear = new Date().getFullYear();
    expect(getFullYear()).toBe(currentYear);
  });

  test('getFooterCopy returns correct string when isIndex is true', () => {
    expect(getFooterCopy(true)).toBe('Holberton School');
  });

  test('getFooterCopy returns correct string when isIndex is false', () => {
    expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
  });

  test('getLatestNotification returns the correct string', () => {
    const notificationString = "<strong>Urgent requirement</strong> - complete by EOD";
    expect(getLatestNotification()).toBe(notificationString);
  });
});
