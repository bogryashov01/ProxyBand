const selfSelector = (state) => state.posts;
const postsSelector = (state) => selfSelector(state).posts;
const loadingSelector = (state) => selfSelector(state).loading;

const postsSelectors = {
  posts: postsSelector,
  loading: loadingSelector,
};

export default postsSelectors;
