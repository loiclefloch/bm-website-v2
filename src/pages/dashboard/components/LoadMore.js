import React from 'react'
import PropTypes from 'prop-types'
import FlatButton from 'material-ui/FlatButton';

const LoadMore = ({ paging, onLoadMore }) => {
  if (!paging) {
    return (null)
  }
  return (
    <div
      style={{
        textAlign: 'center',
        marginTop: '20px',
      }}
    >
      <div>
        page {paging.page} on {paging.lastPage} ({paging.total} results)
      </div>

      <FlatButton
        label="Load more"
        primary
        onClick={() => onLoadMore(paging)}
        style={{
          marginTop: '20px',
        }}
      />
    </div>
  )
}

LoadMore.propTypes = {
  paging: PropTypes.object.isRequired,

  /**
   * @param paging
   */
  onLoadMore: PropTypes.func.isRequired,
}

export default LoadMore
