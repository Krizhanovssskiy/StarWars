import './style.scss';

import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({children, onColose}) => {
  return ReactDOM.createPortal(
    <div
      onClick={onColose}
      className="Modal"
    >
      <div>
        {children}
      </div>
    </div>,
    document.getElementById('modal')
  )
};

export default Modal;