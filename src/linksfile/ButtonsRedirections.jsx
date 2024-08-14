import React from 'react';

const ButtonsRedirections = ({ className, text, buttonType }) => {
  console.log('ButtonsRedirections component loaded');
  return (
    <button className={className}>
      {text}
    </button>
  );
};

export default ButtonsRedirections;
