import React from 'react'

const RightNav = ({ children }) => {
  return (
    <nav
      style={{
        position: 'fixed',
        right: '10vw',
        top: 100,
      }}
    >
      {children}
    </nav>
  )
}

export default RightNav
