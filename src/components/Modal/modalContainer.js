import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetAlbums } from '../../redux/albums/async-actions';
import albumsSelectors from '../../redux/albums/selectors';
import AlbumModal from './modal';

function ModalContainer({ userId, show, handleClose }) {
  const dispatch = useDispatch();
  const albums = useSelector(albumsSelectors.albums);
  const loading = useSelector(albumsSelectors.loading);

  useEffect(() => {
    if (userId !== null) {
      dispatch(GetAlbums(userId));
    }
  }, [dispatch, userId]);

  return <AlbumModal show={show} handleClose={handleClose} albums={albums} loading={loading} />;
}

export default ModalContainer;
