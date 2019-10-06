import * as notificactionActions from 'store/actions/notifications.actions';
import { idGenerate } from 'utilities/helpers';

export const addNotification = (dispatch) => (notificactionText) => {
  const newNotification = {
    id: idGenerate(),
    text: notificactionText
  }

  dispatch(notificactionActions.addNotification(newNotification));

  setTimeout(() => {
    dispatch(notificactionActions.removeNotification(newNotification.id));
  }, 3000);
}