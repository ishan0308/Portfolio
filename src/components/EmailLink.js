import React, { useState } from 'react';
import '../App.css';

const EmailLink = ({ email }) => {
  const handleClick = () => {
    const mailtoLink = `mailto:${email}`;
    window.location.href = mailtoLink;
  };

  return (
    <a style={{color: 'inherit', textDecoration: 'none'}} href={`mailto:${email}`} onClick={handleClick}>
      <h4 className="text3d">{email}</h4>
    </a>
  );
};

export default EmailLink;
