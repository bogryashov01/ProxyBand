import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetUsers } from '../../redux/user/async-actions';

import userSelectors from '../../redux/user/selectors';
import UsersPage from './usersPage';

function UsersPageContainer() {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [userId, setUserId] = useState(null);
  const users = useSelector(userSelectors.users);
  const loading = useSelector(userSelectors.loading);

  const handleIsOpen = (userId) => {
    setUserId(userId);
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    dispatch(GetUsers());
  }, [dispatch]);

  return (
    <UsersPage
      users={users}
      isOpen={isOpen}
      userId={userId}
      handleIsOpen={handleIsOpen}
      loading={loading}
    />
  );
}

export default UsersPageContainer;
