import React from 'react'
import PropTypes from 'prop-types'
import TextField from 'material-ui/TextField';

const SearchBar = ({ onChange, style, autoFocus }) => (
  <TextField
    hintText="Search"
    onChange={onChange}
    style={style}
    autoFocus={autoFocus}
  />
)

SearchBar.defaultProps = {
  autoFocus: false,
}

SearchBar.propTypes = {
  /**
   * @param string new search query
   */
  onChange: PropTypes.func.isRequired,

  style: PropTypes.object,

  autoFocus: PropTypes.bool,
}

export default SearchBar
