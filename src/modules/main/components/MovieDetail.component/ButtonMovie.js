import React from 'react';

function ButtonMovie({ className, children, onClick }) {
  return (
    <button
      type="button"
      className={`btn__watching ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default ButtonMovie;
