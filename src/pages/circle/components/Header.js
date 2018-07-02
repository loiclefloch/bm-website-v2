import React from 'react'

import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'

const CircleHeader = ({ circle }) => {
  return (
    <div>
      <Typography variant="headline">{circle.name}</Typography>

      <Divider />
    </div>
  )
}

export default CircleHeader
