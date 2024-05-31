// Import the functions to be tested
import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

// Test suite for utils.js
describe('Utils Functions', () => {
  // Test suite for getFullYear function
  describe('getFullYear', () => {
    it('should return the current year', () => {
      // Get the current year
      const currentYear = new Date().getFullYear();

      // Call the getFullYear function and check if it returns the current year
      expect(getFullYear()).toEqual(currentYear);
    });
  });

  // Test suite for getFooterCopy function
  describe('getFooterCopy', () => {
    it('should return "Holberton School" if isIndex is true', () => {
      // Call the getFooterCopy function with isIndex as true
      const footerCopy = getFooterCopy(true);

      // Check if the function returns "Holberton School"
      expect(footerCopy).toEqual("Holberton School");
    });

    it('should return "Holberton School main dashboard" if isIndex is false', () => {
      // Call the getFooterCopy function with isIndex as false
      const footerCopy = getFooterCopy(false);

      // Check if the function returns "Holberton School main dashboard"
      expect(footerCopy).toEqual("Holberton School main dashboard");
    });
  });

  // Test suite for getLatestNotification function
  describe('getLatestNotification', () => {
    it('should return the latest notification string', () => {
      // Define the expected latest notification string
      const expectedNotification = "<strong>Urgent requirement</strong> - complete by EOD";

      // Call the getLatestNotification function and check if it returns the expected notification
      expect(getLatestNotification()).toEqual(expectedNotification);
    });
  });
});
