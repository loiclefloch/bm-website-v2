import React from 'react'

import { withStyles } from '@material-ui/core/styles'

// import PreviewPicture from './PreviewPicture'
import Description from './Description'
import Divider from '@material-ui/core/Divider'

const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit * 6,
  }
})

const BookmarkHeader = ({ bookmark, classes }) => {

  return (
    <div className={classes.root}>
      <h1>{bookmark.name}</h1>

     
      {/* <PreviewPicture
        bookmark={bookmark}
      /> */}

      <Description
        bookmark={bookmark}
      />

    
      <Divider />

    </div>
  )
}

export default withStyles(styles)(BookmarkHeader)
