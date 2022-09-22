import React, { Component } from 'react'
import Prop2 from './Prop2'
 class Prop1 extends Component {
    name="Gagan"
    mobile="iphone12"
    age="22"
    gender="male"
    size=[67,68,69,60]
  render() {
    return (
      <div>
        <h4>props 1</h4>
        <hr/>
        <Prop2 value={this.name} value1={this.mobile} value2={this.age} value3={this.gender} value4={this.size}/>
      </div>
    )
  }
}

export default Prop1
