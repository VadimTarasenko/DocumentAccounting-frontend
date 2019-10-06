import { connect } from 'react-redux';

import Notifications from './Notifications';

const mapStateToProps = ({ notifications }) => ({
  notifications: notifications.items.filter(item => item)
});

export default connect(mapStateToProps)(Notifications);