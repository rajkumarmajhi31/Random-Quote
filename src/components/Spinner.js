import React from 'react';
import './Spinner.css'; 

const Spinner = ({ size = 50, color = '#007bff' }) => {
  return (
    <div className="spinner" style={{ width: size, height: size, borderColor: color }}> </div>
  );
};

export default Spinner;
