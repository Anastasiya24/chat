import { get, post } from '../../services/api';

export const loadMessages = () => (dispatch) => {
  get('/messages')
    .then((res) => {
      dispatch({
        type: 'LOAD_MESSAGES_SUCCESS',
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch({
        type: 'LOAD_MESSAGES_FAILURE',
        payload: err,
      })
    );
};

export const createMessages = (message) => (dispatch) => {
  post(`/messages`, info)
    .then((res) => {
      dispatch({
        type: 'CREATE_MESSAGES_SUCCESS',
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch({
        type: 'CREATE_MESSAGES_FAILURE',
        payload: err,
      })
    );
};
