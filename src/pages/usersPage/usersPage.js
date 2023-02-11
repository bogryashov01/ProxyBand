import { Circles } from 'react-loader-spinner';
import AlbumModal from '../../components/Modal';
import './usersPage.css';

function UsersPage({ users, userId, isOpen, handleIsOpen, loading }) {
  return (
    <div>
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
        <div className="users-container">
          {users.map((user) => {
            return (
              <div className="user-container" key={user.id}>
                <p>{user.name}</p>
                <p>{user.username}</p>
                <p>{user.email}</p>
                <a href={`posts/${user.id}`} key={user.id} className="user-link">
                  Posts
                </a>
                <button
                  className="button"
                  onClick={() => {
                    handleIsOpen(user.id || null);
                  }}>
                  albums
                </button>
              </div>
            );
          })}
          <AlbumModal show={isOpen} handleClose={handleIsOpen} userId={userId} />
        </div>
      )}
    </div>
  );
}

export default UsersPage;
