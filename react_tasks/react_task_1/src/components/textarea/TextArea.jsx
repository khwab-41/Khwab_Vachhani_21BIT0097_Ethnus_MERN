import { useState } from "react";

const TextArea = () => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const words = text.split(/\s+/).filter((word) => word != "");

  return (
    <>
      <textarea
        name="textarea"
        id="txtarea"
        cols=""
        rows="10"
        value={text}
        onChange={handleChange}
        placeholder="Enter your text here..."
      ></textarea>
      <div>
        <p>Word Count: {words.length}</p>
        <div></div>
      </div>
    </>
  );
};

export default TextArea;
