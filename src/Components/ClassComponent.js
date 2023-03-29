import React, { Component } from 'react';
import ClassC from './ClassC';

class ClassComponent extends Component {

    constructor() {
        super()
        this.state = {
          Data: false
        }
      }
  render() {
    return (
      <div>
        <button className="btn btn2" onClick={()=>this.setState({Data:!this.state.Data})}>
            To see styling in class component</button> 

          {this.state.Data && <ClassC/>} 
      </div>
    )
  }
}

export default ClassComponent;