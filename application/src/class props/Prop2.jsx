import React, { Component } from 'react'
class Prop2 extends Component {
  render() {
    return (
      <div>
        <h4>props 2</h4>
        <pre>{JSON.stringify(this.props)}</pre>
        <h4>name:{this.props.value}</h4>
<h4>mobile:{this.props.value1}</h4>
        <h4>age:{this.props.value2}</h4>
        <h4>gender:{this.props.value3}</h4>
        <h4>size:{this.props.value4[3]}</h4>
      </div>
    )
  }
}

export default Prop2
