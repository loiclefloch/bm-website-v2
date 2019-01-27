import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import ButtonTagLink from 'components/ButtonTagLink'
import ButtonLink from 'components/ButtonLink'

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 2,
  },
  list: {},
  listItem: {
    marginRight: theme.spacing.unit,
  },
  footer: {
    marginTop: theme.spacing.unit,
  },
})

const books = [
  {
    id: 1,
    circleId: 1,
    name: 'Product Design',
  },
  {
    id: 2,
    circleId: 1,
    name: 'UX',
  },
  {
    id: 3,
    circleId: 1,
    name: 'React & Redux',
  },
]

const SidebarBooksView = ({ classes }) => (
  <div className={classes.root}>
    <div className={classes.list}>
      {books.map(book => (
        <ButtonTagLink
          key={book.id}
          to={ButtonLink.getRoute('BOOK')}
          params={{ circleId: book.circleId, bookId: book.id }}
          className={classes.listItem}
        >
          {book.name}
        </ButtonTagLink>
      ))}
    </div>

    <div className={classes.footer}>
      <ButtonLink to={ButtonLink.getRoute('BOOK_NEW')} variant="text">
        + New book
      </ButtonLink>
    </div>
  </div>
)

export default withStyles(styles)(SidebarBooksView)
