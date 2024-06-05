// src/Notifications/Notifications.js
import React from 'react';
import PropTypes from 'prop-types';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import './Notifications.css';

function Notifications({ listNotifications }) {
  return (
    <div>
      <div className="menuItem">Your notifications</div>
      <div className="Notifications">
        <button style={{ float: 'right' }} aria-label="Close">X</button>
        <p>Here is the list of notifications</p>
        <ul>
          {listNotifications.length === 0 ? (
            <li>No new notification for now</li>
          ) : (
            listNotifications.map(notification => (
              <NotificationItem
                key={notification.id}
                type={notification.type}
                value={notification.value}
                html={notification.html}
              />
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

Notifications.propTypes = {
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  listNotifications: [],
};

export default Notifications;
