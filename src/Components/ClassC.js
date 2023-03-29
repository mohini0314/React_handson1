import React, { Component } from 'react';

class ClassC extends Component {
  render() {
    return (
    <div className='box2'>
        <h2 className='fun_comp' >This is created using class Component</h2>
        <p className='ext'>this is done using external CSS</p>
        <p style={{color: "blue", fontSize:"20px"}} >This is done using inline CSS</p>
      </div>
    )
  }
}
export default ClassC ;