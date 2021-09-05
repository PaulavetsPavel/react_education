import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';

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
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

    this._callSubscriber(this._state);
  },
};

//===============================================

//===============================================

export default store;
