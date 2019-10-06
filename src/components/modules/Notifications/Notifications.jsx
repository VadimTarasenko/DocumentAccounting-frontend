import React from 'react';

import { Notification } from 'components/reusable';

function Notifications({ notifications }) {
  return (
    <div className='notifications'>
      {notifications.map((notification, i) =>
        <Notification text={notification.text} key={i} />
      )}
    </div>
  )
}

export default Notifications;