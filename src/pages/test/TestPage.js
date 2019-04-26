import React from 'react'
import BookContainer from 'modules/book/container'

const renderContainer = () => {
  return (
    <div>
      AAA
      <BookContainer apiCallParameters={[2, 10]}>
        {({ isFetching, data, error }) => (
          <div>
            <h1>TEST</h1>
            <pre>{JSON.stringify(data)}</pre>
          </div>
        )}
      </BookContainer>
    </div>
  )
}

export default renderContainer
