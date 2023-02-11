const selfSelector = (state) => state.user;
const userSelector = (state) => selfSelector(state).users;
const loadingSelector = (state) => selfSelector(state).loading;

const userSelectors = {
  users: userSelector,
  loading: loadingSelector,
};

export default userSelectors;
