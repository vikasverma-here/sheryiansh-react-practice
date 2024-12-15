import React from 'react';

const Pannel = ({ title, children, isActive, onClick }) => {
  return (
    <div>
      <h3 onClick={onClick} style={{ cursor: 'pointer' }}>
        {title}
      </h3>
      {isActive ? <p>{children}</p> : null}
    </div>
  );
};

export default Pannel;
