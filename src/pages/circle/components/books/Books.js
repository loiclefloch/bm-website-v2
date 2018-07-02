import React from 'react'

import ButtonLink from 'components/ButtonLink'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import BooksList from './BooksList'

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 6,
    borderRight: `1px solid ${theme.palette.divider}`,
    marginRight: theme.spacing.unit * 2,
    height: '100%',
  },
  headerArea: {
  },
})

const Books = ({ circle, classes }) => (
  <div className={classes.root}>
    <div className={classes.headerArea}>
      <Typography variant="headline">Books</Typography>

      <ButtonLink to={ButtonLink.getRoute('BOOK_NEW')} params={{ circleId: circle.id }}>
        Nouveau
      </ButtonLink>
    </div>

    <BooksList circleId={circle.id} books={circle.books} />
  </div>
)

export default withStyles(styles)(Books)
