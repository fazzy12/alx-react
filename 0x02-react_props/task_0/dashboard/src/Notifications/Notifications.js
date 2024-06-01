// Notifications.js
import React from 'react';
import PropTypes from 'prop-types';
import NotificationItem from './NotificationItem';
import { getLatestNotification } from '../utils/utils';
import './Notifications.css';

function Notifications({ displayDrawer }) {
  const handleClick = () => {
    console.log('Close button has been clicked');
  };

  return (
    <>
      <div className="menuItem">Your notifications</div>
      {displayDrawer && (
        <div className="Notifications">
          <button onClick={handleClick} style={{ float: 'right' }} aria-label="Close">
            {/* <img src={closeIcon} alt="Close" /> */}
          </button>
          <p>Here is the list of notifications</p>
          <ul>
            <NotificationItem type="default" value="New course available" />
            <NotificationItem type="urgent" value="New resume available" />
            <NotificationItem html={{ __html: getLatestNotification() }} />
          </ul>
        </div>
      )}
    </>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool
};

Notifications.defaultProps = {
  displayDrawer: false
};

export default Notifications;
