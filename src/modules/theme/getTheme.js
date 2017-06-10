import merge from 'lodash/merge'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import bmTheme from './constants/bmTheme'

/**
* Inspired by getMuiTheme
* https://github.com/callemall/material-ui/blob/master/src/styles/getMuiTheme.js
*/

const getTheme = (themeOverride, ...more) => {
  let theme = merge(
    getMuiTheme(),  // the default Mui theme
    bmTheme, // our override of the mui theme + custom data
    themeOverride, // the override parameter
  )

  return theme
}

export default getTheme
