import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Circles } from 'react-loader-spinner';

import './modal.css';

function AlbumModal({ show, handleClose, albums, loading }) {
  return (
    <Modal
      show={show}
      onHide={() => {
        handleClose(null);
      }}>
      <Modal.Header closeButton>
        <Modal.Title>Albums</Modal.Title>
      </Modal.Header>
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
        <>
          <Modal.Body>
            <div className="modal-content-block">
              {albums.map((album) => {
                return (
                  <div key={album.id}>
                    <h4>{album.title}</h4>
                    <hr />
                  </div>
                );
              })}
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => {
                handleClose(null);
              }}>
              Close
            </Button>
          </Modal.Footer>
        </>
      )}
    </Modal>
  );
}

export default AlbumModal;
