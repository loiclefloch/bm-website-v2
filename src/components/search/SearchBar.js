import React from 'react'
import PropTypes from 'prop-types'
import TextField from 'material-ui/TextField';

const SearchBar = ({ onChange, style }) => (
  <TextField
    hintText="Search"
    onChange={onChange}
    style={style}
  />
)

SearchBar.propTypes = {
  /**
   * @param string new search query
   */
  onChange: PropTypes.func.isRequired,

  style: PropTypes.object,
}

export default SearchBar
