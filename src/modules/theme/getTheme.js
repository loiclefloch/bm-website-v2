import { createMuiTheme } from '@material-ui/core/styles'
import bmTheme from './constants/bmTheme'

/**
 * Inspired by getMuiTheme
 * https://github.com/callemall/material-ui/blob/master/src/styles/getMuiTheme.js
 */

const getTheme = () => {
  let theme = createMuiTheme(
    // getMuiTheme(
    //   {
    //     palette: bmTheme.palette,
    //   },
    // ),  // the default Mui theme
    bmTheme // our override of the mui theme + custom data
  )

  return theme
}

export default getTheme
