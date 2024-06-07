import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  row: {
    backgroundColor: '#f5f5f5ab',
  },
  headerRow: {
    backgroundColor: '#deb5b545',
  },
  headerCell: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  defaultCell: {
    textAlign: 'left',
  },
});

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
  const rowStyle = isHeader ? styles.headerRow : styles.row;
  const cellStyle = isHeader ? styles.headerCell : styles.defaultCell;

  return (
    <tr className={css(rowStyle)}>
      {isHeader ? (
        textSecondCell ? (
          <>
            <th className={css(cellStyle)}>{textFirstCell}</th>
            <th className={css(cellStyle)}>{textSecondCell}</th>
          </>
        ) : (
          <th colSpan="2" className={css(cellStyle)}>{textFirstCell}</th>
        )
      ) : (
        <>
          <td className={css(cellStyle)}>{textFirstCell}</td>
          <td className={css(cellStyle)}>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.string,
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

export default CourseListRow;
