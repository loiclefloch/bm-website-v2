import React from 'react'

const ColorSquare = ({ color, width }) => {
  return (
    <div
      style={{
        display: 'inline-block',
        backgroundColor: color,
        width: width,
        height: width,
      }}
    >
    </div>
  )
}

const ColorWithLabel = ({ color, label, width = '20px' }) => {
  return (
    <div
      style={{
        lineHeight: width,
      }}
    >
      <ColorSquare
        color={color}
        width={width}
      />
      <span
        style={{
          paddingLeft: '5px',
        }}
      >
        {label}
      </span>
    </div>
  )
}

const ThemeView = ({ theme }) => {
  const { palette } = theme

  return (
    <div>
      <ColorWithLabel
        color={palette.primary1Color}
        label={'primary1Color'}
      />
    </div>
  )

}

export default ThemeView
