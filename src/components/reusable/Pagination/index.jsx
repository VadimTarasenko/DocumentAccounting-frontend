import React from 'react';

import ArrowIcon from 'assets/Arrow.svg';

function Pagination() {
  return (
    <div className='pagination'>
      <button className='pagination__item pagination__arrow_left'>
        <img src={ArrowIcon} alt="" />
      </button>
      <button className='pagination__item'>1</button>
      <button className='pagination__item pagination__item_active' disabled>2</button>
      <button className='pagination__item'>3</button>
      <button className='pagination__item'>4</button>
      <button className='pagination__item'>5</button>
      <button className='pagination__item'>6</button>
      <button className='pagination__item'>7</button>
      <button className='pagination__item'>8</button>
      <button className='pagination__item pagination__arrow_right'>
        <img src={ArrowIcon} alt="" />
      </button>
    </div>
  )
}

export default Pagination;