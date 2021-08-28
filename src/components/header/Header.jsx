import Logo from './logo/Logo.jsx';
import classes from './_header.module.scss';

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <Logo />
      </div>
    </header>
  );
};

export default Header;
