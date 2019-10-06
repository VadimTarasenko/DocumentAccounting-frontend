import { combineReducers } from 'redux';
import documents from './documents.reducer';
import notifications from './notifications.reducer';

export default combineReducers({
  documents,
  notifications
});