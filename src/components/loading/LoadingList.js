import React from 'react'
import PropTypes from 'prop-types'

import _ from 'lodash'

import CircularProgress from 'material-ui/CircularProgress';
import RefreshIndicator from 'material-ui/RefreshIndicator';

import './loading_list.css'

const style = {
  refresh: {
    display: 'inline-block',
    position: 'relative',
  },
};

const emptyList = ({ size, thickness }) => {
  return (
    <CircularProgress
      size={size}
      thickness={thickness}
    />
  )
}

const notEmptyList = ({ size, thickness }) => {
  return (
    <RefreshIndicator
      left={10}
      top={0}
      status="loading"
      size={size}
      thickness={thickness}
      style={style.refresh}
    />
  )
}

/**
 * A loading for a list.
 * The loading is centered, and differ if the list is already displayed are not.
 *
 * @param size the size of the indicator, default 50.
 * @param thickness the thickness of the indicator, default 4.
 * @param listEmpty a bool are an array to test emptiness.
 */
const LoadingList = ({ size = 50, listEmpty = false, thickness = 4 }) => {
  listEmpty = listEmpty instanceof Boolean ? listEmpty : _.isEmpty(listEmpty)

  const loaderProps = { size, thickness }

  return (
    <div
      style={{
        position: 'relative',
        textAlign: 'center',
        marginTop: listEmpty ? '10%' : '40px',
        marginBottom: listEmpty ? '0' : '40px',
      }}
    >
      {listEmpty ? emptyList(loaderProps) : notEmptyList(loaderProps) }
    </div>
  )

}

export default LoadingList
