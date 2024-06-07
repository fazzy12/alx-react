import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const bounceKeyframes = {
  '0%': { transform: 'translateY(0px)' },
  '50%': { transform: 'translateY(-5px)' },
  '100%': { transform: 'translateY(5px)' },
};

const opacityKeyframes = {
  '0%': { opacity: 0.5 },
  '100%': { opacity: 1 },
};

const styles = StyleSheet.create({
  menuItem: {
    textAlign: 'right',
    cursor: 'pointer',
    float: 'right',
    backgroundColor: '#fff8f8',
    ':hover': {
      animationName: [bounceKeyframes, opacityKeyframes],
      animationDuration: '0.5s, 1s',
      animationIterationCount: '3, 3',
    },
  },
  notifications: {
    display: 'none',
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'white',
    zIndex: 1000,
    overflowY: 'scroll',
    padding: 0,
    fontSize: '20px',
  },
  showNotifications: {
    display: 'block',
  },
  hideMenuItem: {
    display: 'none',
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
