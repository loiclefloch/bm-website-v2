import React from 'react'
import PropTypes from 'prop-types'

import TextField from '@material-ui/core/TextField'

//import debounce from 'lodash/debounce'

const SearchBar = ({ onChange, classes, className = '', style = {}, autoFocus }) => (
  <TextField
    label="Search"
    // TODO: debounce
    onChange={onChange}//debounce(onChange, 1000)}
    style={style}
    className={className}
    classes={classes}
    autoFocus={autoFocus}
  />
)

SearchBar.defaultProps = {
  autoFocus: false,
}

SearchBar.propTypes = {
  value: PropTypes.string,

  className: PropTypes.string,

  /**
   * @param string new search query
   */
  onChange: PropTypes.func.isRequired,

  style: PropTypes.object,

  autoFocus: PropTypes.bool,
}

export default SearchBar
