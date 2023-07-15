import React, { useState } from 'react';
import { ChromePicker } from 'react-color';

const App = () => {
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');
  const [selectedColor, setSelectedColor] = useState('#ffffff');

  const handleColorChange = (color) => {
    setSelectedColor(color.hex);
  };

  const handleColorSubmit = (e) => {
    e.preventDefault();
    setBackgroundColor(selectedColor);
  };

  return (
    <div>
      <h1>Student Registration</h1>
      <form onSubmit={handleColorSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',backgroundColor }}>
        <label htmlFor="name">Student Name:</label>
        <input type="text" id="name" required />

        <label htmlFor="rollNo">Roll No.:</label>
        <input type="text" id="rollNo" required />

        <label htmlFor="matricMarks">Matric Marks:</label>
        <input type="number" id="matricMarks" required />

        <label htmlFor="fscMarks">FSC Marks:</label>
        <input type="number" id="fscMarks" required />

        <label htmlFor="entryTestMarks">Entry Test Marks:</label>
        <input type="number" id="entryTestMarks" required />

        <ChromePicker color={selectedColor} onChange={handleColorChange} />

        <button type="submit">Change Color & Submit</button>
      </form>

      <div id="result">

      </div>
    </div>
  );
};

export default App;
