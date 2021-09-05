import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Profile from './components/content/profile/Profile';
import Music from './components/content/music/Music';
import News from './components/content/news/News';
import Settings from './components/content/settings/Settings';
import classes from './scss/_App.module.scss';
import Dialogs from './components/content/dialogs/Dialogs';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className={classes.app}>
        <div className={classes.app_wrapper}>
          <Header />
          <div className={classes.app_body}>
            <Sidebar />
            <div className={classes.app_content}>
              <Route
                path='/profile'
                render={() => (
                  <Profile
                    state={props.state.profilePage}
                    dispatch={props.dispatch}
                  />
                )}
              />
              <Route
                path='/dialogs'
                render={() => (
                  <Dialogs
                    state={props.state.dialogsPage}
                    dispatch={props.dispatch}
                  />
                )}
              />
              <Route path='/music' render={() => <Music />} />
              <Route path='/news' render={() => <News />} />
              <Route path='/settings' render={() => <Settings />} />
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
