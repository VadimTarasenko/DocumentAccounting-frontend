import React from 'react';

const Comment = ({ fullName, time, text }) => (
  <div className='comment'>
    <div className='comment__info'>
      <div className='comment__infoBlock'>
        <div className='comment__avatar'></div>
        <div className='comment__fullName'>{fullName}</div>
      </div>
      <div className='comment__infoBlock'>
        <div className='comment__time'>{time}</div>
      </div>
    </div>
    <div className='comment__text'>{text}</div>
  </div>
);

export default Comment;