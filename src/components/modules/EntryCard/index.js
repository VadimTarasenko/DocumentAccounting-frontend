import { connect } from 'react-redux';

import { addNotification } from 'store/middlewares/notifications.middleware';
import EntryCard from './EntryCard';


const mapDispatchToProps = (dispatch) => ({
  addNotification: addNotification(dispatch)
});

export default connect(null, mapDispatchToProps)(EntryCard);