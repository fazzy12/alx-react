import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';

const styles = StyleSheet.create({
  menuItem: {
    cursor: 'pointer',
    backgroundColor: '#fff8f8',
    float: 'right',
    ':hover': {
      animationName: {
        '0%': { opacity: 0.5 },
        '100%': { opacity: 1 },
      },
      animationDuration: '1s, 0.5s',
      animationIterationCount: '3',
      animationTimingFunction: 'ease-in-out',
    },
  },
  notifications: {
    border: '1px solid #e1354b',
    padding: '1rem',
    marginBottom: '1rem',
  },
  button: {
    float: 'right',
    cursor: 'pointer',
  },
  notificationText: {
    fontSize: '20px',
  },
  notificationList: {
    padding: '0',
  },
  notificationListItem: {
    padding: '10px 8px',
    borderBottom: '1px solid black',
    fontSize: '20px',
  },
});

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.listNotifications.length > this.props.listNotifications.length;
  }

  render() {
    const { listNotifications } = this.props;

    return (
      <div>
        <div className={css(styles.menuItem)}>Your notifications</div>
        <div className={css(styles.notifications)}>
          <button className={css(styles.button)} aria-label="Close">X</button>
          <p className={css(styles.notificationText)}>Here is the list of notifications</p>
          <ul className={css(styles.notificationList)}>
            {listNotifications.length === 0 ? (
              <li className={css(styles.notificationListItem)}>No new notification for now</li>
            ) : (
              listNotifications.map(notification => (
                <NotificationItem
                  key={notification.id}
                  id={notification.id}
                  type={notification.type}
                  value={notification.value}
                  html={notification.html}
                  markAsRead={this.markAsRead}
                />
              ))
            )}
          </ul>
        </div>
      </div>
    );
  }
}

Notifications.propTypes = {
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  listNotifications: [],
};

export default Notifications;
