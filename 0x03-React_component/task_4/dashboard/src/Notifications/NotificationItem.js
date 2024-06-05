import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class NotificationItem extends PureComponent {
  render() {
    const { type, value, html, id, markAsRead } = this.props;

    if (html) {
      return (
        <li data-notification-type={type} dangerouslySetInnerHTML={html} onClick={() => markAsRead(id)}></li>
      );
    }
    return (
      <li data-notification-type={type} onClick={() => markAsRead(id)}>
        {value}
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
