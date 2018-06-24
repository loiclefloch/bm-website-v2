import React from 'react'

import Divider from '@material-ui/core/Divider'

const CircleHeader = ({ circle }) => {
  return (
    <div>
      <h1>{circle.name}</h1>

      <Divider />
    </div>
  )
}

export default CircleHeader
