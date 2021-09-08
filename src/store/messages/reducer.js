const initialState = {
  messages: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'LOAD_MESSAGES_SUCCESS':
      return { ...state, messages: action.payload };

    case 'CREATE_MESSAGES_SUCCESS':
      return { ...state, messages: action.payload };

    default:
      return state;
  }
}
