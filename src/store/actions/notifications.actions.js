export const addNotification = (notification) => ({
  type: 'ADD_NOTIFICATION',
  payload: notification
});

export const removeNotification = (id) => ({
  type: 'REMOVE_NOTIFICATION',
  payload: id
});