const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
  messages: [
    { id: 1, message: 'Hi!' },
    { id: 2, message: 'Hello!' },
    { id: 3, message: 'How are you?' },
    { id: 4, message: 'Yo ho ho!' },
  ],
  users: [
    {
      id: 1,
      name: 'Pavel',
      img: 'https://dempseydismantlers.com/wp-content/uploads/2020/02/avatar-icon.png',
    },
    {
      id: 2,
      name: 'Julia',
      img: 'https://dempseydismantlers.com/wp-content/uploads/2020/02/avatar-icon.png',
    },
    {
      id: 3,
      name: 'Darya',
      img: 'https://dempseydismantlers.com/wp-content/uploads/2020/02/avatar-icon.png',
    },
    {
      id: 4,
      name: 'Marya',
      img: 'https://dempseydismantlers.com/wp-content/uploads/2020/02/avatar-icon.png',
    },
    {
      id: 5,
      name: 'Ann',
      img: 'https://dempseydismantlers.com/wp-content/uploads/2020/02/avatar-icon.png',
    },
  ],
  newMessageText: '',
};

const dialogsReducer = (state = initialState, action) => {
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
