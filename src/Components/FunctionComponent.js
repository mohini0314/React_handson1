import React from 'react';
import { useState } from 'react';
import Func from './Func';

function FunctionComponent() {
      const [count, setCount] = useState(false);

  const handleOnClickfunc = () => {
    setCount(!count);
  }
  return (
    <div>
          <button  className="btn btn1" onClick={handleOnClickfunc}>To see styling in functional component</button>
          {count? <Func/>: null} 
    </div>
   
  )
}

export default FunctionComponent;
