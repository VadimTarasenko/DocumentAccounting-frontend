import React from 'react';
import classNames from 'classnames';

const ContentWrapper = ({ children, className }) => (
  <div className={classNames('content-wrapper', className)}>
    {children}
  </div>
);

export default ContentWrapper;