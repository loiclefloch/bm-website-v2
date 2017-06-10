import React from 'react'

import CheckCircleIcon from 'material-ui/svg-icons/action/check-circle'

const SelectedView = ({ show, isLightColor }) => {
  if (!show) {
    return (null)
  }

  return (
    <span
      className="u-flexCenter u-justifyContentCenter u-sizeFull u-floatRight"
      style={{
        margin: '0 auto',
      }}
    >
      <CheckCircleIcon
        style={{
          display: 'table-cell',
          margin: '0 auto',
          color: isLightColor ? 'black' : 'white',
        }}
      />
    </span>
  )
}

export default SelectedView
