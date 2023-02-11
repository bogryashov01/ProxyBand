import { Circles } from 'react-loader-spinner';

import './postsPage.css';

function PostPage({ posts, loading }) {
  return (
    <>
      {loading ? (
        <div className="loader">
          <Circles
            height="80"
            width="80"
            color="#0000FF"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      ) : (
        <div className="posts-container">
          {posts.map((post) => {
            return (
              <div key={post.id} className="post-block">
                <h3>{post.title}</h3>
                <p>{post.body}</p>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

export default PostPage;
