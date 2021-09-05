const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_TEXT: {
      state.newMessageText = action.newTextMessage;
      return state;
    }

    case ADD_MESSAGE: {
      let newMessage = {
        id: 3,
        message: state.newMessageText,
      };
      state.messages.push(newMessage);
      state.newMessageText = '';
      return state;
    }
    default:
      return state;
  }
};

export const addMessageCreator = () => ({ type: ADD_MESSAGE });

export const updateNewMessageTextCreator = (newTextMessage) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newTextMessage: newTextMessage,
});

export default dialogsReducer;
