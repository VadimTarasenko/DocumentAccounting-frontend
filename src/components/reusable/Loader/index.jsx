import React, { useEffect } from 'react';


const Loader = ({ isOpen }) => {

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
  }, [isOpen]);

  return (
    <>
      {isOpen && <div className='loader-shadow'>
        <div className='loader'>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>}
    </>
  )
};

export default Loader;