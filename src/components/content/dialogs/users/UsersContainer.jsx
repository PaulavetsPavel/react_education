import Users from './Users';

const UsersContainer = (props) => {
  debugger;
  let state = props.store.getState();

  return <Users users={state.dialogsPage.users} />;
};

export default UsersContainer;
