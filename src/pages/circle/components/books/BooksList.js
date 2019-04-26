import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import Grid from '@material-ui/core/Grid'
import BooksListItem from './BooksListItem'

const styles = theme => ({
  root: {
    // marginTop: theme.spacing.unit * 4,
    // marginLeft: theme.app.sidebar.width / 2,
  },
})

const ItemOnCol = ({ circleId, book }) => (
  <Grid
    ite
    xs={6}
    md={3}
    style={{
      padding: '10px',
    }}
  >
    <BooksListItem circleId={circleId} book={book} />
  </Grid>
)

const BooksList = ({ circleId, books, classes }) => (
  <List className={classes.root}>
    <Grid container>
      {books.map(book => <ItemOnCol key={book.id} circleId={circleId} book={book} />)}
    </Grid>
  </List>
)

BooksList.propTypes = {
  books: PropTypes.array.isRequired,
}

export default withStyles(styles)(BooksList)
