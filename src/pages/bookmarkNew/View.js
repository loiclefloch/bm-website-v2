import React from 'react'

import { compose } from 'reacticoon/view'
import { withForm } from 'reacticoon-plugins/reacticoon-form/src'
import { withStyles } from '@material-ui/core/styles'
import BookmarkForm from 'modules/bookmarkForm'
import AddBookmarkForm from './components/AddBookmarkForm'

const styles = theme => ({
  root: {
    textAlign: 'center',
    margin: '0 auto',
    height: '100%',
    marginTop: theme.spacing.unit * 10,
  },
})

const View = ({ classes }) => (
  <div className={classes.root}>
    <h1>Add bookmark</h1>

    <AddBookmarkForm />
  </div>
)

export default compose(
  withForm(BookmarkForm),
  withStyles(styles)
)(View)
