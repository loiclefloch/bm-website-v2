import React from 'react'

import { compose } from 'reacticoon/view'
import { withForm } from 'plugins/reacticoon-form'
import { withStyles } from '@material-ui/core/styles'
import BookForm from 'modules/bookForm'
import AddBookForm from './components/AddBookForm'

const styles = theme => ({
  root: {
    textAlign: 'center',
    margin: '0 auto',
    height: '100%',
    marginTop: theme.spacing.unit * 10,
  },
})

const View = ({ circleId, classes }) => (
  <div className={classes.root}>
    <h1>Add book</h1>

    <AddBookForm circleId={circleId} />
  </div>
)

export default compose(
  withForm(BookForm),
  withStyles(styles)
)(View)
