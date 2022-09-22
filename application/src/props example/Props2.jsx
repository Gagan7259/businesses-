import React from 'react'
import Props2 from './props2'
function Props2(props) {
  return (
    <div>
      <h2>Props2 example</h2>
      <pre>{JSON.stringify(props)}</pre>
      <h4>property 1:{props.value1}</h4>
      <h4>property 1:{props.value2}</h4>
    </div>
  )
}
export default Props2
