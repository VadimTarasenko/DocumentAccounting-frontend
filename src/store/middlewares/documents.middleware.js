import axios from 'axios';

import { setDocuments } from 'store/actions/documents.actions';

export const getDocuments = (dispatch) => () => {
  axios.get('/documents.json')
    .then(({ data }) => {
      dispatch(setDocuments(data));
    })
    .catch((error) => {
      console.error('getAllMovies: ', error);
    });
}