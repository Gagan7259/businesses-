import React from 'react'
import Props2 from './props2'
function Props1() {
  let a = 1000
  let b = 2000
  return (
    <div>
      <h4>Props example</h4>
      <Props2 value1={a} value2={b} />
    </div>
  )
}
export default Props1
