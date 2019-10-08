import React, { useEffect } from 'react';

const Modal = ({ children, handleClose }) => {

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
    }
  }, []);

  return (
    <div className='modal'>
      <div className='modal__content'>
        {children}
      </div>
      <div className='modal__shadow' onClick={handleClose}></div>
    </div>
  );
}

export default Modal;