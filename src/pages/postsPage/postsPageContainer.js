import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { GetPosts } from '../../redux/posts/async-actions';
import postsSelectors from '../../redux/posts/selectors';
import PostPage from './postPage';

function PostsPageContainer() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const posts = useSelector(postsSelectors.posts);
  const loading = useSelector(postsSelectors.loading);

  useEffect(() => {
    dispatch(GetPosts(id));
  }, [dispatch, id]);

  return <PostPage posts={posts} loading={loading} />;
}

export default PostsPageContainer;
