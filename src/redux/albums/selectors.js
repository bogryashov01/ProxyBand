const selfSelector = (state) => state.albums;
const postsSelector = (state) => selfSelector(state).albums;
const loadingSelector = (state) => selfSelector(state).loading;

const albumsSelectors = {
  albums: postsSelector,
  loading: loadingSelector,
};

export default albumsSelectors;
