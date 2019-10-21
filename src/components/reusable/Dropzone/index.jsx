import React from 'react';

const Dropzone = ({ files }) => {

  return (
    <div className='dropzone'>
      {files.lenght ? (
        <div></div>
      ) : (
          <div className='dropzone__label'>
            Перетягніть файл
          </div>
        )}
    </div>
  );
}

export default Dropzone;