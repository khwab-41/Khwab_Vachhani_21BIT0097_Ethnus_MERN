import React, { useState } from "react";
import "./ColorPicker.css";

function ColorPicker({ onColorChange }) {
  const [selectedColor, setSelectedColor] = useState("#BFB5DA");

  const handleColorChange = (newColor) => {
    setSelectedColor(newColor);
    onColorChange(newColor);
  };

  const colors = [
    "#FE0000",
    "#00FF01",
    "#0000FE",
    "#FFFF00",
    "#FF00FE",
    "#00FFFF",
    "#FEA500",
    "#81007F",
    "#FFC0CB",
    "#008001",
    "#FE6347",
    "#01CED1",
    "#8B4512",
    "#FF8B00",
    "#4682B4",
    "#FED700",
  ];

  return (
    <>
      <div
        className="innerContainer"
        style={{ backgroundColor: selectedColor }}
      >
        <div className="innerRow">
          {colors.map((color, index) => (
            <button
              key={index}
              className="colorButton"
              style={{ backgroundColor: color }}
              onClick={() => handleColorChange(color)}
            />
          ))}
        </div>
        <div className="pickaColor">Pick a color</div>
      </div>
    </>
  );
}

export default ColorPicker;
