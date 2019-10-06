import React from 'react';
import { Link } from 'react-router-dom';

function DocumentCard({ id, name, img, date }) {
  return (
    <Link className='documentCard' to={`/document?id=${id}`}>
      <div className='documentCard__photo'>
        <div className='documentCard__photo-ratio' />
        <img src={img} alt="title" />
      </div>
      <div className="documentCard__info">
        <h5>{name}</h5>
        <span>{`${date}`}</span>
      </div>
    </Link>
  );
}

export default DocumentCard;