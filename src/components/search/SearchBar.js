import React from 'react'
import PropTypes from 'prop-types'
import TextField from 'material-ui/TextField';

const SearchBar = ({ onChange, className = '', style = {}, autoFocus }) => (
  <TextField
    hintText="Search"
    onChange={onChange}
    style={style}
    className={className}
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
