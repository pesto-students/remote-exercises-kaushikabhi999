import React from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from './Button';

function GameOver(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <div className="d-flex flex-column justify-content-center">
          <span className="h1 m-3 text-center">Oops! Game Over</span>
          <span className="h2 m-3 text-center">You scored {props.score} in {props.time} time.</span>
          <div className="text-center">
            <Button onClick={props.onHide} styleClass="btn btn-info m-3" innerText="Play Again" />
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default GameOver;