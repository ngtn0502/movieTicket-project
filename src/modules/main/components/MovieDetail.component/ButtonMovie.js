import React from 'react';

function ButtonMovie({ className, children }) {
  return (
    <button type="button" className={`btn__watching ${className}`}>
      {children}
    </button>
  );
}

export default ButtonMovie;
