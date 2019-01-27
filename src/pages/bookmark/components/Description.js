import React from 'react'

const Description = ({ bookmark }) => {

  return (
    <p
      style={{
        margin: '20px 0',
      }}
      className="readable"
    >
      {bookmark.description}
    </p>
  )
}

export default Description
