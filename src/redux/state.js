const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';

//===============================================

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, text: 'Hi, this my first post!', likesCount: 10 },
        { id: 2, text: 'How do you do?', likesCount: 1 },
        { id: 3, text: 'How do?', likesCount: 10 },
      ],
      newPostText: '',
    },
    dialogsPage: {
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
    },
  },
  // метод для ререндеринга страницы
  _callSubscriber() {
    console.log('State changed');
  },
  // метод принимающий функцию, которая должна отрендерить страницу
  subskribe(observer) {
    this._callSubscriber = observer;
  },
  // метод для извлечения state
  getState() {
    return this._state;
  },
  // метод для изменения state
  dispatch(action) {
    switch (action.type) {
      case UPDATE_NEW_POST_TEXT: {
        this._state.profilePage.newPostText = action.newText;
        this._callSubscriber(this._state);
        break;
      }

      case ADD_POST: {
        let newPost = {
          id: 4,
          text: this._state.profilePage.newPostText,
          likesCount: 0,
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
        break;
      }

      case UPDATE_NEW_MESSAGE_TEXT: {
        this._state.dialogsPage.newMessageText = action.newTextMessage;
        this._callSubscriber(this._state);
        break;
      }

      case ADD_MESSAGE: {
        let newMessage = {
          id: 3,
          message: this._state.dialogsPage.newMessageText,
        };
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessageText = '';
        this._callSubscriber(this._state);
        break;
      }

      default:
        console.log('not function');
    }
  },
};

//===============================================

// функции для создания action которые передаются в dispatch
export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (textPost) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: textPost,
});

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });

export const updateNewMessageTextActionCreator = (newTextMessage) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newTextMessage: newTextMessage,
});

//===============================================

export default store;
