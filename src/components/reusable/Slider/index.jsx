import React from 'react';

// import { MovieCard } from 'components/reusable';
import Arrow from 'assets/Arrow.svg';


function Slider({ items }) {
  return (
    <div className='slider'>
      <div className='slider__content'>
        {items.map((movie, i) =>
          <div className='slider__item' key={i}>
            {/* <MovieCard {...movie} /> */}
          </div>
        )}
      </div>
      <div className='slider__navigation'>
        <button className='slider__navigation-action slider__navigation-action_left'>
          <img src={Arrow} alt="arrow" />
        </button>
        <div className='slider__navigation-circle'></div>
        <div className='slider__navigation-circle slider__navigation-circle_active'></div>
        <div className='slider__navigation-circle'></div>
        <button className='slider__navigation-action slider__navigation-action_right'>
          <img src={Arrow} alt="arrow" />
        </button>
      </div>
    </div>
  );
}

export default Slider;