import React from 'react';

import './Modal.styles.css';

const Modal = ({ children, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <button onClick={onClose} className="modal-content-close">
          <b>X</b>
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
