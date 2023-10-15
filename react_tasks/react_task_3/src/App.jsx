import { useState } from "react";
import ColorPicker from "./components/ColorPicker/ColorPicker";
import "./App.css";

function App() {
  const [selectedColor, setSelectedColor] = useState("#BFB5DA");
  const handleColorChange = (color) => {
    setSelectedColor(color);
  };
  const bodyStyle = {
    background: `radial-gradient(circle at center, ${selectedColor}, #BFB5DA 70%)`,
  };
  return (
    <>
      <div className="App" style={bodyStyle}>
        <h1>Color Picker</h1>
        <ColorPicker onColorChange={handleColorChange}/>
      </div>
    </>
  );
}

export default App;
