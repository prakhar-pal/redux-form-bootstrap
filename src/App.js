import React from 'react';
import './App.css';
import {Input} from 'redux-form-bootstrap';
function App() {
  console.log(Input);
  return (
    <div className="container my-3 mx-auto">
      <Input
        type="text"
        addons={{
          prepend: ["@",'$'],
          append: [".com"]
        }}
        placeholder="Enter a value"
      />
    </div>
  );
}

export default App;
