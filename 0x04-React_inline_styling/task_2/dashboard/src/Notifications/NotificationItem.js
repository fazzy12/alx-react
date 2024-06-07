import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  defaultItem: {
    color: 'blue',
  },
  urgentItem: {
    color: 'red',
  },
});

class NotificationItem extends PureComponent {
  render() {
    const { type, value, html, id, markAsRead } = this.props;

    return (
      <li
        data-notification-type={type}
        className={css(type === 'urgent' ? styles.urgentItem : styles.defaultItem)}
        onClick={() => markAsRead(id)}
        dangerouslySetInnerHTML={html}
      >
        {!html && value}
      </li>
    );
  }
}

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  id: PropTypes.number.isRequired,
  markAsRead: PropTypes.func.isRequired,
};

NotificationItem.defaultProps = {
  type: 'default',
};

export default NotificationItem;
