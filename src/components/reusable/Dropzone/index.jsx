import React, { useEffect } from 'react';

const Dropzone = ({ files }) => {

  useEffect(() => {

    // window.addEventListener('dragenter', (e) => {
    //   if (!e.target.classList.contains('dropzone')) {
    //     e.preventDefault();
    //     e.dataTransfer.effectAllowed = "none";
    //     e.dataTransfer.dropEffect = "none";
    //   }
    // }, false);

    // window.addEventListener('dragover', (e) => {
    //   if (!e.target.classList.contains('dropzone')) {
    //     e.preventDefault();
    //     e.dataTransfer.effectAllowed = "none";
    //     e.dataTransfer.dropEffect = "none";
    //   }
    // });

    // window.addEventListener('drop', (e) => {
    //   // console.log(e.target)
    //   e.preventDefault();
    //   e.dataTransfer.effectAllowed = "none";
    //   e.dataTransfer.dropEffect = "none";
    // })
  }, []);

  return (
    <label
      className='dropzone'
    >
      {files.lenght ? (
        <div></div>
      ) : (
          <div className='dropzone__label'>
            Перетягніть файл
          </div>
        )}
      <input type="file" />
    </label>
  );
}

export default Dropzone;