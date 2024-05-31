import React from 'react';


const NotificationItem = ({ type, html, value }) => {
  if (html) {
    return <li data-notification-type={type} dangerouslySetInnerHTML={html}></li>;
  }
  return <li data-notification-type={type}>{value}</li>;
};



NotificationItem.defaultProps = {
  type: 'default'
};

export default NotificationItem;

