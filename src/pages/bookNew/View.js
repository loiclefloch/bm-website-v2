import React from 'react'

import { compose } from 'reacticoon/view'
import { withForm } from 'reacticoon-plugins/reacticoon-form/src'
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

const View = ({ circle, classes }) => (
  <div className={classes.root}>
    <h1>Add book to circle "{circle.name}"</h1>

    <AddBookForm circleId={circle.id} />
  </div>
)

export default compose(
  withForm(BookForm),
  withStyles(styles)
)(View)
