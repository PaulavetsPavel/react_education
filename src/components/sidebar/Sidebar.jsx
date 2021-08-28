import classes from './_sidebar.module.scss';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className={classes.aside}>
      <nav className={classes.nav}>
        <ul>
          <li className={classes.nav_item}>
            <NavLink
              to='/profile'
              className={classes.nav_link}
              activeClassName={classes.active}
            >
              Profile
            </NavLink>
          </li>
          <li className={classes.nav_item}>
            <NavLink
              to='/dialogs'
              className={classes.nav_link}
              activeClassName={classes.active}
            >
              Messages
            </NavLink>
          </li>
          <li className={classes.nav_item}>
            <NavLink
              to='/news'
              className={classes.nav_link}
              activeClassName={classes.active}
            >
              News
            </NavLink>
          </li>
          <li className={classes.nav_item}>
            <NavLink
              to='/music'
              className={classes.nav_link}
              activeClassName={classes.active}
            >
              Music
            </NavLink>
          </li>
          <li className={classes.nav_item}>
            <NavLink
              to='/settings'
              className={classes.nav_link}
              activeClassName={classes.active}
            >
              Settings
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
