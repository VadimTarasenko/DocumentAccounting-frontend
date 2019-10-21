import React from 'react';

import { Modal, Dropzone } from 'components/reusable';

function AddDocument({ handleClose }) {
  return (
    <Modal handleClose={handleClose}>
      <div className='addDocument'>
        <div className='addDocument__header'>
          <div className='addDocument__title'>Добавити новий файл</div>
          <div className='addDocument__description'>Допустимі розширення: doc, docx, pdf, txt</div>
        </div>
        <div className='addDocument__content'>
          <div className='addDocument__dropzone'>
            <Dropzone files={[]} />
          </div>
          <div className=''>

          </div>
        </div>
      </div>
    </Modal>
  )
}

export default AddDocument;