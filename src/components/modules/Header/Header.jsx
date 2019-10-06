import React from 'react';

import { ContentWrapper } from 'components/reusable';

function Header() {
  return (
    <div className='header'>
      <ContentWrapper className='header__content'>
        <div className='header__logo'></div>
        <div className='header__user'>
          <div className='header__userAvatar'></div>
          <div className='header__userFullName'>Vadim Tarasenko</div>
        </div>
      </ContentWrapper>
    </div>
  );
}

export default Header;