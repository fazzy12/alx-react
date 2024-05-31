import React from 'react';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import './Notifications.css';

function Notifications() {
  const handleClick = () => {
    console.log("Close button has been clicked");
  };

  return (
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
  );
}

export default Notifications;
