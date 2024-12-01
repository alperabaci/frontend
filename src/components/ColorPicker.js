import React from 'react';
import './ColorPicker.css';

const ColorPicker = ({ colors, setCurrentImage, images }) => {
  return (
    <div className="color-picker">
      {colors.map((color, index) => (
        <button
          key={index}
          className={`color-btn ${color.className}`}
          onClick={() => setCurrentImage(images[color])}
          title={color.label}
        ></button>
      ))}
    </div>
  );
};

export default ColorPicker;
